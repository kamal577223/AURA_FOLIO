"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ progress = 0 }: { progress?: number }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] pointer-events-none"
    >
      <div className="w-64 max-w-[80vw] flex flex-col items-center gap-6">
        {/* Progress Text */}
        <h2 className="text-white text-sm font-medium tracking-[0.3em] uppercase opacity-80 flex flex-col items-center gap-2">
          <span>Loading Assets</span>
          <span className="font-mono text-gray-400">{progress}%</span>
        </h2>

        {/* Progress Bar Container - The "Small Rectangle" */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
