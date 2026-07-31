import AppShell from "@/components/dashboard/AppShell"

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppShell>{children}</AppShell>
}
