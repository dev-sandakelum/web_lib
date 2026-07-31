"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

const HIDDEN_ON = ["/apps/bd3", "/apps/bd2", "/apps/birthday-post-generator"]

export default function ScrollGlowRail() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [thumbRatio, setThumbRatio] = useState(1)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (HIDDEN_ON.some((p) => pathname?.startsWith(p))) return

    const update = () => {
      const root = document.documentElement
      const max = root.scrollHeight - root.clientHeight
      const ratio = root.scrollHeight > 0 ? root.clientHeight / root.scrollHeight : 1
      const nextProgress = max > 0 ? root.scrollTop / max : 0

      setThumbRatio(Math.min(1, Math.max(0.12, ratio)))
      setProgress(Math.min(1, Math.max(0, nextProgress)))
      setVisible(max > 8)
      setActive(true)
      root.dataset.scrolling = "true"

      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        setActive(false)
        delete root.dataset.scrolling
      }, 700)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      delete document.documentElement.dataset.scrolling
    }
  }, [pathname])

  if (HIDDEN_ON.some((p) => pathname?.startsWith(p)) || !visible) return null

  const top = progress * (100 - thumbRatio * 100)

  return (
    <div
      className={`scroll-glow-rail ${active ? "is-scrolling" : ""}`}
      aria-hidden
    >
      <div className="scroll-glow-track">
        <div
          className="scroll-glow-thumb"
          style={{
            height: `${thumbRatio * 100}%`,
            top: `${top}%`,
          }}
        >
          <span className="scroll-glow-sheen" />
        </div>
      </div>
    </div>
  )
}
