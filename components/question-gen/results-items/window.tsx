"use client";

import ICT1161Notes from "@/components/notes/new/1";
import { useState } from "react";
interface sub {
  subject: string;
}
export function Q_gen_note({subject}:sub) {
  const [window, setWindow] = useState(false);
  return (
    <>
      <button className=" absolute right-0 top-0 w-16 h-16 border z-111" onClick={() => setWindow(!window)}>note</button>
      {window && (
        <>
        <div className=" absolute w-full h-full left-0 top-0 z-99 p-2 bg-blue-50  backdrop-blur-2xl">
          
        </div>
        <div className=" absolute w-full h-full left-0 top-0 z-99 flex justify-center items-center">
            <div className="border scale-95 h-[500px] overflow-scroll">
                {/* {subject} */}
                {subject == "Information Systems" ? <ICT1161Notes/> : ""}
            </div>
          
        </div>
        </>
      )}
    </>
  );
}
