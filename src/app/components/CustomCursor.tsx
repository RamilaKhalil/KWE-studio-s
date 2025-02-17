"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ✅ Detect mobile devices
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current || isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.left = `${x - 20}px`;
      cursorRef.current.style.top = `${y - 20}px`;
    };

    const hoverEffect = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const target = e.target as HTMLElement;
      const image = target.getAttribute("data-image");

      if (image) {
        cursorRef.current.style.width = "470px";
        cursorRef.current.style.height = "370px";
        cursorRef.current.style.borderRadius = "0";
        cursorRef.current.style.backgroundImage = `url(${image})`;
      }
    };

    const resetCursor = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.width = "20px";
      cursorRef.current.style.height = "20px";
      cursorRef.current.style.borderRadius = "50%";
      cursorRef.current.style.backgroundImage = "none";
    };

    document.addEventListener("mousemove", moveCursor);

    const boxes = document.querySelectorAll(".box");
    if (boxes.length > 0) {
      boxes.forEach((box) => {
        box.addEventListener("mouseleave", resetCursor);
      });
    }

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", hoverEffect);
        box.removeEventListener("mouseleave", resetCursor);
      });
    };
  }, [isMobile]);

  // ✅ Hide cursor on mobile
  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="cursor fixed w-5 h-5 bg-slate-600 rounded-full pointer-events-none mix-blend-difference z-[999]"
    />
  );
};

export default CustomCursor;
