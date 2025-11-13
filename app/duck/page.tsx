"use client"

import { NavBar } from "@/components/NavBar"
import { useState, useEffect } from "react"
import { Duck } from "@/lib/types"
import { getAllDucks } from "@/lib/duckStorage"

export default function DuckPage() {
  const [ducks, setDucks] = useState<Duck[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const allDucks = getAllDucks()
    // Sort by creation date, newest first
    const sorted = allDucks.sort((a, b) => b.createdAt - a.createdAt)
    setDucks(sorted)
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="w-full px-6">
        <NavBar />
        <main className="flex-1">
          <div className="mb-8">
            <h3 className="text-xs font-medium text-gray-900 dark:text-white">Duck Gallery</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {ducks.length} duck{ducks.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {ducks.map((duck) => (
                <div
                  key={duck.id}
                  className="aspect-square border border-gray-200 dark:border-gray-700 p-2 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors"
                >
                  <img
                    src={duck.imageData}
                    alt="Duck"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
