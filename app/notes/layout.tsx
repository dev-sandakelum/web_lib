export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Deep Space Background - Persistent across routes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] opacity-50" />
      </div>
      
      {/* Content Area */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
