"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { SubNav } from "@/components/SubNav"

const foodSubNavItems = [
  { id: "dish-dish", label: "DishDish", href: "/food/dish-dish" },
  { id: "grounded", label: "Grounded", href: "/food/grounded" },
  { id: "recipes", label: "Recipes", href: "/food/recipes" }
]

export default function FoodPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <main className="flex-1">
            <SubNav items={foodSubNavItems} color="yellow" />
          </main>
        </div>
      </div>
    </>
  );
}
