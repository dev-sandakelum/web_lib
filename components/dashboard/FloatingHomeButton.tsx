"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  ArrowLeft,
  Calculator,
  Settings,
  StickyNote,
  Wrench,
  ShieldQuestion,
  LucideFileQuestion,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingToolButtons() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    if (window.location.pathname === "/") {
      window.location.href = "/";
    } else {
      router.push("/");
    }
  };

  const goBack = () => {
    try {
      router.back();
      setTimeout(() => {
        if (window.history.length <= 1) window.location.href = "/";
      }, 100);
    } catch {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "/";
    }
  };

  return (
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-3 z-[150]">
      {/* Popup Tools Menu with Glass Effect */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-3 p-3 rounded-xl bg-white/15 backdrop-blur-md shadow-lg border border-white/20"
          >
            <button
              onClick={goHome}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
              title="Home"
            >
              <Home className="w-5 h-5" />
            </button>

            <button
              onClick={goBack}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition duration-200"
              title="Go Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                router.push("/notes/maths/solver");
                setMenuOpen(false);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition duration-200"
              title="Calculator"
            >
              <Calculator className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                router.push("/?topic=notes");
                setMenuOpen(false);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-green-600 text-white hover:bg-green-700 transition duration-200"
              title="Notes"
            >
              <StickyNote className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                router.push("/question-gen");
                setMenuOpen(false);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition duration-200"
              title="Question Generator"
            >
              <LucideFileQuestion className="w-5 h-5" />
            </button>
            {/* <button
              onClick={() => alert("Settings opened!")}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition duration-200"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-yellow-500 text-white hover:bg-yellow-600 transition duration-200"
        title="Tools"
      >
        <motion.div
          animate={{ rotate: menuOpen ? 314 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Wrench className="w-6 h-6" />
        </motion.div>
      </button>
    </div>
  );
}
