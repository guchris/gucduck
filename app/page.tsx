"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

// Mock project data
const mockProjects = [
  {
    id: 1,
    title: "New Portfolio Website",
    category: "about",
    description: "Launched a new personal portfolio website showcasing my work across design, development, and creative projects.",
    timestamp: new Date("2024-12-15T10:30:00Z")
  },
  {
    id: 2,
    title: "Summer Style Collection",
    category: "fashion",
    description: "Curated a collection of summer outfits featuring sustainable fashion and vintage finds from local boutiques.",
    timestamp: new Date("2024-12-14T15:45:00Z")
  },
  {
    id: 3,
    title: "Ramen Masterclass",
    category: "food",
    description: "Learned the art of authentic ramen making from a master chef in Tokyo. Perfecting the balance of umami flavors.",
    timestamp: new Date("2024-12-13T09:20:00Z")
  },
  {
    id: 4,
    title: "Startup Pitch Deck",
    category: "founder",
    description: "Designed and presented a comprehensive pitch deck for our new AI-powered design tool. Secured seed funding round.",
    timestamp: new Date("2024-12-12T14:15:00Z")
  },
  {
    id: 5,
    title: "Ambient Soundscape",
    category: "music",
    description: "Released a new ambient track inspired by city sounds and nature. Available on all streaming platforms.",
    timestamp: new Date("2024-12-11T16:30:00Z")
  },
  {
    id: 6,
    title: "Kyoto Temple Tour",
    category: "travel",
    description: "Explored the hidden temples of Kyoto during cherry blossom season. Captured the serene beauty of traditional architecture.",
    timestamp: new Date("2024-12-10T11:00:00Z")
  },
  {
    id: 7,
    title: "Duck Pond Discovery",
    category: "duck",
    description: "Found the most adorable duck family in Central Park. The ducklings were learning to swim while their parents watched proudly.",
    timestamp: new Date("2024-12-09T13:45:00Z")
  },
  {
    id: 8,
    title: "3D Art Experiment",
    category: "other",
    description: "Experimented with 3D modeling and digital sculpture. Created abstract forms that explore the relationship between geometry and emotion.",
    timestamp: new Date("2024-12-08T08:30:00Z")
  }
]

const getCategoryColor = (category: string) => {
  const colorMap: { [key: string]: string } = {
    'about': 'bg-blue-500',
    'fashion': 'bg-pink-500',
    'food': 'bg-yellow-500',
    'founder': 'bg-green-500',
    'music': 'bg-purple-500',
    'travel': 'bg-orange-500',
    'duck': 'bg-gray-500',
    'other': 'bg-black'
  }
  return colorMap[category] || 'bg-gray-500'
}

const getCategoryTextColor = (category: string) => {
  const colorMap: { [key: string]: string } = {
    'about': 'text-blue-600',
    'fashion': 'text-pink-600',
    'food': 'text-yellow-600',
    'founder': 'text-green-600',
    'music': 'text-purple-600',
    'travel': 'text-orange-600',
    'duck': 'text-gray-600',
    'other': 'text-black'
  }
  return colorMap[category] || 'text-gray-600'
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xs font-medium text-gray-900 dark:text-white">Recent Updates (Mock)</h2>
              </div>
            </div>

            {/* Main Content List */}
            <div className="w-full space-y-1">
              {mockProjects.map((project) => (
                <div key={project.id} className="group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Dot */}
                    <div className={`w-3 h-3 rounded-full ${getCategoryColor(project.category)} flex-shrink-0 mt-1`}></div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title and Timestamp */}
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {project.timestamp.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true
                          })}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>
    </>
  );
}