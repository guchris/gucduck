"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FoodPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to first sub-tab (dish-dish) when food page is accessed
    router.replace('/food/dish-dish')
  }, [router])

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
        </div>
      </div>
    </>
  );
}
