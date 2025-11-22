"use client";

import ICT1161Notes from "@/components/notes/new/1";
import NetworkingFullNotes from "@/components/notes/new/n";
import { StickyNote } from "lucide-react";
import { useState } from "react";
interface sub {
  subject: string;
}
export function Q_gen_note({ subject }: sub) {
  const [window, setWindow] = useState(false);
  return (
    <>
      <button
          onClick={() => setWindow(!window)}
          className={`
            absolute right-4 top-4 z-[111]
            px-4 py-2
            border rounded-lg text-sm font-medium
            cursor-pointer
            transition-all duration-300 ease-out
            active:scale-95
            ${window ? "bg-gray-200 border-gray-400" : "bg-white border-gray-300"}
            ${window ? "hover:bg-gray-300" : "hover:bg-gray-100"}
          `}
        >
          <span className="hidden sm:inline">
            {window ? "Close Note" : "Access Note"}
          </span>
          <span className="sm:hidden text-base">
            {window ? "✕" : "📝"}
          </span>
        </button>

      {window && (
        <>
          <div className=" absolute w-full h-full left-0 top-0 z-99 p-2 bg-blue-50  backdrop-blur-2xl"></div>
          <div className=" absolute w-full h-full left-0 top-0 z-99 flex justify-center items-center">
            <div className="border scale-95 h-[500px] overflow-scroll">
              {/* {subject} */}
              {subject == "Information Systems" ? <ICT1161Notes /> : ""}
              {subject == "Networking" ? <NetworkingFullNotes /> : ""}
            </div>
          </div>
        </>
      )}
    </>
  );
}
