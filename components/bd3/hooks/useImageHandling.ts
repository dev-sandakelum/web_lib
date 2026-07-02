import { useState, useRef, useCallback } from "react";
import { loadImageFile } from "@/lib/utils";
import type { ImageTransform3 } from "../types";

export function useImageHandling() {
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [savedTransform, setSavedTransform] = useState<ImageTransform3 | undefined>();
  const [showCrop, setShowCrop] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    []
  );

  const handleReEdit = useCallback(() => {
    if (originalImage) {
      setTempImage(originalImage);
      setShowCrop(true);
    }
  }, [originalImage]);

  const triggerFileInput = useCallback(() => {
    fileRef.current?.click();
  }, []);

  return {
    tempImage,
    setTempImage,
    originalImage,
    setOriginalImage,
    savedTransform,
    setSavedTransform,
    showCrop,
    setShowCrop,
    fileRef,
    handleFileChange,
    handleReEdit,
    triggerFileInput,
  };
}
