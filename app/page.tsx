"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { Pond } from "@/components/Pond"
import { DuckCanvas } from "@/components/DuckCanvas"
import { useState, useEffect } from "react"
import { Duck } from "@/lib/types"
import { getAllDucks, saveDuck } from "@/lib/duckStorage"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [ducks, setDucks] = useState<Duck[]>([])
  const [showCanvas, setShowCanvas] = useState(false)
  const [newDuckIds, setNewDuckIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load ducks from localStorage
    setDucks(getAllDucks())
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
      <div className="fixed inset-0">
        <Pond ducks={ducks} newDuckIds={newDuckIds} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 min-h-screen pointer-events-none">
        <div className="w-full px-6 pointer-events-auto">
          <NavBar />
        </div>

        {/* Floating action buttons */}
        <div className="fixed bottom-6 left-6 right-6 flex gap-2 justify-center z-20 md:left-auto md:right-6 md:justify-end pointer-events-auto">
          <Button
            onClick={() => setShowCanvas(!showCanvas)}
            variant="outline"
            className="border border-gray-200 dark:border-gray-700 rounded-none py-2 px-3 text-xs font-medium hover:bg-yellow-500 hover:text-white transition-colors"
          >
            <span className="hidden sm:inline">Draw a Duck</span>
            <span className="sm:hidden">Draw a Duck</span>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border border-gray-200 dark:border-gray-700 rounded-none py-2 px-3 text-xs font-medium hover:bg-yellow-500 hover:text-white transition-colors"
          >
            <Link href="/duck">
              <span className="hidden sm:inline">Duck Gallery</span>
              <span className="sm:hidden">Duck Gallery</span>
            </Link>
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