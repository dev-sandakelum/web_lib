"use client"

import { usePathname } from "next/navigation"
import AppShell from "@/components/dashboard/AppShell"

const FULLSCREEN_PREFIXES = ["/apps/bd2", "/apps/bd3", "/apps/birthday-post-generator"]

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const fullscreen = FULLSCREEN_PREFIXES.some((p) => pathname?.startsWith(p))

  if (fullscreen) return <>{children}</>

  return <AppShell>{children}</AppShell>
}
