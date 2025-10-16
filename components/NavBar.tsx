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
  subCategories?: SubCategory[]
}

type SubCategory = {
  id: string
  label: string
  href: string
}

const mainCategories: MainCategory[] = [
  {
    id: 'about',
    href: '/about',
    color: 'blue',
    number: 1,
    subCategories: [
      { id: 'career', label: 'Career', href: '/about/career' },
      { id: 'education', label: 'Education', href: '/about/education' },
      { id: 'goals', label: 'Goals', href: '/about/goals' }
    ]
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
    number: 3,
    subCategories: [
      { id: 'dish-dish', label: 'DishDish', href: '/food/dish-dish' },
      { id: 'grounded', label: 'Grounded', href: '/food/grounded' },
      { id: 'recipes', label: 'Recipes', href: '/food/recipes' }
    ]
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
  const [dotsAnimated, setDotsAnimated] = useState(false)
  const colors = ['blue', 'pink', 'yellow', 'green', 'purple', 'orange', 'gray', 'black']
  const pathname = usePathname()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Trigger dots animation on mount
    const timer = setTimeout(() => {
      setDotsAnimated(true)
    }, 50)
    
    return () => clearTimeout(timer)
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
          <div className={`w-3 h-3 rounded-full transition-all duration-500 ${getColorClasses(colors[currentColorIndex])} group-hover:scale-110`}></div>
          <div className={`text-xs font-medium transition-all duration-200 ${getHoverClasses(colors[currentColorIndex])} hover:text-white -mt-0.5`}>
            Chris Gu
          </div>
        </Link>

        {/* Right: Colored navigation dots */}
        <div className="flex flex-col items-end">
          {/* Main Navigation */}
          <div className="transform rotate-90 origin-top-left -mr-16">
            <div className="flex flex-col items-start">
               {mainCategories.slice().reverse().map((category, index) => {
                 const isActive = pathname === category.href || (category.subCategories && category.subCategories.some(sub => pathname === sub.href))
                 const animationDelay = index * 50 // Stagger animation by 50ms per dot
                 return (
                   <Link
                     key={category.id}
                     href={category.href}
                     className={`flex items-center gap-2 group transition-all duration-150 ${
                       dotsAnimated 
                         ? 'opacity-100 translate-y-0' 
                         : 'opacity-0 -translate-y-5'
                     }`}
                     style={{
                       transitionDelay: `${animationDelay}ms`,
                       transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                     }}
                   >
                     <div className={`w-3 h-3 rounded-full ${getColorClasses(category.color)} transition-transform duration-200 group-hover:scale-110`}></div>
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
        
        {/* Sub-Navigation - Left aligned within overall navbar */}
        {(() => {
          const activeCategory = mainCategories.find(category => 
            pathname === category.href || (category.subCategories && category.subCategories.some(sub => pathname === sub.href))
          )
          
          if (activeCategory && activeCategory.subCategories && isExpanded) {
            return (
              <div className="absolute bottom-0 left-0">
                <div className="flex items-center gap-1">
                  {activeCategory.subCategories.map((subCategory) => {
                    const isSubActive = pathname === subCategory.href
                    return (
                      <Link
                        key={subCategory.id}
                        href={subCategory.href}
                        className="group transition-all duration-200"
                      >
                        <div className={`text-xs font-medium tracking-wide transition-all duration-200 ${
                          isSubActive 
                            ? getActiveClasses(activeCategory.color)
                            : `${getHoverClasses(activeCategory.color)} hover:text-white`
                        }`}>
                          {subCategory.label}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          }
          return null
        })()}
      </div>
    </div>
  );
} 