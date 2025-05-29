"use client"

// React Imports
import { useState, useEffect, useRef } from "react";

// Component Imports  
import { NavBar } from "@/components/NavBar"

const COLS = 8;
const ROWS = 16;
const BOX_SIZE = 48;

function getRandomColor() {
  // Pastel random color
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
}

export default function Home() {
  // Track random color for each box
  const [hoverColors, setHoverColors] = useState<string[]>([]);
  const [clickedColors, setClickedColors] = useState<string[]>([]);
  const rowCount = ROWS;

  const boxCount = rowCount * COLS;
  useEffect(() => {
    setHoverColors((prev) => Array(boxCount).fill("").map((_, i) => prev[i] || ""));
    setClickedColors((prev) => Array(boxCount).fill("").map((_, i) => prev[i] || ""));
  }, [boxCount]);

  const handleMouseEnter = (i: number) => {
    setHoverColors((prev) => {
      const next = [...prev];
      next[i] = getRandomColor();
      return next;
    });
  };
  const handleMouseLeave = (i: number) => {
    setHoverColors((prev) => {
      const next = [...prev];
      next[i] = "";
      return next;
    });
  };

  const handleBoxClick = (i: number) => {
    setClickedColors((prev) => {
      const next = [...prev];
      if (next[i]) {
        next[i] = "";
      } else {
        next[i] = getRandomColor();
      }
      return next;
    });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex items-start">
          <div className="w-full grid grid-cols-8 border border-dashed border-gray-300">
            {Array.from({ length: boxCount }).map((_, i) => {
              const isLastColumn = (i + 1) % COLS === 0;
              const isLastRow = i >= boxCount - COLS;
              return (
                <div
                  key={i}
                  className={[
                    `aspect-square border-dashed border-gray-300 transition-colors duration-300 cursor-pointer`,
                    !isLastColumn && "border-r",
                    !isLastRow && "border-b"
                  ].filter(Boolean).join(" ")}
                  style={{
                    backgroundColor: hoverColors[i] || clickedColors[i] || undefined,
                    minWidth: BOX_SIZE,
                    minHeight: BOX_SIZE,
                  }}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                  onClick={() => handleBoxClick(i)}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
