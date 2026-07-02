"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { toPng } from "html-to-image";
import { TEMPLATES3 } from "../templates";
import { loadImageFile } from "@/lib/utils";
import type { FormData3, ImageTransform3, NameStyle } from "../types";

const MAX_ATTEMPTS_DISPLAY = 20;

const DEFAULT_NAME_STYLE: NameStyle = {
  borderRadius: 10,
  fontSize: 48,
  paddingY: 8,
};

export const DEFAULT_FORM: FormData3 = {
  name: "",
  batch: "9th Batch",
  faculty: "Faculty of Technology",
  university: "University of Ruhuna",
  profileImage: null,
  message:
    "Happy birthday, I hope your day is filled with joy and laughter, and that all your dreams come true 💛. Wishing you a year ahead that's successful and happy, with amazing memories to cherish 🎂. Have a fantastic day and an incredible journey ahead ✨ ✨",
  templateId: "t1",
  access: false,
  nameStyle: DEFAULT_NAME_STYLE,
};

export function useGenerator() {
  /* ── Form ── */
  const [form, setForm] = useState<FormData3>(DEFAULT_FORM);
  const [accessInput, setAccessInput] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  /* ── Image / crop ── */
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [savedTransform, setSavedTransform] = useState<ImageTransform3 | undefined>();
  const [showCrop, setShowCrop] = useState(false);

  /* ── Download ── */
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);
  const downloadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── AI Message ── */
  const [isMsgGen, setIsMsgGen] = useState(false);
  const [generatedMsg, setGeneratedMsg] = useState("");
  const [msgCopied, setMsgCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshAttempt, setRefreshAttempt] = useState(0);
  const [refreshMaxAttempts, setRefreshMaxAttempts] = useState(MAX_ATTEMPTS_DISPLAY);
  const [refreshMatched, setRefreshMatched] = useState<boolean | null>(null);

  /* ── Preview scale ── */
  const [scale, setScale] = useState(0.3);

  /* ── UI ── */
  const [showCreator, setShowCreator] = useState(false);

  /* ── Refs ── */
  const hiddenRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  /* ── Derived ── */
  const selectedTemplate =
    TEMPLATES3.find((t) => t.id === form.templateId) || TEMPLATES3[0];
  const PASS_KEY = process.env.NEXT_PUBLIC_PASS_key_bd3;

  /* ── Preview scale observer ── */
  useEffect(() => {
    const update = () => {
      if (!previewRef.current) return;
      const cw = previewRef.current.clientWidth - 64;
      const ch = previewRef.current.clientHeight - 64;
      setScale(Math.min(cw / 1080, ch / 1350, 0.72));
    };
    const ro = new ResizeObserver(update);
    if (previewRef.current) ro.observe(previewRef.current);
    window.addEventListener("resize", update);
    update();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  /* ── Field setter ── */
  const set = useCallback(
    (field: keyof FormData3, value: string | null | boolean) =>
      setForm((p) => ({ ...p, [field]: value })),
    []
  );

  /* ── Photo ── */
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await loadImageFile(file);
      if (typeof url === "string") {
        setOriginalImage(url);
        setSavedTransform(undefined);
        setTempImage(url);
        setShowCrop(true);
      }
    } catch {
      alert("Error loading image.");
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const handleReEdit = () => {
    if (originalImage) {
      setTempImage(originalImage);
      setShowCrop(true);
    }
  };

  /* ── Download ── */
  const captureImage = async (): Promise<HTMLCanvasElement> => {
    if (!hiddenRef.current) throw new Error("Render ref not found");
    await toPng(hiddenRef.current, { width: 1080, height: 1350, pixelRatio: 2 });
    const dataUrl = await toPng(hiddenRef.current, {
      width: 1080,
      height: 1350,
      pixelRatio: 2,
      cacheBust: true,
    });
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        c.getContext("2d")!.drawImage(img, 0, 0);
        resolve(c);
      };
      img.onerror = reject;
      img.src = dataUrl;
    });
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    downloadTimerRef.current = setTimeout(() => setShowDownloadOverlay(true), 1000);
    try {
      const canvas = await captureImage();
      const a = document.createElement("a");
      a.download = `birthday-${form.name.replace(/\s+/g, "-") || "post"}.png`;
      a.href = canvas.toDataURL("image/png", 1.0);
      a.click();
    } catch {
      alert("Error generating image.");
    } finally {
      if (downloadTimerRef.current) clearTimeout(downloadTimerRef.current);
      setShowDownloadOverlay(false);
      setIsDownloading(false);
    }
  };

  /* ── AI generate (long caption) ── */
  const handleGenerateMsg = async () => {
    setIsMsgGen(true);
    setGeneratedMsg("");
    try {
      const res = await fetch("/api/bd3/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          name: form.name,
          batch: form.batch,
          faculty: form.faculty,
          university: form.university,
        }),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setGeneratedMsg(data.result?.content ?? "");
    } catch (err: any) {
      console.error("[generate]", err);
      setGeneratedMsg("⚠️ Failed to generate — please try again.");
    } finally {
      setIsMsgGen(false);
    }
  };

  /* ── AI refresh (short SSE) ── */
  const handleRefreshMsg = async () => {
    setIsRefreshing(true);
    setRefreshAttempt(0);
    setRefreshMatched(null);
    try {
      const res = await fetch("/api/bd3/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({ enforceCharRange: true }),
      });
      if (!res.ok || !res.body) throw new Error(`Server error ${res.status}`);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";
        for (const part of parts) {
          const eventMatch = part.match(/^event:\s*(\w+)/m);
          const dataMatch = part.match(/^data:\s*(.+)/m);
          if (!eventMatch || !dataMatch) continue;
          const eventName = eventMatch[1];
          let payload: any;
          try {
            payload = JSON.parse(dataMatch[1]);
          } catch {
            continue;
          }
          if (eventName === "attempt") {
            setRefreshAttempt(payload.attempt);
            setRefreshMaxAttempts(payload.maxAttempts);
          } else if (eventName === "done") {
            setRefreshAttempt(payload.attempts ?? 1);
            setRefreshMaxAttempts(payload.maxAttempts ?? MAX_ATTEMPTS_DISPLAY);
            setRefreshMatched(payload.matched ?? true);
            if (payload.result?.content) set("message", payload.result.content);
          }
        }
      }
    } catch (err: any) {
      console.error("[refresh]", err);
      setRefreshMatched(false);
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
        setRefreshAttempt(0);
        setRefreshMatched(null);
      }, 2000);
    }
  };

  /* ── Copy caption ── */
  const handleCopyMsg = async () => {
    if (!generatedMsg) return;
    try {
      await navigator.clipboard.writeText(generatedMsg);
      setMsgCopied(true);
      setTimeout(() => setMsgCopied(false), 2500);
    } catch {
      alert("Could not copy message.");
    }
  };

  /* ── Access key ── */
  const handleAccessChange = (v: string) => {
    setAccessInput(v);
    set("access", v === PASS_KEY);
  };

  return {
    /* state */
    form, setForm,
    accessInput,
    theme, setTheme,
    tempImage, setTempImage,
    originalImage,
    savedTransform, setSavedTransform,
    showCrop, setShowCrop,
    isDownloading,
    showDownloadOverlay,
    isMsgGen,
    generatedMsg,
    msgCopied,
    isRefreshing,
    refreshAttempt,
    refreshMaxAttempts,
    refreshMatched,
    scale,
    showCreator, setShowCreator,
    /* derived */
    selectedTemplate,
    /* refs */
    hiddenRef, fileRef, previewRef,
    /* handlers */
    set,
    handleFileChange,
    handleReEdit,
    handleDownload,
    handleGenerateMsg,
    handleRefreshMsg,
    handleCopyMsg,
    handleAccessChange,
  };
}
