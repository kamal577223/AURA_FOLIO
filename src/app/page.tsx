"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <main className="bg-[#121212] min-h-screen">
      <AnimatePresence>
        {isLoading && <Loader progress={progress} />}
      </AnimatePresence>
      <div className="relative">
        <Overlay />
        <ScrollyCanvas 
          frameCount={75} 
          onLoaded={() => setIsLoading(false)} 
          onProgress={(p) => setProgress(p)}
        />
      </div>
      <Projects />
    </main>
  );
}
