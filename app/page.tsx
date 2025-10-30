"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { useState, useEffect } from "react"

// Images data
const images = [
  "/images/home/portfolio-1.gif",
  "/images/home/portfolio-2.jpg",
  "/images/home/portfolio-3.gif",
  "/images/home/portfolio-4.gif",
  "/images/home/portfolio-5.gif",
  "/images/home/portfolio-6.gif",
  "/images/home/portfolio-7.jpg",
  "/images/home/portfolio-8.jpg",
  "/images/home/portfolio-9.gif",
  "/images/home/portfolio-10.gif",
  "/images/home/portfolio-11.jpg"
]


export default function Home() {
  const [imageDelays, setImageDelays] = useState<number[]>([]);

  useEffect(() => {
    // Generate random delays only on client side
    const delays = images.map(() => Math.random() * 2000);
    setImageDelays(delays);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <main className="flex-1">

            {/* Masonry Grid Layout */}
            <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-6 gap-4 space-y-4">
              {images.map((image, index) => {
                const randomDelay = imageDelays[index] || 0;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-900 mb-4 overflow-hidden break-inside-avoid group cursor-pointer rounded-lg opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${randomDelay}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {image.endsWith('.gif') ? (
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                );
              })}
            </div>

          </main>
        </div>
      </div>
    </>
  );
}