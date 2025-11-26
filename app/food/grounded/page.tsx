"use client"

// Component Imports
import { NavBar } from "@/components/NavBar";

export default function GroundedByGuPage() {
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
                  Grounded is my home-based pop-up coffee shop where community comes first. Every cup is free, every conversation matters, and every visitor becomes part of the family. It's where strangers become friends over carefully crafted drinks and homemade bites in the most welcoming space I know, my own home.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
