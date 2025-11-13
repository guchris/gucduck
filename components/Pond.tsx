"use client"

import React, { useState, useEffect, useMemo } from "react"
import { Duck } from "@/lib/types"

interface PondProps {
  ducks: Duck[]
  newDuckIds?: Set<string>
}

interface DuckDisplay {
  duck: Duck
  x: number
  y: number
  size: number
}

export function Pond({ ducks, newDuckIds = new Set() }: PondProps) {
  const [displayDucks, setDisplayDucks] = useState<Duck[]>([])
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })
  const [hoveredDuckId, setHoveredDuckId] = useState<string | null>(null)

  useEffect(() => {
    // Separate new ducks from existing ducks
    const newDucks = ducks.filter(duck => newDuckIds.has(duck.id))
    const existingDucks = ducks.filter(duck => !newDuckIds.has(duck.id))
    
    // Select 11 random ducks from existing ducks
    const shuffled = [...existingDucks].sort(() => Math.random() - 0.5)
    const randomDucks = shuffled.slice(0, Math.min(11, existingDucks.length))
    
    // Combine: 11 random + all new ducks
    setDisplayDucks([...randomDucks, ...newDucks])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ducks, Array.from(newDuckIds).join(',')])

  // Update viewport size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const [duckPositions, setDuckPositions] = useState<Map<string, { x: number; y: number; size: number }>>(new Map())

  // Calculate random positions for each duck
  const duckDisplays = useMemo<DuckDisplay[]>(() => {
    if (viewportSize.width === 0 || viewportSize.height === 0) return []

    return displayDucks.map((duck) => {
      // If duck already has a position, use it; otherwise generate random
      if (duckPositions.has(duck.id)) {
        const pos = duckPositions.get(duck.id)!
        return {
          duck,
          x: pos.x,
          y: pos.y,
          size: pos.size,
        }
      }
      
      // Generate random position for new duck
      const newPos = {
        x: (Math.random() * 80 + 10) / 100 * viewportSize.width,
        y: (Math.random() * 80 + 10) / 100 * viewportSize.height,
        size: 60 + Math.random() * 60, // Random size between 60-120px
      }
      
      // Store position
      setDuckPositions(prev => new Map(prev).set(duck.id, newPos))
      
      return {
        duck,
        ...newPos,
      }
    })
  }, [displayDucks, viewportSize, duckPositions])


  if (displayDucks.length === 0) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
        <p className="text-xs">Loading...</p>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-black overflow-hidden">
      {duckDisplays.map((duckDisplay, index) => {
        // Use duck ID to create a consistent animation delay for each duck
        const seed = duckDisplay.duck.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
        const animationDelay = (seed % 100) / 100 * 4 // 0-4 seconds delay
        const animationDuration = 3 + (seed % 50) / 50 * 2 // 3-5 seconds duration
        
        return (
          <div
            key={duckDisplay.duck.id}
            className="absolute duck-wade"
            style={{
              left: `${duckDisplay.x}px`,
              top: `${duckDisplay.y}px`,
              width: `${duckDisplay.size}px`,
              height: `${duckDisplay.size}px`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
            onMouseEnter={() => {
              setHoveredDuckId(duckDisplay.duck.id)
            }}
            onMouseLeave={() => {
              setHoveredDuckId(null)
            }}
          >
            <div
              className="w-full h-full transition-transform duration-200"
              style={{
                transform: hoveredDuckId === duckDisplay.duck.id ? 'scale(1.2)' : 'scale(1)',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={duckDisplay.duck.imageData}
                alt="Duck"
                draggable={false}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

