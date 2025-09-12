"use client"

// React Imports
import { useState } from "react"

type AnimatedCardProps = {
  id: string
  href: string
  children: React.ReactNode
}

export function AnimatedCard({ id, href, children }: AnimatedCardProps) {
  const [animationTexts, setAnimationTexts] = useState<{[key: string]: string}>({})
  const [animationTimers, setAnimationTimers] = useState<{[key: string]: NodeJS.Timeout}>({})

  const handleMouseEnter = (categoryId: string) => {
    // Clear any existing timer for this card
    if (animationTimers[categoryId]) {
      clearTimeout(animationTimers[categoryId])
    }

    const lastLetter = categoryId.slice(-1)
    let currentText = categoryId
    let count = 0
    
    const animate = () => {
      if (count < 200) { // Limit to prevent infinite growth
        currentText += lastLetter
        setAnimationTexts(prev => ({
          ...prev,
          [categoryId]: currentText
        }))
        count++
        const timer = setTimeout(animate, 50) // Speed of animation
        setAnimationTimers(prev => ({
          ...prev,
          [categoryId]: timer
        }))
      }
    }
    
    animate()
  }

  const handleMouseLeave = (categoryId: string) => {
    // Clear the timer for this specific card
    if (animationTimers[categoryId]) {
      clearTimeout(animationTimers[categoryId])
    }
    
    // Reset the animation text for this card
    setAnimationTexts(prev => ({
      ...prev,
      [categoryId]: ""
    }))
    
    // Remove the timer from state
    setAnimationTimers(prev => {
      const newTimers = { ...prev }
      delete newTimers[categoryId]
      return newTimers
    })
  }

  return (
    <a
      href={href}
      className="block w-full h-12 border border-dashed border-gray-300 transition-all duration-300 cursor-pointer group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 flex items-center overflow-hidden"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
    >
      <h3 className="text-base font-bold whitespace-nowrap">
        {animationTexts[id] || id}
      </h3>
    </a>
  )
}
