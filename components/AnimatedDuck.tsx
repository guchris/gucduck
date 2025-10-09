"use client"

import React, { useState, useEffect, useRef } from "react"

interface Position {
  x: number
  y: number
}


export function AnimatedDuck() {
  const [duckPosition, setDuckPosition] = useState<Position>({ x: 0, y: 0 })
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 })
  const [isMouseActive, setIsMouseActive] = useState(false)
  const [travelPath, setTravelPath] = useState<Position[]>([])
  const [duckVelocity, setDuckVelocity] = useState<Position>({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const animationRef = useRef<number | undefined>(undefined)
  const lastMouseMoveRef = useRef<number>(0)
  const lastPathPointRef = useRef<Position>({ x: 0, y: 0 })

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle mouse and touch movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseActive(true)
      lastMouseMoveRef.current = Date.now()
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault() // Prevent scrolling
      e.stopPropagation() // Prevent event bubbling
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        // Add some smoothing to reduce jittery movement on mobile
        const currentTime = Date.now()
        if (currentTime - lastMouseMoveRef.current > 16) { // ~60fps throttling
          setMousePosition({ x: touch.clientX, y: touch.clientY })
          setIsMouseActive(true)
          lastMouseMoveRef.current = currentTime
        }
      }
    }

    const handleMouseEnter = () => {
      setIsMouseActive(true)
    }

    const handleMouseLeave = () => {
      setIsMouseActive(false)
    }

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsMouseActive(true)
    }

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsMouseActive(false)
    }

    // Mouse events
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    // Touch events
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    
    // Check if interaction stopped
    const checkInteractionStop = setInterval(() => {
      if (Date.now() - lastMouseMoveRef.current > 1000) {
        setIsMouseActive(false)
      }
    }, 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      clearInterval(checkInteractionStop)
    }
  }, [])

  // Add point to travel path
  const addToTravelPath = (x: number, y: number) => {
    const newPoint: Position = { x, y }
    const lastPoint = lastPathPointRef.current
    
    // Only add point if duck has moved a minimum distance
    const distance = Math.sqrt((x - lastPoint.x) ** 2 + (y - lastPoint.y) ** 2)
    const minDistance = isMobile ? 5 : 3 // Higher threshold on mobile to reduce streaking
    if (distance > minDistance) {
      setTravelPath(prev => [...prev, newPoint])
      lastPathPointRef.current = newPoint
    }
  }

  // Duck animation logic
  useEffect(() => {
    // Initialize duck position and velocity
    if (duckPosition.x === 0 && duckPosition.y === 0) {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      setDuckPosition({ x: centerX, y: centerY })
      lastPathPointRef.current = { x: centerX, y: centerY }
      
      // Start with slow, gentle velocity
      const angle = Math.random() * Math.PI * 2
      const speed = 0.3 + Math.random() * 0.4 // Much slower, more gentle
      setDuckVelocity({
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      })
    }

    const animateDuck = () => {
      setDuckPosition(prev => {
        let newX = prev.x
        let newY = prev.y
        let newVelX = duckVelocity.x
        let newVelY = duckVelocity.y

        if (isMouseActive) {
          // Turn towards cursor direction when mouse is active
          const dx = mousePosition.x - prev.x
          const dy = mousePosition.y - prev.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance > 20) {
            // Calculate desired direction
            const targetAngle = Math.atan2(dy, dx)
            const currentAngle = Math.atan2(newVelY, newVelX)
            
            // Smoothly turn towards target direction
            let angleDiff = targetAngle - currentAngle
            // Normalize angle difference
            while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI
            while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI
            
            // Turn gradually (like a real duck)
            const turnSpeed = 0.05
            const newAngle = currentAngle + angleDiff * turnSpeed
            const currentSpeed = Math.sqrt(newVelX * newVelX + newVelY * newVelY)
            
            // Increase speed when following cursor (but not too fast)
            const followSpeedMultiplier = 1.5 // 50% faster when following
            const newSpeed = Math.min(currentSpeed * followSpeedMultiplier, 1.2) // Cap at reasonable speed
            
            newVelX = Math.cos(newAngle) * newSpeed
            newVelY = Math.sin(newAngle) * newSpeed
          }
        } else {
          // Autonomous swimming - create oval/circular motion patterns like real ducks
          // Add a gentle circular tendency to create natural swimming patterns
          const currentSpeed = Math.sqrt(newVelX * newVelX + newVelY * newVelY)
          if (currentSpeed > 0.1) {
            // Create a gentle circular motion by adding perpendicular force
            const currentAngle = Math.atan2(newVelY, newVelX)
            const circularForce = 0.003 // Very gentle circular tendency
            const perpendicularAngle = currentAngle + Math.PI / 2 // 90 degrees perpendicular
            
            // Add gentle circular motion (alternating direction occasionally)
            const circularDirection = Math.sin(Date.now() * 0.001) > 0 ? 1 : -1
            newVelX += Math.cos(perpendicularAngle) * circularForce * circularDirection
            newVelY += Math.sin(perpendicularAngle) * circularForce * circularDirection
          }
          
          // Still allow occasional direction changes but much less frequently
          if (Math.random() < 0.005) { // Reduced from 0.2 to 0.005 for more natural patterns
            const currentAngle = Math.atan2(newVelY, newVelX)
            const turnAmount = (Math.random() - 0.5) * 0.1 // Even smaller turns
            const newAngle = currentAngle + turnAmount
            const speed = Math.sqrt(newVelX * newVelX + newVelY * newVelY)
            
            newVelX = Math.cos(newAngle) * speed
            newVelY = Math.sin(newAngle) * speed
          }
          
          // Add gentle swimming variation - keep it slow
          const speedVariation = 0.99 + Math.random() * 0.02 // Very subtle speed changes
          newVelX *= speedVariation
          newVelY *= speedVariation
          
          // Cap maximum speed to keep it gentle
          const maxSpeed = 0.8
          const speedCheck = Math.sqrt(newVelX * newVelX + newVelY * newVelY)
          if (speedCheck > maxSpeed) {
            newVelX = (newVelX / speedCheck) * maxSpeed
            newVelY = (newVelY / speedCheck) * maxSpeed
          }
        }

        // Apply velocity with natural swimming motion
        newX += newVelX
        newY += newVelY

        // Create gradual turns away from screen edges with circular motion
        const duckRadius = 30
        const edgeBuffer = 100 // Start gentle turning when within 100px of edge
        
        // Apply gradual, circular turning away from edges
        if (newX < edgeBuffer) {
          // Near left edge - create gradual circular turn away
          const distanceFromEdge = edgeBuffer - newX
          const turnStrength = 0.002 * (distanceFromEdge / edgeBuffer) // Gradual increase
          
          // Add perpendicular force to create circular motion away from edge
          const currentAngle = Math.atan2(newVelY, newVelX)
          const turnAngle = currentAngle + Math.PI / 2 // Perpendicular to current direction
          newVelX += Math.cos(turnAngle) * turnStrength * distanceFromEdge
          newVelY += Math.sin(turnAngle) * turnStrength * distanceFromEdge
        } else if (newX > window.innerWidth - edgeBuffer) {
          // Near right edge - create gradual circular turn away
          const distanceFromEdge = newX - (window.innerWidth - edgeBuffer)
          const turnStrength = 0.002 * (distanceFromEdge / edgeBuffer) // Gradual increase
          
          // Add perpendicular force to create circular motion away from edge
          const currentAngle = Math.atan2(newVelY, newVelX)
          const turnAngle = currentAngle - Math.PI / 2 // Perpendicular to current direction
          newVelX += Math.cos(turnAngle) * turnStrength * distanceFromEdge
          newVelY += Math.sin(turnAngle) * turnStrength * distanceFromEdge
        }
        
        if (newY < edgeBuffer) {
          // Near top edge - create gradual circular turn away
          const distanceFromEdge = edgeBuffer - newY
          const turnStrength = 0.002 * (distanceFromEdge / edgeBuffer) // Gradual increase
          
          // Add perpendicular force to create circular motion away from edge
          const currentAngle = Math.atan2(newVelY, newVelX)
          const turnAngle = currentAngle - Math.PI / 2 // Perpendicular to current direction
          newVelX += Math.cos(turnAngle) * turnStrength * distanceFromEdge
          newVelY += Math.sin(turnAngle) * turnStrength * distanceFromEdge
        } else if (newY > window.innerHeight - edgeBuffer) {
          // Near bottom edge - create gradual circular turn away
          const distanceFromEdge = newY - (window.innerHeight - edgeBuffer)
          const turnStrength = 0.002 * (distanceFromEdge / edgeBuffer) // Gradual increase
          
          // Add perpendicular force to create circular motion away from edge
          const currentAngle = Math.atan2(newVelY, newVelX)
          const turnAngle = currentAngle + Math.PI / 2 // Perpendicular to current direction
          newVelX += Math.cos(turnAngle) * turnStrength * distanceFromEdge
          newVelY += Math.sin(turnAngle) * turnStrength * distanceFromEdge
        }
        
        // Keep duck within screen bounds (gentle constraint)
        if (newX < duckRadius) {
          newX = duckRadius
        } else if (newX > window.innerWidth - duckRadius) {
          newX = window.innerWidth - duckRadius
        }
        
        if (newY < duckRadius) {
          newY = duckRadius
        } else if (newY > window.innerHeight - duckRadius) {
          newY = window.innerHeight - duckRadius
        }

        // Update velocity
        setDuckVelocity({ x: newVelX, y: newVelY })

        // Add to travel path (with mobile-specific filtering)
        const speed = Math.sqrt(newVelX * newVelX + newVelY * newVelY)
        if (isMobile) {
          // Mobile: Only add points when moving at reasonable speed to prevent streaking
          if (speed > 0.2 && speed < 3.0) {
            addToTravelPath(newX, newY)
          }
        } else {
          // Desktop: Original behavior - add points when moving fast enough
          if (speed > 0.1) {
            addToTravelPath(newX, newY)
          }
        }

        return { x: newX, y: newY }
      })
      
      animationRef.current = requestAnimationFrame(animateDuck)
    }

    animationRef.current = requestAnimationFrame(animateDuck)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, isMouseActive, duckVelocity])


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ touchAction: 'none' }}>
      {/* Travel Path Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          zIndex: 1,
          touchAction: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          ...(isMobile && { willChange: 'auto' }) // Only optimize for mobile rendering
        }}
      >
        <path
          d={travelPath.length > 1 
            ? `M ${travelPath[0].x} ${travelPath[0].y} ${travelPath.slice(1).map(point => `L ${point.x} ${point.y}`).join(' ')}`
            : ''
          }
          stroke="rgba(200, 200, 200, 0.3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            ...(isMobile && { vectorEffect: 'non-scaling-stroke' }) // Only prevent stroke scaling issues on mobile
          }}
        />
      </svg>
      
      {/* Duck with Gamertag */}
      <div
        className="absolute pointer-events-none transition-transform duration-100 ease-out"
        style={{
          left: duckPosition.x,
          top: duckPosition.y,
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          touchAction: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        {/* Gamertag */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div 
            className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-bold tracking-wider"
            style={{
              touchAction: 'none',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            gucduck
          </div>
        </div>
        
        {/* Simple Yellow Dot */}
        <div 
          className="w-8 h-8 bg-yellow-400 rounded-full transition-transform duration-200"
          style={{
            transform: isMouseActive ? 'scale(1.2)' : 'scale(1)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            touchAction: 'none',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        />
      </div>

    </div>
  )
}
