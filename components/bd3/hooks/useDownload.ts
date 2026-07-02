import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";

export function useDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);
  const downloadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const captureImage = useCallback(
    async (hiddenRef: React.RefObject<HTMLDivElement | null>): Promise<HTMLCanvasElement> => {
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
        img.crossOrigin = "anonymous";
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
    },
    []
  );

  const handleDownload = useCallback(
    async (hiddenRef: React.RefObject<HTMLDivElement | null>, fileName: string) => {
      setIsDownloading(true);
      downloadTimerRef.current = setTimeout(() => setShowDownloadOverlay(true), 1000);
      try {
        const canvas = await captureImage(hiddenRef);
        const a = document.createElement("a");
        a.download = fileName;
        a.href = canvas.toDataURL("image/png", 1.0);
        a.click();
      } catch {
        alert("Error generating image.");
      } finally {
        if (downloadTimerRef.current) clearTimeout(downloadTimerRef.current);
        setShowDownloadOverlay(false);
        setIsDownloading(false);
      }
    },
    [captureImage]
  );

  return {
    isDownloading,
    showDownloadOverlay,
    handleDownload,
  };
}
