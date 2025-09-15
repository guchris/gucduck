"use client"

// React Imports
import React, { useState, useEffect, useRef } from "react"

type AnimatedCardProps = {
  id: string
  href: string
  color?: string
}

export function AnimatedCard({ id, href, color }: AnimatedCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const isMobile = useRef(false)

  // Check if device is mobile (once on mount)
  useEffect(() => {
    isMobile.current = window.innerWidth < 768 || 'ontouchstart' in window
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    // Simple mobile delay to show touch color
    if (isMobile.current) {
      e.preventDefault()
      
      if (isLoading) return
      
      setIsLoading(true)
      
      // Wait 0.1 seconds to show touch color, then navigate
      setTimeout(() => {
        window.location.href = href
      }, 100)
    }
    // On desktop, let the default link behavior handle navigation
  }

  const getColorClasses = () => {
    const baseClasses = "border-gray-300 transition-all duration-300"
    
    if (!color) {
      return `${baseClasses} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`
    }
    
    // Simplified color mappings
    const colorMap: {[key: string]: {border: string, bg: string, text: string, darkBorder: string, darkBg: string, darkText: string}} = {
      'red': { border: 'hover:border-red-500', bg: 'hover:bg-red-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-red-400', darkBg: 'dark:hover:bg-red-500', darkText: 'dark:hover:text-white' },
      'blue': { border: 'hover:border-blue-500', bg: 'hover:bg-blue-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-blue-400', darkBg: 'dark:hover:bg-blue-500', darkText: 'dark:hover:text-white' },
      'yellow': { border: 'hover:border-yellow-500', bg: 'hover:bg-yellow-500', text: 'hover:text-black', darkBorder: 'dark:hover:border-yellow-400', darkBg: 'dark:hover:bg-yellow-500', darkText: 'dark:hover:text-black' },
      'pink': { border: 'hover:border-pink-500', bg: 'hover:bg-pink-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-pink-400', darkBg: 'dark:hover:bg-pink-500', darkText: 'dark:hover:text-white' },
      'green': { border: 'hover:border-green-500', bg: 'hover:bg-green-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-green-400', darkBg: 'dark:hover:bg-green-500', darkText: 'dark:hover:text-white' },
      'purple': { border: 'hover:border-purple-500', bg: 'hover:bg-purple-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-purple-400', darkBg: 'dark:hover:bg-purple-500', darkText: 'dark:hover:text-white' },
      'gray': { border: 'hover:border-gray-500', bg: 'hover:bg-gray-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-gray-400', darkBg: 'dark:hover:bg-gray-500', darkText: 'dark:hover:text-white' },
      'orange': { border: 'hover:border-orange-500', bg: 'hover:bg-orange-500', text: 'hover:text-white', darkBorder: 'dark:hover:border-orange-400', darkBg: 'dark:hover:bg-orange-500', darkText: 'dark:hover:text-white' },
      'white': { border: 'hover:border-gray-400', bg: 'hover:bg-gray-100', text: 'hover:text-black', darkBorder: 'dark:hover:border-gray-500', darkBg: 'dark:hover:bg-gray-700', darkText: 'dark:hover:text-white' },
      'black': { border: 'hover:border-black', bg: 'hover:bg-black', text: 'hover:text-white', darkBorder: 'dark:hover:border-white', darkBg: 'dark:hover:bg-white', darkText: 'dark:hover:text-black' }
    }
    
    const colorConfig = colorMap[color]
    if (!colorConfig) {
      return `${baseClasses} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`
    }
    
    return `${baseClasses} ${colorConfig.border} ${colorConfig.bg} ${colorConfig.text} ${colorConfig.darkBorder} ${colorConfig.darkBg} ${colorConfig.darkText}`
  }


  return (
    <div className="relative">
      <a
        href={href}
        className={`block w-full h-12 border border-dashed cursor-pointer group px-4 flex items-center overflow-hidden ${getColorClasses()}`}
        onClick={handleClick}
      >
        <h3 className="text-base font-bold whitespace-nowrap relative z-10">
          {id}
        </h3>
      </a>
    </div>
  )
}
