"use client"

// React Imports
import React, { useEffect, useState } from "react"

// Next Imports
import Link from "next/link"
import { usePathname } from "next/navigation"

type MainCategory = {
  id: string
  href: string
  color: string
  number: number
}

const mainCategories: MainCategory[] = [
  {
    id: 'about',
    href: '/about',
    color: 'blue',
    number: 1
  },
  {
    id: 'fashion',
    href: '/fashion',
    color: 'pink',
    number: 2
  },
  {
    id: 'food',
    href: '/food',
    color: 'yellow',
    number: 3
  },
  {
    id: 'founder',
    href: '/founder',
    color: 'green',
    number: 4
  },
  {
    id: 'music',
    href: '/music',
    color: 'purple',
    number: 5
  },
  {
    id: 'travel',
    href: '/travel',
    color: 'orange',
    number: 6
  },
  {
    id: 'duck',
    href: '/duck',
    color: 'gray',
    number: 7
  },
  {
    id: 'other',
    href: '/other',
    color: 'black',
    number: 8
  }
]

export function NavBar() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true)
  const colors = ['blue', 'pink', 'yellow', 'green', 'purple', 'orange', 'gray', 'black']
  const pathname = usePathname()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Expanded only shows when at the very top (scrollY < 10px)
      // Compact shows when scrolling (scrollY >= 10px)
      setIsExpanded(currentScrollY < 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: string} = {
      'blue': 'bg-blue-500',
      'pink': 'bg-pink-500', 
      'yellow': 'bg-yellow-500',
      'green': 'bg-green-500',
      'purple': 'bg-purple-500',
      'orange': 'bg-orange-500',
      'gray': 'bg-gray-500',
      'black': 'bg-black'
    }
    return colorMap[color] || 'bg-gray-500'
  }

  const getHoverClasses = (color: string) => {
    const hoverMap: {[key: string]: string} = {
      'blue': 'hover:bg-blue-500', 
      'pink': 'hover:bg-pink-500', 
      'yellow': 'hover:bg-yellow-500',
      'green': 'hover:bg-green-500',
      'purple': 'hover:bg-purple-500',
      'orange': 'hover:bg-orange-500',
      'gray': 'hover:bg-gray-500',
      'black': 'hover:bg-black'
    }
    return hoverMap[color] || 'hover:bg-gray-500'
  }

  const getActiveClasses = (color: string) => {
    const activeMap: {[key: string]: string} = {
      'blue': 'bg-blue-500 text-white',
      'pink': 'bg-pink-500 text-white', 
      'yellow': 'bg-yellow-500 text-white',
      'green': 'bg-green-500 text-white',
      'purple': 'bg-purple-500 text-white',
      'orange': 'bg-orange-500 text-white',
      'gray': 'bg-gray-500 text-white',
      'black': 'bg-black text-white'
    }
    return activeMap[color] || 'bg-gray-500 text-white'
  }

  return (
    <div className="w-full sticky top-0 bg-transparent transition-all duration-300 z-50">
        <div className="flex items-start justify-between transition-all duration-300 py-4">
        {/* Left: Corner dot with name */}
        <Link href="/" className="flex items-start gap-2 group">
          <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${getColorClasses(colors[currentColorIndex])}`}></div>
          <div className={`text-xs font-medium transition-all duration-200 ${getHoverClasses(colors[currentColorIndex])} hover:text-white -mt-0.5`}>
            Chris Gu
          </div>
        </Link>

        {/* Right: Colored navigation dots */}
        <div className="transform rotate-90 origin-top-left -mr-16">
          <div className="flex flex-col items-start">
            {mainCategories.slice().reverse().map((category) => {
              const isActive = pathname === category.href
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="flex items-center gap-2 group transition-all duration-200"
                >
                  <div className={`w-3 h-3 rounded-full ${getColorClasses(category.color)}`}></div>
                  <div className={`text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive 
                      ? getActiveClasses(category.color)
                      : `${getHoverClasses(category.color)} hover:text-white`
                  } ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    {category.id.charAt(0).toUpperCase() + category.id.slice(1)}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 