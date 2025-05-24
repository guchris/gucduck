"use client"
import React from "react";

export function BackgroundAnimation() {
  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none animate-gradient-bg bg-gradient-to-br from-white via-neutral-100 to-neutral-200"
      aria-hidden
    >
      <style jsx global>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 16s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 