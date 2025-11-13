"use client"

import React, { useRef, useState, useEffect } from "react"
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DuckCanvasProps {
  onSave: (imageData: string) => void
  onClose: () => void
  isOpen: boolean
}

export function DuckCanvas({ onSave, onClose, isOpen }: DuckCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#EAB308") // Default yellow (matching nav bar yellow)
  const BRUSH_SIZE = 6 // Fixed brush size
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = 400
      canvas.height = 400
      // Make canvas background transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    updateCanvasSize()

    // Update size when panel opens and reset to yellow (only on first open)
    if (isOpen && !hasInitializedRef.current) {
      // Small delay to ensure container is rendered
      setTimeout(() => {
        updateCanvasSize()
        // Reset to yellow when dialog first opens
        setColor("#EAB308")
        hasInitializedRef.current = true
      }, 100)
    } else if (!isOpen) {
      // Reset initialization flag when dialog closes
      hasInitializedRef.current = false
    }

    // Set default drawing styles for smooth, circular drawing
    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineWidth = BRUSH_SIZE
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.globalCompositeOperation = "source-over"
  }, [isOpen])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineWidth = BRUSH_SIZE
  }, [color])

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY

    // Calculate the scale factor between display size and internal size
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    // Get mouse position relative to canvas
    const x = (clientX - rect.left) * scaleX
    const y = (clientY - rect.top) * scaleY

    return { x, y }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ensure current color is set
    ctx.strokeStyle = color
    ctx.lineWidth = BRUSH_SIZE
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    const { x, y } = getCoordinates(e)
    
    // Start a new path
    ctx.beginPath()
    ctx.moveTo(x, y)
    lastPointRef.current = { x, y }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ensure current color is set
    ctx.strokeStyle = color
    ctx.lineWidth = BRUSH_SIZE

    const { x, y } = getCoordinates(e)
    const lastPoint = lastPointRef.current

    if (lastPoint) {
      // Draw smooth continuous line (similar to Anna's Garden style)
      ctx.lineTo(x, y)
      ctx.stroke()
    }
    
    // Update last point for next segment
    lastPointRef.current = { x, y }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    lastPointRef.current = null
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const handleSave = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const imageData = canvas.toDataURL("image/png")
    onSave(imageData)
    clearCanvas()
  }

  // Colors matching nav bar style + brown and black
  const colorConfig = [
    { color: "blue", hex: "#3B82F6" },
    { color: "pink", hex: "#EC4899" },
    { color: "yellow", hex: "#EAB308" },
    { color: "green", hex: "#22C55E" },
    { color: "purple", hex: "#A855F7" },
    { color: "orange", hex: "#F97316" },
    { color: "brown", hex: "#8B4513" },
    { color: "black", hex: "#000000" },
  ]

  const getColorClass = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      'blue': 'bg-blue-500',
      'pink': 'bg-pink-500',
      'yellow': 'bg-yellow-500',
      'green': 'bg-green-500',
      'purple': 'bg-purple-500',
      'orange': 'bg-orange-500',
      'brown': 'bg-amber-900',
      'black': 'bg-black',
    }
    return colorMap[colorName] || 'bg-gray-500'
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[432px] p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-auto">
        <DialogTitle className="sr-only">Draw a Duck</DialogTitle>
        <div className="flex flex-col gap-4 w-full">
          {/* Color Palette - Horizontal Row */}
          <div className="flex items-center gap-2 w-full max-w-[400px]">
            {colorConfig.map(({ color: colorName, hex }) => (
              <button
                key={colorName}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setColor(hex)
                }}
                className={`w-5 h-5 rounded-full transition-all duration-200 ${getColorClass(colorName)} hover:scale-110 cursor-pointer ${
                  color === hex ? 'scale-110 ring-2 ring-foreground' : ''
                }`}
                type="button"
              />
            ))}
          </div>

          {/* Canvas Area */}
          <div className="w-full">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="border border-gray-300 dark:border-gray-600 rounded-lg cursor-crosshair touch-none bg-background"
              style={{ 
                touchAction: "none",
                display: "block",
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                aspectRatio: "1",
              }}
            />
          </div>

          {/* Add to Pond Button */}
          <div className="w-full max-w-[400px]">
            <Button
              onClick={handleSave}
              className="w-full"
            >
              Add to Pond
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

