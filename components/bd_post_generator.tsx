"use client"
import React, { useState, useRef, useEffect } from "react";
import {
  Upload,
  Download,
  Copy,
  Check,
  X,
  RotateCcw,
  Sparkles,
  ZoomOut,
  ZoomIn,
  FlipHorizontal,
  RotateCw,
} from "lucide-react";

// ==================== TEMPLATE BACKGROUNDS ====================
const TEMPLATES = [
  {
    id: "template1",
    name: "Purple Galaxy",
    gradient: "linear-gradient(135deg, #0a0a1f 0%, #1a0a2e 50%, #2d1b4e 100%)",
    ringGradient: "linear-gradient(135deg, #00114cff, #08091dff)",
    ringGlow: "rgba(168, 85, 247, 0.6)",
  },
  {
    id: "template2",
    name: "Ocean Blue",
    gradient: "linear-gradient(135deg, #0a1f2e 0%, #0d2f4a 50%, #1a4d6f 100%)",
    ringGradient: "linear-gradient(135deg, #004c8c, #001f3d)",
    ringGlow: "rgba(59, 130, 246, 0.6)",
  },
  {
    id: "template3",
    name: "Sunset Orange",
    gradient: "linear-gradient(135deg, #2e1a0a 0%, #4a2f0d 50%, #6f4d1a 100%)",
    ringGradient: "linear-gradient(135deg, #8c3400, #3d1f00)",
    ringGlow: "rgba(251, 146, 60, 0.6)",
  },
  {
    id: "template4",
    name: "Emerald Green",
    gradient: "linear-gradient(135deg, #0a2e1a 0%, #0d4a2f 50%, #1a6f4d 100%)",
    ringGradient: "linear-gradient(135deg, #008c4c, #003d1f)",
    ringGlow: "rgba(16, 185, 129, 0.6)",
  },
];

// ==================== UTILITY FUNCTIONS ====================
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadImageFile = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result ?? null);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// ==================== IMAGE CROPPER ====================
interface ImageCropModalProps {
  imageUrl: string;
  onSave: (imageData: string) => void;
  onClose: () => void;
}

const ImageCropModal: React.FC<ImageCropModalProps> = ({
  imageUrl,
  onSave,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    flip: false,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imgRef.current = img;
      renderCanvas();
    };
    img.src = imageUrl;
  }, [imageUrl]);

  useEffect(() => {
    renderCanvas();
  }, [transform]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cW = 500;
    const cH = 500;
    const centerX = cW / 2;
    const centerY = cH / 2;

    ctx.clearRect(0, 0, cW, cH);
    ctx.fillStyle = "#18181b";
    ctx.fillRect(0, 0, cW, cH);

    const { x, y, scale, rotation, flip } = transform;

    ctx.save();
    ctx.translate(centerX + x, centerY + y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flip ? -1 : 1, 1);
    ctx.scale(scale, scale);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();

    ctx.globalCompositeOperation = "destination-in";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    ctx.strokeStyle = "#a855f7";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
    ctx.stroke();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    }));
  };

  const updateTransform = (key: string, value: any) => {
    setTransform((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx || !imgRef.current) return;

    canvas.width = 600;
    canvas.height = 600;
    const centerSave = 300;

    const { x, y, scale, rotation, flip } = transform;
    const ratio = 1.2;

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerSave, centerSave, 300, 0, Math.PI * 2);
    ctx.clip();

    ctx.translate(centerSave + x * ratio, centerSave + y * ratio);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flip ? -1 : 1, 1);
    ctx.scale(scale * ratio, scale * ratio);

    ctx.drawImage(
      imgRef.current,
      -imgRef.current.width / 2,
      -imgRef.current.height / 2
    );
    ctx.restore();

    onSave(canvas.toDataURL("image/png"));
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fbfbfb",
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "540px",
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 600,
              margin: 0,
              color: "#34343e",
            }}
          >
            Adjust Photo
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              color: "#34343e",
              borderRadius: "50%",
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div
          style={{
            background: "#e4e4e7",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
            style={{
              maxWidth: "100%",
              height: "auto",
              cursor: isDragging ? "grabbing" : "grab",
              touchAction: "none",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 8px",
            }}
          >
            <ZoomOut size={18} color="#666" />
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={transform.scale}
              onChange={(e) =>
                updateTransform("scale", parseFloat(e.target.value))
              }
              style={{
                flex: 1,
                height: "4px",
                borderRadius: "2px",
                cursor: "pointer",
                accentColor: "#7b7dee",
              }}
            />
            <ZoomIn size={18} color="#666" />
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <button
              onClick={() =>
                updateTransform("rotation", transform.rotation + 90)
              }
              title="Rotate 90°"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                background: "white",
                cursor: "pointer",
                color: "#34343e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RotateCw size={20} />
            </button>
            <button
              onClick={() => updateTransform("flip", !transform.flip)}
              title="Flip Horizontal"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                background: transform.flip ? "#eef2ff" : "white",
                cursor: "pointer",
                color: transform.flip ? "#7b7dee" : "#34343e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FlipHorizontal size={20} />
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "space-between",
            borderTop: "1px solid #eee",
            paddingTop: "20px",
          }}
        >
          <button
            onClick={() =>
              setTransform({ x: 0, y: 0, scale: 1, rotation: 0, flip: false })
            }
            style={{
              padding: "10px 16px",
              border: "1px solid #caced5",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#34343e",
              fontWeight: 500,
            }}
          >
            <RotateCcw size={16} /> Reset
          </button>
          <button
            onClick={handleSave}
            style={{
              padding: "10px 24px",
              border: "none",
              borderRadius: "8px",
              background: "#7b7dee",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Check size={16} /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== BIRTHDAY POST TEMPLATE ====================
interface BirthdayPostData {
  name: string;
  batch: string;
  faculty: string;
  university: string;
  profileImage: string | null;
  message: string;
  template: typeof TEMPLATES[0];
}

const BirthdayPostTemplate = React.forwardRef<
  HTMLDivElement,
  { data: BirthdayPostData }
>(({ data }, ref) => {
  const { name, batch, faculty, university, profileImage, message, template } = data;

  return (
    <div
      ref={ref}
      style={{
        width: "1080px",
        height: "1350px",
        background: template.gradient,
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Happy Birthday Title */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "140px",
          left: "0",
          textAlign: "center",
          fontFamily: "'Brush Script MT', cursive",
          fontSize: "150px",
          fontWeight: 400,
          lineHeight: "150px",
          color: "#ffffff",
          textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          letterSpacing: "8px",
        }}
      >
        Happy Birthday
      </div>

      {/* Profile Photo Container */}
      <div
        style={{
          position: "absolute",
          top: "320px",
          left: "340px",
          width: "400px",
          height: "400px",
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: template.ringGradient,
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 50px ${template.ringGlow}`,
          }}
        >
          <div
            style={{
              width: "392px",
              height: "392px",
              borderRadius: "50%",
              overflow: "hidden",
              background: profileImage
                ? `url(${profileImage}) center/cover no-repeat`
                : "#1a1a2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!profileImage && (
              <Upload size={80} color="#666" />
            )}
          </div>
        </div>
      </div>

      {/* Name and Message Card */}
      <div
        style={{
          position: "absolute",
          top: "779px",
          left: "0",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 15,
        }}
      >
        <h2
          style={{
            width: "auto",
            margin: "0 0 30px 0",
            padding: "0",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "72px",
            textAlign: "center",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          {name || "YOUR NAME"}
        </h2>

        <p
          style={{
            width: "748px",
            margin: "0",
            padding: "0",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "180%",
            textAlign: "center",
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            whiteSpace: "pre-line",
          }}
        >
          {message ||
            "Happiest of birthdays to you!\nMay this year bring you as much joy and happiness as you bring to everyone around you.\n❤️✨"}
        </p>
      </div>

      {/* Batch Badge */}
      {batch && (
        <div
          style={{
            position: "absolute",
            top: "1100px",
            left: "0",
            width: "100%",
            height: "156px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "6px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            {batch}
          </p>
          <p
            style={{
              fontSize: "28px",
              color: "#d1d5db",
              margin: "10px 0",
              padding: "0",
              fontWeight: 500,
              letterSpacing: "6px",
            }}
          >
            {faculty}
          </p>
          <p
            style={{
              margin: "0",
              padding: "15px 0",
              fontSize: "32px",
              color: "#ffffff",
              fontWeight: 300,
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
          >
            {university}
          </p>
        </div>
      )}
    </div>
  );
});

BirthdayPostTemplate.displayName = "BirthdayPostTemplate";

// ==================== MAIN COMPONENT ====================
interface FormData {
  name: string;
  batch: string;
  faculty: string;
  university: string;
  profileImage: string | null;
  message: string;
  templateId: string;
}

declare global {
  interface Window {
    html2canvas: (
      element: HTMLElement | null,
      options?: any
    ) => Promise<HTMLCanvasElement>;
  }
}

export default function BirthdayPostGenerator() {
  const [formData, setFormData] = useState<FormData>({
    name: "Tharindu Liyanage",
    batch: "2k23/2k24 Batch",
    faculty: "Faculty Of Technology",
    university: "University of Ruhuna",
    profileImage: null,
    message:
      "Happiest of birthdays to you!\nMay this year bring you as much joy and happiness as you bring to everyone around you.\n❤️✨",
    templateId: "template1",
  });

  const [tempImage, setTempImage] = useState<string | null>(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  const hiddenCanvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(0.3);

  const selectedTemplate = TEMPLATES.find(t => t.id === formData.templateId) || TEMPLATES[0];

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
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
      
      // Wait for fonts and images to load
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!hiddenCanvasRef.current) throw new Error("Canvas not found");

      // Ensure all images are loaded
      const images = hiddenCanvasRef.current.getElementsByTagName('img');
      await Promise.all(
        Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
      
      const canvas = await window.html2canvas(hiddenCanvasRef.current, {
        scale: 2,
        width: 1080,
        height: 1350,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        windowWidth: 1080,
        windowHeight: 1350,
        x: 0,
        y: 0,
      });
      return canvas;
    } catch (error) {
      console.error(error);
      throw error;
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

  const handleCopyToClipboard = async () => {
    try {
      const canvas = await generateImage();
      canvas.toBlob(async (blob: Blob | null) => {
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#eff3fc",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          height: "64px",
          background: "#fbfbfb",
          borderBottom: "1px solid #caced5",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #7b7dee, #06e114ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={18} color="white" />
          </div>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              margin: 0,
              color: "#34343e",
            }}
          >
            Birthday Post Studio
          </h1>
        </div>

        <button
          onClick={() => setActiveTab("preview")}
          style={{
            display: activeTab === "edit" ? "flex" : "none",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "#7b7dee",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
          className="mobile-only"
        >
          PREVIEW →
        </button>
      </nav>

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 64px)",
          marginTop: "64px",
          overflow: "hidden",
        }}
      >
        {/* Editor Panel */}
        <div
          style={{
            width: "400px",
            background: "#fbfbfb",
            borderRight: "1px solid #caced5",
            overflowY: "auto",
            display: activeTab === "preview" ? "none" : "flex",
            flexDirection: "column",
          }}
          className="editor-panel"
        >
          <div style={{ padding: "24px", flex: 1 }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 600,
                marginBottom: "8px",
                color: "#34343e",
              }}
            >
              Details
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "24px",
              }}
            >
              Fill in the birthday post information
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Template Selection */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Template
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {TEMPLATES.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => updateFormData("templateId", template.id)}
                      style={{
                        padding: "0",
                        border: formData.templateId === template.id 
                          ? "3px solid #7b7dee" 
                          : "2px solid #caced5",
                        borderRadius: "12px",
                        background: "white",
                        cursor: "pointer",
                        overflow: "hidden",
                        transition: "all 0.2s",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "80px",
                          background: template.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: template.ringGradient,
                            boxShadow: `0 0 15px ${template.ringGlow}`,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "11px",
                            color: "white",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {template.name}
                        </span>
                      </div>
                      {formData.templateId === template.id && (
                        <div
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: "#7b7dee",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Check size={14} color="white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="e.g. Tharindu Liyanage"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #caced5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    background: "#fff",
                    color: "#34343e",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Batch Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Batch
                </label>
                <input
                  type="text"
                  value={formData.batch}
                  onChange={(e) => updateFormData("batch", e.target.value)}
                  placeholder="e.g. 2k23/2k24 Batch"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #caced5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    background: "#fff",
                    color: "#34343e",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Faculty Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Faculty
                </label>
                <input
                  type="text"
                  value={formData.faculty}
                  onChange={(e) => updateFormData("faculty", e.target.value)}
                  placeholder="e.g. Faculty Of Technology"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #caced5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    background: "#fff",
                    color: "#34343e",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* University Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  University
                </label>
                <input
                  type="text"
                  value={formData.university}
                  onChange={(e) => updateFormData("university", e.target.value)}
                  placeholder="e.g. University of Ruhuna"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #caced5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    background: "#fff",
                    color: "#34343e",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Birthday Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="Enter your birthday message..."
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #caced5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    background: "#fff",
                    color: "#34343e",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#34343e",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Profile Photo
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    width: "100%",
                    padding: "16px",
                    border: "2px dashed #caced5",
                    borderRadius: "8px",
                    background: formData.profileImage ? "#f9fafb" : "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    transition: "all 0.2s",
                  }}
                >
                  {formData.profileImage ? (
                    <>
                      <img
                        src={formData.profileImage}
                        alt="Profile"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{
                          color: "#7b7dee",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        Change Photo
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload size={24} color="#9ca3af" />
                      <span
                        style={{
                          color: "#9ca3af",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Upload Photo
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid #caced5",
              background: "#fbfbfb",
              display: "flex",
              gap: "12px",
            }}
          >
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              style={{
                flex: 1,
                padding: "14px",
                background: "#7b7dee",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: isGenerating ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                opacity: isGenerating ? 0.6 : 1,
              }}
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
              style={{
                padding: "14px 20px",
                background: "#fff",
                color: "#34343e",
                border: "1px solid #caced5",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: isGenerating ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                opacity: isGenerating ? 0.6 : 1,
              }}
            >
              {copied ? (
                <>
                  <Check size={18} color="#10b981" /> Copied
                </>
              ) : (
                <>
                  <Copy size={18} /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview Panel */}
        <div
          ref={previewContainerRef}
          style={{
            flex: 1,
            background: "#e5e7eb",
            display: activeTab === "edit" ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            position: "relative",
            overflow: "auto",
          }}
          className="preview-panel"
        >
          <button
            onClick={() => setActiveTab("edit")}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              padding: "10px 20px",
              background: "#fff",
              border: "1px solid #caced5",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "none",
              color: "#34343e",
            }}
            className="mobile-only"
          >
            ← Back
          </button>

          <div
            style={{
              width: `${1080 * scale}px`,
              height: `${1350 * scale}px`,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "1080px",
                height: "1350px",
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <BirthdayPostTemplate data={{...formData, template: selectedTemplate}} />
            </div>
          </div>

          <button
            onClick={handleDownload}
            disabled={isGenerating}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "14px 32px",
              background: "linear-gradient(135deg, #7b7dee, #a855f7)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: isGenerating ? "not-allowed" : "pointer",
              display: "none",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 10px 30px rgba(123, 125, 238, 0.4)",
              opacity: isGenerating ? 0.6 : 1,
            }}
            className="mobile-only"
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

      {/* Hidden Render Element - Fixed positioning */}
      <div 
        style={{ 
          position: "fixed", 
          left: "-10000px", 
          top: "-10000px",
          width: "1080px",
          height: "1350px",
        }}
      >
        <BirthdayPostTemplate ref={hiddenCanvasRef} data={{...formData, template: selectedTemplate}} />
      </div>

      {/* Cropper Modal */}
      {showCropper && tempImage && (
        <ImageCropModal
          imageUrl={tempImage}
          onSave={handleCropSave}
          onClose={() => {
            setShowCropper(false);
            setTempImage(null);
          }}
        />
      )}

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .editor-panel {
            width: 100% !important;
          }
          .preview-panel {
            width: 100% !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .preview-panel {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}