"use client"

// React Imports
import { useState } from "react"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { AnimatedCard } from "@/components/AnimatedCard"

type SubCategory = {
  id: string
  href: string
}

const aboutSubCategories: SubCategory[] = [
  {
    id: 'career',
    href: '/about/career'
  },
  {
    id: 'education',
    href: '/about/education'
  },
  {
    id: 'goals',
    href: '/about/goals'
  }
]

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Sub-categories List */}
          <div className="w-full">
            <div className="space-y-2">
              {aboutSubCategories.map((category) => (
                <AnimatedCard
                  key={category.id}
                  id={category.id}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
