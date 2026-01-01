"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, RotateCcw, Check, ZoomOut, ZoomIn, RotateCw, FlipHorizontal } from "lucide-react"
import type { ImageTransform } from "@/components/birthday-post"

interface ImageCropModalProps {
  imageUrl: string
  onSave: (imageData: string) => void
  onClose: () => void
}

export const ImageCropModal: React.FC<ImageCropModalProps> = ({ imageUrl, onSave, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const [transform, setTransform] = useState<ImageTransform>({
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    flip: false,
  })

  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      imgRef.current = img
      renderCanvas()
    }
    img.src = imageUrl
  }, [imageUrl])

  useEffect(() => {
    renderCanvas()
  }, [transform])

  const renderCanvas = () => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const cW = 500
    const cH = 500
    const centerX = cW / 2
    const centerY = cH / 2

    ctx.clearRect(0, 0, cW, cH)
    ctx.fillStyle = "#18181b"
    ctx.fillRect(0, 0, cW, cH)

    const { x, y, scale, rotation, flip } = transform

    ctx.save()
    ctx.translate(centerX + x, centerY + y)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.scale(flip ? -1 : 1, 1)
    ctx.scale(scale, scale)
    ctx.drawImage(img, -img.width / 2, -img.height / 2)
    ctx.restore()

    ctx.globalCompositeOperation = "destination-in"
    ctx.beginPath()
    ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalCompositeOperation = "source-over"

    ctx.strokeStyle = "#a855f7"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)
    ctx.stroke()
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y })
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging) return
    e.preventDefault()
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    }))
  }

  const updateTransform = (key: keyof ImageTransform, value: any) => {
    setTransform((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx || !imgRef.current) return

    canvas.width = 600
    canvas.height = 600
    const centerSave = 300

    const { x, y, scale, rotation, flip } = transform
    const ratio = 1.2

    ctx.save()
    ctx.beginPath()
    ctx.arc(centerSave, centerSave, 300, 0, Math.PI * 2)
    ctx.clip()

    ctx.translate(centerSave + x * ratio, centerSave + y * ratio)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.scale(flip ? -1 : 1, 1)
    ctx.scale(scale * ratio, scale * ratio)

    ctx.drawImage(imgRef.current, -imgRef.current.width / 2, -imgRef.current.height / 2)
    ctx.restore()

    onSave(canvas.toDataURL("image/png"))
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-4">
      <div className="bg-[#fbfbfb] rounded-2xl p-6 max-w-[540px] w-full shadow-2xl flex flex-col">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold text-[#34343e] m-0">Adjust Photo</h3>
          <button
            onClick={onClose}
            className="bg-none border-none cursor-pointer p-2 flex items-center text-[#34343e] rounded-full hover:bg-black/5"
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-[#e4e4e7] rounded-xl overflow-hidden mb-5 flex justify-center">
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
            className="max-w-full h-auto touch-none"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          />
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-3 px-2">
            <ZoomOut size={18} className="text-[#666]" />
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={transform.scale}
              onChange={(e) => updateTransform("scale", Number.parseFloat(e.target.value))}
              className="flex-1 h-1 rounded cursor-pointer accent-[#7b7dee]"
            />
            <ZoomIn size={18} className="text-[#666]" />
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => updateTransform("rotation", transform.rotation + 90)}
              title="Rotate 90°"
              className="p-2.5 rounded-lg border border-[#e2e8f0] bg-white cursor-pointer text-[#34343e] flex items-center justify-center hover:bg-[#f9fafb]"
            >
              <RotateCw size={20} />
            </button>
            <button
              onClick={() => updateTransform("flip", !transform.flip)}
              title="Flip Horizontal"
              className={`p-2.5 rounded-lg border border-[#e2e8f0] cursor-pointer flex items-center justify-center hover:bg-[#f9fafb] ${
                transform.flip ? "bg-[#eef2ff] text-[#7b7dee]" : "bg-white text-[#34343e]"
              }`}
            >
              <FlipHorizontal size={20} />
            </button>
          </div>
        </div>

        <div className="flex gap-3 justify-between border-t border-[#eee] pt-5">
          <button
            onClick={() => setTransform({ x: 0, y: 0, scale: 1, rotation: 0, flip: false })}
            className="px-4 py-2.5 border border-[#caced5] rounded-lg bg-white cursor-pointer flex items-center gap-2 text-[#34343e] font-medium hover:bg-[#f9fafb]"
          >
            <RotateCcw size={16} /> Reset
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 border-none rounded-lg bg-[#7b7dee] text-white cursor-pointer font-semibold text-sm flex items-center gap-2 hover:bg-[#6a6cd9]"
          >
            <Check size={16} /> Save
          </button>
        </div>
      </div>
    </div>
  )
}
