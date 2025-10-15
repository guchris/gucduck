"use client"

// React Imports
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SubNavItem = {
  id: string
  label: string
  href: string
}

type SubNavProps = {
  items: SubNavItem[]
  color?: string
}

export function SubNav({ items, color = "yellow" }: SubNavProps) {
  const pathname = usePathname()

  const getHoverClasses = (color: string) => {
    const colorMap: {[key: string]: string} = {
      'blue': 'hover:bg-blue-500 hover:text-white',
      'pink': 'hover:bg-pink-500 hover:text-white', 
      'yellow': 'hover:bg-yellow-500 hover:text-white',
      'green': 'hover:bg-green-500 hover:text-white',
      'purple': 'hover:bg-purple-500 hover:text-white',
      'orange': 'hover:bg-orange-500 hover:text-white',
      'gray': 'hover:bg-gray-500 hover:text-white',
      'black': 'hover:bg-black hover:text-white'
    }
    return colorMap[color] || 'hover:bg-yellow-500 hover:text-white'
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
    return activeMap[color] || 'bg-yellow-500 text-white'
  }

  return (
    <>
      {/* Header */}
      <div className="mb-0">
        <div className="border-t border-gray-200 dark:border-gray-700">
        </div>
      </div>

      {/* Connected Tag Navigation */}
      <div className="w-full">
        <div className="flex flex-wrap items-center">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.id} href={item.href} className="group">
                <div className={`text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? getActiveClasses(color)
                    : `text-gray-500 dark:text-gray-400 ${getHoverClasses(color)}`
                }`}>
                  {item.label}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
