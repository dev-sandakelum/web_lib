"use client"

import type React from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface ImagePreviewModalProps {
  isOpen: boolean
  imageUrl: string | null
  onClose: () => void
}

export function ImagePreviewModal({ isOpen, imageUrl, onClose }: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1)
  const [touchDistance, setTouchDistance] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5))
  const handleReset = () => setZoom(1)

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setTouchDistance(getTouchDistance(e.touches))
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const newDistance = getTouchDistance(e.touches)
      if (touchDistance > 0) {
        const scale = newDistance / touchDistance
        setZoom((prev) => Math.min(Math.max(prev * scale, 0.5), 3))
      }
      setTouchDistance(newDistance)
    }
  }

  const handleTouchEnd = () => {
    setTouchDistance(0)
  }

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false)
      setZoom(1)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-screen max-h-screen p-0 bg-black border-0 rounded-none sm:rounded-lg overflow-hidden flex flex-col">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/90 to-transparent p-2 sm:p-3 transition-opacity duration-300">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-white font-semibold text-sm sm:text-base px-2">Image Preview</h3>

              <div className="flex items-center gap-1 sm:gap-2">
                {/* Zoom controls */}
                <div className="flex items-center gap-0.5 sm:gap-1 bg-black/40 rounded-lg p-1 backdrop-blur-sm">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.5}
                    className="p-1.5 sm:p-2 hover:bg-white/20 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:bg-white/30"
                    title="Zoom out"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </button>
                  <span className="text-white text-xs font-medium min-w-[32px] sm:min-w-[40px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="p-1.5 sm:p-2 hover:bg-white/20 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:bg-white/30"
                    title="Zoom in"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </button>
                </div>

                {/* Reset and close buttons */}
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <button
                    onClick={handleReset}
                    className="p-1.5 sm:p-2 text-white hover:bg-white/20 rounded transition-all duration-200 active:bg-white/30"
                    title="Reset zoom"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-1.5 sm:p-2 hover:bg-white/20 rounded transition-all duration-200 active:bg-white/30"
                    title="Close"
                    aria-label="Close preview"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div
            className="flex-1 overflow-auto flex items-center justify-center bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
              </div>
            )}
            {imageUrl && (
              <img
                ref={imageRef}
                src={imageUrl || "/placeholder.svg"}
                alt="Full preview"
                onLoad={() => setImageLoaded(true)}
                style={{
                  transform: `scale(${zoom})`,
                  transition: touchDistance === 0 ? "transform 0.2s ease-out" : "none",
                  opacity: imageLoaded ? 1 : 0,
                }}
                className="max-w-full h-auto cursor-grab active:cursor-grabbing select-none transition-opacity duration-300"
                draggable={false}
              />
            )}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 sm:p-3 text-white text-xs text-center transition-opacity duration-300">
            <p className="opacity-70">Pinch to zoom • Use controls to adjust</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
