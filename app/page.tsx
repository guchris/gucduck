"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

// Images data
const images = [
  "/images/home/portfolio-1.gif",
  "/images/home/portfolio-2.jpg",
  "/images/home/portfolio-3.gif",
  "/images/home/portfolio-4.gif",
  "/images/home/portfolio-5.jpg",
  "/images/home/portfolio-6.jpg",
  "/images/home/portfolio-7.jpg"
]


export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <main className="flex-1">

            {/* Masonry Grid Layout */}
            <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-6 gap-4 space-y-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 mb-4 overflow-hidden break-inside-avoid"
                >
                  {image.endsWith('.gif') ? (
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  )}
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>
    </>
  );
}