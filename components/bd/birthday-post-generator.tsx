"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Upload, Download, Copy, Check, Sparkles, Send } from "lucide-react";
import { BirthdayPostTemplate } from "./birthday-post-template";
import { ImageCropModal } from "./image-crop-modal";
import { TEMPLATES } from "@/lib/templates";
import { loadScript, loadImageFile } from "@/lib/utils";
import type { FormData } from "@/components/birthday-post";
import { callGroq } from "@/lib/question-gen/openai-client";

const DEFAULT_FORM_DATA: FormData = {
  name: "",
  batch: "9th Batch",
  faculty: "Faculty of Technology",
  university: "University of Ruhuna",
  message:
    "Wishing you a spectacular birthday! As you mark another milestone in your life today, take a moment to celebrate not just how far you have come, but the incredible person you are becoming. May this special day be filled with the warmth of love, the echo of laughter, and moments that turn into cherished memories.",
  profileImage: null,
  templateId: "template1",
};

declare global {
  interface Window {
    html2canvas: (
      element: HTMLElement | null,
      options?: any
    ) => Promise<HTMLCanvasElement>;
  }
}

export default function BirthdayPostGenerator() {
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMsgGenerating, setIsMsgGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [msgCopied, setMsgCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [scale, setScale] = useState(0.3);
  const [MSG, setMSG] = useState("");
  const [msgList, setMsgList] = useState<string[]>();

  const hiddenCanvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  const selectedTemplate =
    TEMPLATES.find((t) => t.id === formData.templateId) || TEMPLATES[0];

  useEffect(() => {
    const updateScale = () => {
      if (!previewContainerRef.current) return;
      const containerWidth = previewContainerRef.current.clientWidth - 32;
      const containerHeight = previewContainerRef.current.clientHeight - 32;
      const ratioW = containerWidth / 1080;
      const ratioH = containerHeight / 1350;
      setScale(Math.min(ratioW, ratioH));
    };

    const observer = new ResizeObserver(updateScale);
    if (previewContainerRef.current)
      observer.observe(previewContainerRef.current);
    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const updateFormData = (field: keyof FormData, value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const imageUrl = await loadImageFile(file);
      if (typeof imageUrl === "string") {
        setTempImage(imageUrl);
        setShowCropper(true);
      }
    } catch (error) {
      alert("Error loading image.");
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleCropSave = (croppedImage: string) => {
    updateFormData("profileImage", croppedImage);
    setShowCropper(false);
    setTempImage(null);
  };

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (!hiddenCanvasRef.current) throw new Error("Canvas not found");

      const canvas = await window.html2canvas(hiddenCanvasRef.current, {
        scale: 2,
        width: 1080,
        height: 1350,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      });
      return canvas;
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    try {
      const canvas = await generateImage();
      const link = document.createElement("a");
      link.download = `birthday-${
        formData.name.replace(/\s+/g, "-") || "post"
      }.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      alert("Error generating image.");
    }
  };
  const handleGenerateMSG = async () => {
    setIsMsgGenerating(true);
    try {
      const response = await fetch("/api/bd/msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send the data the backend expects
        body: JSON.stringify({
          prompt: `Input:
- Name: ${formData.name}
- Sender: ${formData.batch} ${formData.faculty} ${formData.university}
- Hashtags: [Insert 2-3 hashtags, e.g., #UOR #fot #Batch9]

Instructions:
Act as a professional Social Media Admin for a university student union. Write a birthday message for the person listed above using the following specific style rules:

1. Tone: Formal, warm, inspirational, and slightly poetic. Avoid slang.
2. Structure:
   - Header: A short, hype phrase (e.g., "Happy Level Up Day!") with festive emojis.
   - Salutation: "Dear ${formData.name},"
   - Opener: A soft, welcoming sentence.
   - Core Message: A deep sentence wishing them "growth," "light," "strength," and "success" in the upcoming year.
   - Closing: A brief motivational bridge connecting the past to the future.
   - Sign-off: "Best wishes from," followed by the [Sender].
   - Tags: Place the hashtags at the very bottom.
   -use "\n" to create line breaks.don't use <br> tags
3. Formatting: Use line breaks between every sentence. Use elegant emojis (✨, 🌟, 🥂, 🎂, 🤍) at the end of each line.

Generate the message now.`,
        }),
      });
      const msg = await response.json();
      const msgOutput: string = msg.result.content;
      const msgSaparate = msgOutput.split("\n");
      setMSG(msgOutput);
      setMsgList(msgSaparate);
      console.log(msgSaparate);
    } catch (err) {
      console.log(err);
    }
    setIsMsgGenerating(false);
  };
  const handleCopyMSG = async () => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "text/plain": MSG }),
      ]);
      setMsgCopied(true);
      setTimeout(() => setMsgCopied(false), 2000);
    } catch {
      alert("Could not copy to clipboard.");
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      const canvas = await generateImage();
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          alert("Could not copy to clipboard.");
        }
      });
    } catch (error) {
      alert("Error copying.");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#eff3fc] font-sans overflow-hidden flex flex-col">
      <nav className="h-16 bg-[#fbfbfb] border-b border-[#caced5] flex items-center justify-between px-6 shrink-0 z-[100]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md border-2 border-[#7b7dee] to-[#06e114] flex items-center justify-center">
            <Sparkles size={18} className="text-[#7b7dee]" />
          </div>
          <h1 className="lg:text-xl md:text-md text-s font-semibold text-[#34343e] m-0">
            Birthday Post Studio - 9th Batch
          </h1>
        </div>
        {/* <button
          onClick={() => setActiveTab("preview")}
          className={`md:hidden flex items-center gap-2 px-4 py-2 bg-[#7b7dee] text-white border-none rounded-lg text-sm font-semibold cursor-pointer ${activeTab === "preview" ? "hidden" : "flex"}`}
        >
          PREVIEW →
        </button> */}
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div
          className={`w-full md:w-[400px] bg-[#fbfbfb] border-r border-[#caced5] overflow-y-auto flex-col ${
            activeTab === "preview" ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="p-6 flex-1">
            <div
              style={{ width: `auto`, height: `${1350 * 0.275}px` }}
              className="overflow-hidden rounded-md transition-all mb-6 md:hidden flex"
            >
              <div
                style={{
                  width: "1080px",
                  height: "1350px",
                  transform: `scale(.275)`,
                  transformOrigin: "top left",
                }}
              >
                <BirthdayPostTemplate
                  data={{ ...formData, template: selectedTemplate }}
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2 text-[#34343e]">
              Details
            </h2>
            <p className="text-sm text-[#6b7280] mb-6">
              Fill in the birthday post information
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#34343e] mb-3 uppercase tracking-wider">
                  Template
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {TEMPLATES.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => updateFormData("templateId", template.id)}
                      className={`p-0 border-2 rounded-xl bg-white cursor-pointer overflow-hidden transition-all relative ${
                        formData.templateId === template.id
                          ? "border-[#7b7dee] ring-2 ring-[#7b7dee]/20"
                          : "border-[#caced5]"
                      }`}
                    >
                      <div
                        style={{
                          backgroundImage: template.background,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                        className="w-full h-20 flex items-center justify-center flex-col gap-2"
                      >
                        {/* <div
                          style={{ background: template.ringGradient, boxShadow: `0 0 15px ${template.ringGlow}` }}
                          className="w-10 h-10 rounded-full"
                        /> */}
                        <span className="text-[11px] text-white font-semibold uppercase tracking-wider">
                          {template.name}
                        </span>
                      </div>
                      {formData.templateId === template.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#7b7dee] flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {[
                {
                  label: "Full Name",
                  field: "name",
                  placeholder: "Enter full name",
                },
                {
                  label: "Batch",
                  field: "batch",
                  placeholder: "e.g. 2k23/2k24 Batch",
                },
                {
                  label: "Faculty",
                  field: "faculty",
                  placeholder: "e.g. Faculty Of Technology",
                },
                {
                  label: "University",
                  field: "university",
                  placeholder: "e.g. University of Ruhuna",
                },
              ].map((input) => (
                <div key={input.field}>
                  <label className="block text-[13px] font-semibold text-[#34343e] mb-2 uppercase tracking-wider">
                    {input.label}
                  </label>
                  <input
                    type="text"
                    value={(formData as any)[input.field]}
                    onChange={(e) =>
                      updateFormData(input.field as any, e.target.value)
                    }
                    placeholder={input.placeholder}
                    className="w-full p-3 border border-[#caced5] rounded-lg text-sm bg-white text-[#34343e] box-border focus:border-[#7b7dee] focus:ring-2 focus:ring-[#7b7dee]/20 transition-all outline-hidden"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[13px] font-semibold text-[#34343e] mb-2 uppercase tracking-wider">
                  Birthday Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="Enter your birthday message..."
                  rows={3}
                  className="w-full p-3 border border-[#caced5] rounded-lg text-sm bg-white text-[#34343e] box-border resize-y focus:border-[#7b7dee] focus:ring-2 focus:ring-[#7b7dee]/20 transition-all outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#34343e] mb-2 uppercase tracking-wider">
                  Profile Photo
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full p-4 border-2 border-dashed rounded-lg cursor-pointer flex items-center justify-center gap-3 transition-all ${
                    formData.profileImage
                      ? "bg-[#f9fafb] border-[#7b7dee]"
                      : "bg-white border-[#caced5] hover:border-[#7b7dee]"
                  }`}
                >
                  {formData.profileImage ? (
                    <>
                      <img
                        src={formData.profileImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover shadow-sm"
                      />
                      <span className="text-[#7b7dee] text-sm font-semibold">
                        Change Photo
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload size={24} className="text-[#9ca3af]" />
                      <span className="text-[#9ca3af] text-sm font-medium">
                        Upload Photo
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-6 border-t border-[#caced5] bg-[#fbfbfb] flex gap-3">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="flex-1 py-3.5 bg-[#7b7dee] text-white border-none rounded-lg text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 hover:bg-[#6a6cd9] disabled:opacity-60 transition-all shadow-sm"
            >
              {isGenerating ? (
                <span>Generating...</span>
              ) : (
                <>
                  <Download size={18} /> Download HD
                </>
              )}
            </button>
            <button
              onClick={handleCopyToClipboard}
              disabled={isGenerating}
              className="px-5 py-3.5 bg-white text-[#34343e] border border-[#caced5] rounded-lg text-sm font-semibold cursor-pointer flex items-center gap-2 hover:bg-[#f9fafb] disabled:opacity-60 transition-all"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-[#10b981]" /> Copied
                </>
              ) : (
                <>
                  <Copy size={18} /> Copy
                </>
              )}
            </button>
          </div>
          <div className="p-5 md:p-6 border-t border-[#caced5] bg-[#fbfbfb] flex gap-3 flex-col">
            <p
              className={`w-full p-4 border-2 border-dashed text-sm rounded-lg cursor-pointer gap-3 transition-all`}
            >
              {msgList?.map((msg,idx) => (
                <span key={idx+"o"}>{msg}<br/></span>
              ))}
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleGenerateMSG}
                disabled={isMsgGenerating}
                className="flex-1 py-3.5 bg-[#7b7dee] text-white border-none rounded-lg text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 hover:bg-[#6a6cd9] disabled:opacity-60 transition-all shadow-sm"
              >
                {isMsgGenerating ? (
                  <span>Generating...</span>
                ) : (
                  <>
                    <Send size={18} /> Generate MSG
                  </>
                )}
              </button>
              <button
                onClick={handleCopyMSG}
                disabled={isMsgGenerating}
                className="px-5 py-3.5 bg-white text-[#34343e] border border-[#caced5] rounded-lg text-sm font-semibold cursor-pointer flex items-center gap-2 hover:bg-[#f9fafb] disabled:opacity-60 transition-all"
              >
                {msgCopied ? (
                  <>
                    <Check size={18} className="text-[#10b981]" /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div
          ref={previewContainerRef}
          className={`flex-1 bg-[#e5e7eb] items-center justify-center p-5 relative overflow-auto ${
            activeTab === "edit" ? "hidden md:flex" : "flex"
          }`}
        >
          <button
            onClick={() => setActiveTab("edit")}
            className="md:hidden absolute top-5 left-5 px-5 py-2.5 bg-white border border-[#caced5] rounded-lg text-sm font-semibold cursor-pointer text-[#34343e] shadow-sm z-10"
          >
            ← Back
          </button>

          <div
            style={{ width: `${1080 * scale}px`, height: `${1350 * scale}px` }}
            className="overflow-hidden shadow-2xl rounded-xl transition-all"
          >
            <div
              style={{
                width: "1080px",
                height: "1350px",
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <BirthdayPostTemplate
                data={{ ...formData, template: selectedTemplate }}
              />
            </div>
          </div>

          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 px-8 py-3.5 bg-linear-to-br from-[#7b7dee] to-[#a855f7] text-white border-none rounded-xl text-base font-semibold cursor-pointer flex items-center gap-2 shadow-xl hover:scale-105 transition-all disabled:opacity-60"
          >
            {isGenerating ? (
              <span>Generating...</span>
            ) : (
              <>
                <Download size={20} /> Save Image
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hidden Render Element */}
      {/* <div className="fixed -left-[130px] -top-[300px] w-[1080px] h-[1350px] scale-45">
        <BirthdayPostTemplate data={{ ...formData, template: selectedTemplate }} edit={true} />
      </div> */}
      <div className="fixed -left-[13000px] -top-[300000px] w-[1080px] h-[1350px] ">
        <BirthdayPostTemplate
          ref={hiddenCanvasRef}
          data={{ ...formData, template: selectedTemplate }}
          edit={true}
        />
      </div>

      {showCropper && tempImage && (
        <ImageCropModal
          imageUrl={tempImage}
          onSave={handleCropSave}
          onClose={() => setShowCropper(false)}
        />
      )}
    </div>
  );
}
