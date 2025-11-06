"use client";

import { useRouter } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

export default function FloatingHomeButton() {
  const router = useRouter();

  // Go to the "clean" home URL (removes query params) and force a full navigation
  const goHome = () => {
    // If currently at root path (even with query string), navigate to plain "/"
    // Using location.href forces a full navigation and removes any querystring.
    if (window.location.pathname === "/") {
      // If already at "/", go to "/" explicitly to clear queries and reload
      window.location.href = "/";
    } else {
      // otherwise use router to navigate to home
      router.push("/");
    }
  };

  // Go back in history; fallback to router.back() then history.back()
  const goBack = () => {
    // prefer next/router back so it plays nicer with app router
    try {
      router.back();
      // router.back() may do nothing if no history; fallback to window.history
      setTimeout(() => {
        if (window.history.length <= 1) {
          // nothing to go back to — navigate to home as safe fallback
          window.location.href = "/";
        }
      }, 100);
    } catch {
      // fallback
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <>
      {/* Container to keep both buttons together */}
      <div className="fixed bottom-6 right-2 flex flex-col gap-3 z-150">
        <button
          onClick={goHome}
          className="flex items-center justify-center w-10 h-10 rounded-md shadow-lg bg-blue-600 text-white opacity-20 hover:opacity-80 hover:bg-blue-700 transition duration-200"
          aria-label="Go to Home"
          title="Home (clears query and reloads)"
        >
          <Home className="w-5 h-5" />
        </button>

        <button
          onClick={goBack}
          className="flex items-center justify-center w-10 h-10 rounded-md shadow-lg bg-gray-800 opacity-20 hover:opacity-80 text-white hover:bg-gray-900 transition duration-200"
          aria-label="Go Back"
          title="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
