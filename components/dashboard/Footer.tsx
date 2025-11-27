import { Github, Twitter, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-auto pt-12 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Personal Knowledge Base</h3>
            <p className="text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
              A curated collection of notes, resources, and tools for continuous learning.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="/notes" className="hover:text-purple-400 transition-colors">Notes</a>
            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hasitha Sandakelum. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
