"use client"

// Component Imports
import { NavBar } from "@/components/NavBar";
import { SubNav } from "@/components/SubNav";

const foodSubNavItems = [
  { id: "dish-dish", label: "DishDish", href: "/food/dish-dish" },
  { id: "grounded", label: "Grounded", href: "/food/grounded" },
  { id: "recipes", label: "Recipes", href: "/food/recipes" }
];

export default function GroundedByGuPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <SubNav items={foodSubNavItems} color="yellow" />
          
          <main className="flex-1 pt-6">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="space-y-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Grounded is my home-based pop-up coffee shop where community comes first. Every cup is free, every conversation matters, and every visitor becomes part of the family. It's where strangers become friends over carefully crafted drinks and homemade bites in the most welcoming space I know, my own home.
                </p>
              </div>
            </div>

            {/* Placeholder Content */}
            <div className="space-y-8">
              <div className="border border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Coming Soon</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Grounded v0-v6 will be added here.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
