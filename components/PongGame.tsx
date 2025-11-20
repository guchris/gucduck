"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { toast } from "sonner"

interface LetterTarget {
  id: string
  x: number
  y: number
  width: number
  height: number
  element: HTMLElement
}

interface PongGameProps {
  onLetterHit: (letterId: string) => void
  letterTargets: LetterTarget[]
  allLettersHit: boolean
  onGameStateChange?: (state: { time: number; lives: number }) => void
  onLivesChange?: (lives: number) => void
  onGameOver?: (finalTime: number) => void
  gameTime?: number
  lives?: number
}

export function PongGame({ onLetterHit, letterTargets, allLettersHit, onGameStateChange, onLivesChange, onGameOver, gameTime = 0, lives = 3 }: PongGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const gameStartTimeRef = useRef<number | null>(null)
  const gameStateRef = useRef({
    ballX: 0,
    ballY: 0,
    ballVelX: 0,
    ballVelY: 0,
    paddleX: 0,
    paddleY: 0,
    paddleWidth: 100,
    paddleHeight: 10,
    ballRadius: 8,
    speed: 3,
    baseSpeed: 3,
    lastSpeedIncrease: Date.now(),
    hitLetters: new Set<string>(),
    lives: 3,
    gameTime: 0,
    lastFrameTime: 0,
  })

  const [paddleX, setPaddleX] = useState(0)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [lastMouseX, setLastMouseX] = useState(0)
  const [gameEnded, setGameEnded] = useState(false)

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize ball position and velocity
    const state = gameStateRef.current
    state.ballX = canvas.width / 2
    state.ballY = canvas.height / 2
    const angle = (Math.random() - 0.5) * Math.PI / 3 // -30 to 30 degrees
    state.ballVelX = Math.sin(angle) * state.baseSpeed
    state.ballVelY = -Math.cos(angle) * state.baseSpeed
    state.paddleY = canvas.height - 40
    state.paddleX = canvas.width / 2 - state.paddleWidth / 2
    state.lives = 3
    state.gameTime = 0
    gameStartTimeRef.current = Date.now()
    state.lastFrameTime = Date.now()
    onLivesChange?.(3)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Handle mouse/touch input for paddle
  const handlePointerMove = useCallback((clientX: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const newPaddleX = clientX - rect.left - gameStateRef.current.paddleWidth / 2
    const clampedX = Math.max(0, Math.min(canvas.width - gameStateRef.current.paddleWidth, newPaddleX))
    
    setPaddleX(clampedX)
    gameStateRef.current.paddleX = clampedX
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsMouseDown(true)
    setLastMouseX(e.clientX)
    handlePointerMove(e.clientX)
  }, [handlePointerMove])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isMouseDown) {
      handlePointerMove(e.clientX)
    }
  }, [isMouseDown, handlePointerMove])

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false)
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX)
    }
  }, [handlePointerMove])

  // Check collision between ball and rectangle
  const checkCollision = (
    ballX: number,
    ballY: number,
    ballRadius: number,
    rectX: number,
    rectY: number,
    rectWidth: number,
    rectHeight: number
  ): boolean => {
    const closestX = Math.max(rectX, Math.min(ballX, rectX + rectWidth))
    const closestY = Math.max(rectY, Math.min(ballY, rectY + rectHeight))
    const distanceX = ballX - closestX
    const distanceY = ballY - closestY
    return distanceX * distanceX + distanceY * distanceY < ballRadius * ballRadius
  }

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gameLoop = () => {
      const state = gameStateRef.current
      const now = Date.now()
      
      // Stop game if won
      if (allLettersHit) {
        if (!gameEnded && gameStartTimeRef.current) {
          setGameEnded(true)
          const elapsed = (now - gameStartTimeRef.current) / 1000
          state.gameTime = Math.round(elapsed * 100) / 100
          onGameStateChange?.({ time: state.gameTime, lives: state.lives })
        }
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        return
      }
      
      // Update game time (to 2 decimal places) - only if game hasn't ended
      if (!gameEnded && gameStartTimeRef.current) {
        const elapsed = (now - gameStartTimeRef.current) / 1000
        state.gameTime = Math.round(elapsed * 100) / 100
        onGameStateChange?.({ time: state.gameTime, lives: state.lives })
      }

      // Increase speed every 10 seconds
      if (now - state.lastSpeedIncrease > 10000) {
        const oldSpeed = state.baseSpeed
        state.baseSpeed += 0.5
        // Scale current velocity to maintain direction but increase speed
        const currentSpeed = Math.sqrt(state.ballVelX * state.ballVelX + state.ballVelY * state.ballVelY)
        if (currentSpeed > 0) {
          const scale = state.baseSpeed / oldSpeed
          state.ballVelX *= scale
          state.ballVelY *= scale
        }
        state.lastSpeedIncrease = now
      }

      // Update ball position
      state.ballX += state.ballVelX
      state.ballY += state.ballVelY

      // Wall collisions (left and right)
      if (state.ballX - state.ballRadius <= 0 || state.ballX + state.ballRadius >= canvas.width) {
        state.ballVelX = -state.ballVelX
        state.ballX = Math.max(state.ballRadius, Math.min(canvas.width - state.ballRadius, state.ballX))
      }

      // Top wall collision
      if (state.ballY - state.ballRadius <= 0) {
        state.ballVelY = -state.ballVelY
        state.ballY = state.ballRadius
      }

      // Bottom wall (lose a life if missed)
      if (state.ballY + state.ballRadius >= canvas.height && !gameEnded) {
        // Lose a life
        state.lives -= 1
        
        if (state.lives > 0) {
          // Update lives only if game hasn't ended
          onLivesChange?.(state.lives)
          // Reset ball to center with random direction
          state.ballX = canvas.width / 2
          state.ballY = canvas.height / 2
          const angle = (Math.random() - 0.5) * Math.PI / 3 // -30 to 30 degrees
          state.ballVelX = Math.sin(angle) * state.baseSpeed
          state.ballVelY = -Math.cos(angle) * state.baseSpeed
        } else {
          // Game over - stop the game and finalize time and lives
          if (!gameEnded && gameStartTimeRef.current) {
            setGameEnded(true)
            const elapsed = (Date.now() - gameStartTimeRef.current) / 1000
            state.gameTime = Math.round(elapsed * 100) / 100
            state.lives = 0
            onGameStateChange?.({ time: state.gameTime, lives: 0 })
            onLivesChange?.(0)
            onGameOver?.(state.gameTime)
          }
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
          }
          return
        }
      }

      // Paddle collision
      const paddleTop = state.paddleY
      const paddleBottom = state.paddleY + state.paddleHeight
      const paddleLeft = state.paddleX
      const paddleRight = state.paddleX + state.paddleWidth

      if (
        state.ballY + state.ballRadius >= paddleTop &&
        state.ballY - state.ballRadius <= paddleBottom &&
        state.ballX + state.ballRadius >= paddleLeft &&
        state.ballX - state.ballRadius <= paddleRight &&
        state.ballVelY > 0
      ) {
        // Calculate hit position on paddle (0 = left edge, 1 = right edge)
        const hitPos = (state.ballX - paddleLeft) / state.paddleWidth
        // Angle based on hit position (-60 to 60 degrees)
        const angle = (hitPos - 0.5) * 1.2 // -0.6 to 0.6 radians
        // Use current speed but maintain it
        const currentSpeed = Math.sqrt(state.ballVelX * state.ballVelX + state.ballVelY * state.ballVelY)
        const newSpeed = Math.max(currentSpeed, state.baseSpeed) // Ensure minimum speed
        
        state.ballVelX = Math.sin(angle) * newSpeed
        state.ballVelY = -Math.cos(angle) * newSpeed
        
        // Ensure ball is above paddle
        state.ballY = paddleTop - state.ballRadius
      }

      // Check collisions with letter targets
      letterTargets.forEach((target) => {
        if (!state.hitLetters.has(target.id) && target.element) {
          const rect = target.element.getBoundingClientRect()
          const canvasRect = canvas.getBoundingClientRect()
          
          // Convert element position to canvas coordinates
          const targetLeft = rect.left - canvasRect.left
          const targetTop = rect.top - canvasRect.top
          const targetRight = targetLeft + rect.width
          const targetBottom = targetTop + rect.height

          // Check collision with bounding box
          if (
            state.ballX + state.ballRadius >= targetLeft &&
            state.ballX - state.ballRadius <= targetRight &&
            state.ballY + state.ballRadius >= targetTop &&
            state.ballY - state.ballRadius <= targetBottom
          ) {
            // More precise collision check
            const targetCenterX = targetLeft + rect.width / 2
            const targetCenterY = targetTop + rect.height / 2
            
            if (
              checkCollision(
                state.ballX,
                state.ballY,
                state.ballRadius,
                targetLeft,
                targetTop,
                rect.width,
                rect.height
              )
            ) {
              state.hitLetters.add(target.id)
              onLetterHit(target.id)
              
              // Bounce ball off target (simple reflection)
              const dx = state.ballX - targetCenterX
              const dy = state.ballY - targetCenterY
              const distance = Math.sqrt(dx * dx + dy * dy)
              if (distance > 0) {
                const bounceSpeed = state.baseSpeed * 1.2
                state.ballVelX = (dx / distance) * bounceSpeed
                state.ballVelY = (dy / distance) * bounceSpeed
              }
            }
          }
        }
      })

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw paddle (rounded)
      ctx.fillStyle = "#000000"
      const paddleRadius = state.paddleHeight / 2
      ctx.beginPath()
      // Draw rounded rectangle
      ctx.moveTo(state.paddleX + paddleRadius, state.paddleY)
      ctx.lineTo(state.paddleX + state.paddleWidth - paddleRadius, state.paddleY)
      ctx.quadraticCurveTo(state.paddleX + state.paddleWidth, state.paddleY, state.paddleX + state.paddleWidth, state.paddleY + paddleRadius)
      ctx.lineTo(state.paddleX + state.paddleWidth, state.paddleY + state.paddleHeight - paddleRadius)
      ctx.quadraticCurveTo(state.paddleX + state.paddleWidth, state.paddleY + state.paddleHeight, state.paddleX + state.paddleWidth - paddleRadius, state.paddleY + state.paddleHeight)
      ctx.lineTo(state.paddleX + paddleRadius, state.paddleY + state.paddleHeight)
      ctx.quadraticCurveTo(state.paddleX, state.paddleY + state.paddleHeight, state.paddleX, state.paddleY + state.paddleHeight - paddleRadius)
      ctx.lineTo(state.paddleX, state.paddleY + paddleRadius)
      ctx.quadraticCurveTo(state.paddleX, state.paddleY, state.paddleX + paddleRadius, state.paddleY)
      ctx.closePath()
      ctx.fill()

      // Draw ball
      ctx.beginPath()
      ctx.arc(state.ballX, state.ballY, state.ballRadius, 0, Math.PI * 2)
      ctx.fillStyle = "#000000"
      ctx.fill()

      animationFrameRef.current = requestAnimationFrame(gameLoop)
    }

    animationFrameRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [letterTargets, onLetterHit, allLettersHit, onGameStateChange, onLivesChange, onGameOver, gameEnded])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-auto"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => {
          e.preventDefault()
          if (e.touches.length > 0) {
            handlePointerMove(e.touches[0].clientX)
          }
        }}
        style={{ touchAction: "none" }}
      />
      {/* Timer and Lives Display */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="bg-black/30 dark:bg-white/30 text-white dark:text-black px-4 py-2 rounded-lg flex items-center gap-4 text-sm font-mono backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Time:</span>
            <span className="font-semibold">{gameTime.toFixed(2)}s</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">Lives:</span>
            <span className="font-semibold">{lives}</span>
          </div>
        </div>
      </div>
    </>
  )
}

