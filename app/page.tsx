"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { Pond } from "@/components/Pond"
import { DuckCanvas } from "@/components/DuckCanvas"
import { useState, useEffect } from "react"
import { Duck } from "@/lib/types"
import { getAllDucks, saveDuck } from "@/lib/duckStorage"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [ducks, setDucks] = useState<Duck[]>([])
  const [showCanvas, setShowCanvas] = useState(false)
  const [newDuckIds, setNewDuckIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load ducks from localStorage
    setDucks(getAllDucks())
    
    // Prevent scrolling on the home page
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  const handleSaveDuck = (imageData: string) => {
    const newDuck: Duck = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
      imageData,
      name: "", // No name needed
      createdAt: Date.now(),
    }
    saveDuck(newDuck)
    setDucks([...ducks, newDuck])
    setNewDuckIds(new Set([...newDuckIds, newDuck.id]))
    setShowCanvas(false)
  }

  return (
    <>
      {/* Full screen pond background */}
      <div className="fixed inset-0 overflow-hidden">
        <Pond ducks={ducks} newDuckIds={newDuckIds} />
      </div>

      {/* Overlay content */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="w-full px-6 pointer-events-auto">
          <NavBar />
        </div>

        {/* Draw a Duck text */}
        <div className="fixed bottom-6 right-6 z-20 pointer-events-auto">
          <Button
            onClick={() => setShowCanvas(!showCanvas)}
            variant="outline"
            className="shadow-none bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-yellow-500 hover:text-white transition-all duration-200"
          >
            Draw a Duck
          </Button>
        </div>
      </div>

      {/* Drawing panel */}
      <DuckCanvas
        onSave={handleSaveDuck}
        onClose={() => setShowCanvas(false)}
        isOpen={showCanvas}
      />
    </>
  );
}