"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  frameCount: number;
  onLoaded?: () => void;
  onProgress?: (progress: number) => void;
}

export default function ScrollyCanvas({ frameCount, onLoaded, onProgress }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // Files are named frame_00_delay-0.066s.png to frame_74_delay-0.066s.png
      const frameNum = i.toString().padStart(2, '0');
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (onProgress) {
          onProgress(Math.round((loadedCount / frameCount) * 100));
        }
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          if (onLoaded) onLoaded();
        }
      };
      loadedImages.push(img);
    }
    
    // Set initially empty or sparse
    setImages(loadedImages);
  }, [frameCount]);

  // Handle resizing and initial draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.floor(scrollYProgress.get() * (frameCount - 1)));
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images, frameCount, scrollYProgress]);

  // Function to render a specific frame using object-fit: cover logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !images[index]) return;

    const img = images[index];
    if (!img.complete || img.naturalWidth === 0) return;

    // object-fit: cover math
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * (frameCount - 1));
    renderFrame(index);
  });

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}
