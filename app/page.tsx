"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { PongGame } from "@/components/PongGame"
import { WinDialog } from "@/components/WinDialog"
import { GameOverDialog } from "@/components/GameOverDialog"
import { useState, useEffect, useRef, useCallback } from "react"
import { toast } from "sonner"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

interface LetterTarget {
  id: string
  x: number
  y: number
  width: number
  height: number
  element: HTMLElement
}

export default function Home() {
  const [hitLetters, setHitLetters] = useState<Set<string>>(new Set())
  const [letterTargets, setLetterTargets] = useState<LetterTarget[]>([])
  const letterRefsMap = useRef<Map<string, HTMLElement>>(new Map())
  const hasWonRef = useRef(false)
  const [gameTime, setGameTime] = useState(0)
  const [lives, setLives] = useState(3)
  const [showWinDialog, setShowWinDialog] = useState(false)
  const [showGameOverDialog, setShowGameOverDialog] = useState(false)
  const finalGameStateRef = useRef<{ time: number; lives: number } | null>(null)
  const gameOverTimeRef = useRef<number | null>(null)

  useEffect(() => {
    // Prevent scrolling on the home page
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  // Update letter targets when refs change
  useEffect(() => {
    const updateTargets = () => {
      const targets: LetterTarget[] = []
      letterRefsMap.current.forEach((element, id) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          targets.push({
            id,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height,
            element,
          })
        }
      })
      setLetterTargets(targets)
    }

    updateTargets()
    const interval = setInterval(updateTargets, 100) // Update positions periodically

    window.addEventListener("resize", updateTargets)
    window.addEventListener("scroll", updateTargets)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", updateTargets)
      window.removeEventListener("scroll", updateTargets)
    }
  }, [hitLetters])

  const handleLetterRef = useCallback((letterId: string, element: HTMLElement | null) => {
    if (element) {
      letterRefsMap.current.set(letterId, element)
    } else {
      letterRefsMap.current.delete(letterId)
    }
  }, [])

  const handleLetterHit = useCallback((letterId: string) => {
    setHitLetters((prev) => {
      const newSet = new Set(prev)
      newSet.add(letterId)
      return newSet
    })
  }, [])

  const handleGameStateChange = useCallback((state: { time: number; lives: number }) => {
    setGameTime(state.time)
    setLives(state.lives)
  }, [])

  const handleLivesChange = useCallback((newLives: number) => {
    setLives(newLives)
  }, [])

  const handleGameOver = useCallback((finalTime: number) => {
    gameOverTimeRef.current = finalTime
    setShowGameOverDialog(true)
  }, [])

  const handleViewLeaderboard = useCallback(() => {
    // TODO: Navigate to leaderboard page or show leaderboard
    setShowGameOverDialog(false)
    // For now, just close the dialog
    // You can add navigation here later
  }, [])

  const handleRefresh = useCallback(() => {
    window.location.reload()
  }, [])

  const handleWinSubmit = useCallback(async (name: string) => {
    if (!finalGameStateRef.current) return

    try {
      const timestamp = new Date().toISOString()
      await addDoc(collection(db, "pong"), {
        name,
        timestamp,
        duration: finalGameStateRef.current.time,
        lives: finalGameStateRef.current.lives,
      })
      toast.success("Score has been saved.", {
        duration: 3000,
      })
    } catch (error) {
      console.error("Error saving score:", error)
      toast.error("Failed to save score.", {
        duration: 3000,
      })
    }
  }, [])

  // Check win condition
  useEffect(() => {
    if (letterTargets.length === 0) return
    
    const allHit = letterTargets.every((target) => hitLetters.has(target.id))
    
    if (allHit && !hasWonRef.current && letterTargets.length > 0) {
      hasWonRef.current = true
      finalGameStateRef.current = { time: gameTime, lives }
      setShowWinDialog(true)
    }
  }, [hitLetters, letterTargets, gameTime, lives])

  const allLettersHit = letterTargets.length > 0 && letterTargets.every((target) => hitLetters.has(target.id))

  return (
    <>
      {/* Full screen game canvas */}
      <div className="fixed inset-0 overflow-hidden bg-white dark:bg-black">
        <PongGame
          onLetterHit={handleLetterHit}
          letterTargets={letterTargets}
          allLettersHit={allLettersHit}
          onGameStateChange={handleGameStateChange}
          onLivesChange={handleLivesChange}
          onGameOver={handleGameOver}
          gameTime={gameTime}
          lives={lives}
        />
      </div>

      {/* Overlay content */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="w-full px-6 pointer-events-auto">
          <NavBar hitLetters={hitLetters} onLetterRef={handleLetterRef} />
        </div>
      </div>

      {/* Win Dialog */}
      {finalGameStateRef.current && (
        <WinDialog
          open={showWinDialog}
          onOpenChange={setShowWinDialog}
          onSubmit={handleWinSubmit}
          duration={finalGameStateRef.current.time}
          lives={finalGameStateRef.current.lives}
        />
      )}

      {/* Game Over Dialog */}
      <GameOverDialog
        open={showGameOverDialog}
        onOpenChange={setShowGameOverDialog}
        onViewLeaderboard={handleViewLeaderboard}
        onRefresh={handleRefresh}
      />
    </>
  );
}