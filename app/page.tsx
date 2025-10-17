import { Suspense } from "react";
import PersonalHero from "@/components/hiro";

export default function Home() {
  return (
    <>
      {/* <PacketTracerGuide /> */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <PersonalHero />
      </Suspense>
    </>
  );
}
