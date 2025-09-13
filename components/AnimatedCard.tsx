"use client"

// React Imports
import { useState } from "react"

type AnimatedCardProps = {
  id: string
  href: string
  children: React.ReactNode
  color?: string
}

export function AnimatedCard({ id, href, children, color }: AnimatedCardProps) {
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

  const getColorClasses = () => {
    if (!color) {
      return "border-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
    }
    
    // Color mappings - only apply colors on hover/interaction
    const colorMap: {[key: string]: string} = {
      'red': 'border-gray-300 hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-gray-300 dark:hover:border-red-400 dark:hover:bg-red-500 dark:hover:text-white',
      'blue': 'border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-300 dark:hover:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white',
      'yellow': 'border-gray-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black dark:border-gray-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-black',
      'pink': 'border-gray-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white dark:border-gray-300 dark:hover:border-pink-400 dark:hover:bg-pink-500 dark:hover:text-white',
      'green': 'border-gray-300 hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-gray-300 dark:hover:border-green-400 dark:hover:bg-green-500 dark:hover:text-white',
      'purple': 'border-gray-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white dark:border-gray-300 dark:hover:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-white',
      'gray': 'border-gray-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white dark:border-gray-300 dark:hover:border-gray-400 dark:hover:bg-gray-500 dark:hover:text-white',
      'orange': 'border-gray-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-gray-300 dark:hover:border-orange-400 dark:hover:bg-orange-500 dark:hover:text-white',
      'white': 'border-gray-300 hover:border-gray-400 hover:bg-gray-100 hover:text-black dark:border-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
      'black': 'border-gray-300 hover:border-black hover:bg-black hover:text-white dark:border-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black'
    }
    
    return colorMap[color] || "border-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  }

  return (
    <a
      href={href}
      className={`block w-full h-12 border border-dashed transition-all duration-300 cursor-pointer group px-4 flex items-center overflow-hidden ${getColorClasses()}`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
      onTouchStart={() => handleMouseEnter(id)}
      onTouchEnd={() => handleMouseLeave(id)}
    >
      <h3 className="text-base font-bold whitespace-nowrap">
        {animationTexts[id] || id}
      </h3>
    </a>
  )
}
