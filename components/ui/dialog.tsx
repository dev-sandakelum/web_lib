"use client"

import React from "react"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface DialogContentProps {
  className?: string
  children: React.ReactNode
}

// Minimal, accessible dialog wrapper used by the project. Keeps implementation simple
// so other components can import { Dialog, DialogContent } from '@/components/ui/dialog'
export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden
        onClick={() => onOpenChange(false)}
      />

      <div className="relative z-10 w-full max-w-4xl mx-4">{children}</div>
    </div>
  )
}

export function DialogContent({ className = "", children }: DialogContentProps) {
  return (
    <div className={`mx-auto ${className}`} role="dialog" aria-modal="true">
      {children}
    </div>
  )
}
