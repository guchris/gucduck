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
  const [isVisible, setIsVisible] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>(images);

  useEffect(() => {
    // Shuffle images array on client side
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledImages(shuffleArray(images));

    // Show images after nav is displayed (300ms delay)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <main className="flex-1">

            {/* Masonry Grid Layout */}
            <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-6 gap-4 space-y-4">
              {shuffledImages.map((image, index) => (
                <div 
                  key={image} 
                  className={`bg-white dark:bg-gray-900 mb-4 overflow-hidden break-inside-avoid group cursor-pointer rounded-lg transition-opacity duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
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
              ))}
            </div>

          </main>
        </div>
      </div>
    </>
  );
}