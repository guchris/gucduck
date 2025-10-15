"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import Link from "next/link"

export default function FoodPage() {
  const getHoverClasses = (color: string) => {
    const hoverMap: {[key: string]: string} = {
      'yellow': 'hover:bg-yellow-500 hover:text-white'
    }
    return hoverMap[color] || 'hover:bg-yellow-500 hover:text-white'
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              </div>
            </div>

            {/* Navigation Options */}
            <div className="w-full space-y-1">
              <Link href="/food/dish-dish" className="group">
                <div className="flex items-start gap-2">
                  {/* Square */}
                  <div className="w-3 h-3 bg-yellow-500 flex-shrink-0 mt-0.5"></div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xs font-medium transition-all duration-200 text-black dark:text-white ${getHoverClasses('yellow')}`}>
                      dish dish
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/food/recipes" className="group">
                <div className="flex items-start gap-2">
                  {/* Square */}
                  <div className="w-3 h-3 bg-yellow-500 flex-shrink-0 mt-0.5"></div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xs font-medium transition-all duration-200 text-black dark:text-white ${getHoverClasses('yellow')}`}>
                      recipes
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/food/reviews" className="group">
                <div className="flex items-start gap-2">
                  {/* Square */}
                  <div className="w-3 h-3 bg-yellow-500 flex-shrink-0 mt-0.5"></div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xs font-medium transition-all duration-200 text-black dark:text-white ${getHoverClasses('yellow')}`}>
                      reviews
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
