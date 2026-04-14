"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GitBranch, Link as LinkIcon, Mail, Phone } from "lucide-react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Connect scroll to the window (since the canvas is sticky inside a 500vh container,
  // we scroll the window to progress)
  const { scrollYProgress } = useScroll();

  // Section 1: "My Name. Creative Developer." (Center) fade in early, out quickly
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: "I build digital experiences." (Left aligned) approx 30% mark
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.5], [-50, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: "Bridging design and engineering." (Right aligned) approx 60% mark
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.55, 0.85], [50, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="sticky top-0 h-screen w-full flex items-center justify-center p-8"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            KAMAL NATH MALLICK
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-light text-gray-300 drop-shadow">
            Full-Stack & IoT Developer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, x: x2, y: y2 }}
        className="sticky top-0 h-screen w-full flex items-center justify-start p-12 md:p-24"
      >
        <div className="max-w-2xl text-white drop-shadow-xl bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building scalable <span className="text-gray-400">real-world solutions</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Motivated and detail-oriented fresher with a strong interest in full-stack development and IoT-based applications. Possess hands-on knowledge of Java and Python, with a solid understanding of data structures, problem-solving, and core programming concepts.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, x: x3, y: y3 }}
        className="sticky top-0 h-screen w-full flex items-center justify-end p-12 md:p-24 pointer-events-none"
      >
        <div className="max-w-xl text-white text-right drop-shadow-xl bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            Bridging software <br/> with the <span className="text-gray-400">physical world</span>.
          </h2>
          
          <div className="flex flex-col items-end gap-4 text-gray-300 font-light pointer-events-auto">
            <a href="mailto:kamalnathmallick@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
              kamalnathmallick@gmail.com <Mail size={20} />
            </a>
            <a href="tel:09164269798" className="flex items-center gap-3 hover:text-white transition-colors">
              09164269798 <Phone size={20} />
            </a>
            <a href="https://github.com/kamal577223" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              github.com/kamal577223 <GitBranch size={20} />
            </a>
            <a href="https://l1nk.dev/7EnKn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              l1nk.dev/7EnKn <LinkIcon size={20} />
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
