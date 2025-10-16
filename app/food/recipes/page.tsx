"use client"

// Component Imports
import { NavBar } from "@/components/NavBar";

export default function RecipesPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          
          <main className="flex-1 pt-6">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="space-y-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  A collection of staple recipes that I've perfected over time. These are the dishes I return to again and again - simple, reliable, and always delicious. From quick weeknight meals to weekend projects, these recipes form the foundation of my cooking repertoire.
                </p>
              </div>
            </div>

            {/* Placeholder Content */}
            <div className="space-y-8">
              <div className="border border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Coming Soon</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Step-by-step recipes with photos and cooking tips will be added here.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
