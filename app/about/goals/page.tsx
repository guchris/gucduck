"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

// Lucide Imports
import { CheckCircle, Circle, Target } from "lucide-react"

// Goals data
const goals2024 = [
  {
    id: 1,
    text: "Travel to 5 new countries",
    completed: true,
    category: "Travel"
  },
  {
    id: 2,
    text: "Secure a PM role",
    completed: false,
    category: "Career"
  },
  {
    id: 3,
    text: "Fall in love",
    completed: true,
    category: "Personal"
  },
  {
    id: 4,
    text: "Run a 3:30 full marathon",
    completed: false,
    category: "Fitness"
  },
  {
    id: 5,
    text: "Run a 1:40 half marathon",
    completed: false,
    category: "Fitness"
  },
  {
    id: 6,
    text: "Publish Chris' Corner beta",
    completed: true,
    category: "Projects"
  },
  {
    id: 7,
    text: "Publish happns beta",
    completed: true,
    category: "Projects"
  },
  {
    id: 8,
    text: "Publish worn beta",
    completed: true,
    category: "Projects"
  },
  {
    id: 9,
    text: "Sell 100 HLR cards",
    completed: true,
    category: "Business"
  },
  {
    id: 10,
    text: "Release new HLR cards",
    completed: true,
    category: "Business"
  }
]

const goals2025 = [
  {
    id: 1,
    text: "Build and launch Civie beta",
    completed: false,
    category: "Projects"
  },
  {
    id: 2,
    text: "Secure a PM role",
    completed: true,
    category: "Career"
  },
  {
    id: 3,
    text: "Purchase my dream home",
    completed: true,
    category: "Personal"
  },
  {
    id: 4,
    text: "Fall in love",
    completed: true,
    category: "Personal"
  }
]


const getCategoryColor = (category: string) => {
  const colorMap: {[key: string]: string} = {
    'Travel': 'text-blue-600 dark:text-blue-400',
    'Career': 'text-green-600 dark:text-green-400',
    'Personal': 'text-pink-600 dark:text-pink-400',
    'Fitness': 'text-orange-600 dark:text-orange-400',
    'Projects': 'text-purple-600 dark:text-purple-400',
    'Business': 'text-yellow-600 dark:text-yellow-400',
    'Mindset': 'text-indigo-600 dark:text-indigo-400',
    'Creative': 'text-rose-600 dark:text-rose-400',
    'Social': 'text-emerald-600 dark:text-emerald-400'
  }
  return colorMap[category] || 'text-gray-600 dark:text-gray-400'
}

export default function GoalsPage() {
  const completedGoals2024 = goals2024.filter(goal => goal.completed).length
  const totalGoals2024 = goals2024.length
  const completionRate2024 = Math.round((completedGoals2024 / totalGoals2024) * 100)

  const completedGoals2025 = goals2025.filter(goal => goal.completed).length
  const totalGoals2025 = goals2025.length
  const completionRate2025 = Math.round((completedGoals2025 / totalGoals2025) * 100)

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          
          <main className="flex-1 pt-6">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="space-y-4">
                <p className="text-xs text-black dark:text-white leading-relaxed">
                  Setting clear, actionable goals is a powerful way to stay focused and motivated throughout the year. This page serves as a personal roadmap for 2024, outlining the key milestones I aim to achieve. From expanding my horizons through travel to pursuing professional growth, creative expression, and personal fitness, each goal reflects my commitment to continuous improvement and living life with intention. By tracking these goals publicly, I hold myself accountable and invite others to join me on this journey of growth and discovery.
                </p>
              </div>
            </div>

            {/* 2025 Goals */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xs font-medium text-black dark:text-white">2025 Goals</h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {completedGoals2025}/{totalGoals2025} completed ({completionRate2025}%)
                </span>
              </div>

              {/* Goals List */}
              <div className="space-y-2">
                {goals2025.map((goal) => (
                  <div key={goal.id} className="flex items-center gap-3">
                    {/* Completion Icon */}
                    <div className="flex-shrink-0">
                      {goal.completed ? (
                        <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                      ) : (
                        <Circle className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                      )}
                    </div>

                    {/* Goal Text */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-relaxed ${
                        goal.completed 
                          ? 'text-gray-500 dark:text-gray-400 line-through' 
                          : 'text-black dark:text-white'
                      }`}>
                        {goal.text}
                      </p>
                    </div>

                    {/* Category Badge */}
                    <div className={`flex-shrink-0 px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(goal.category)}`}>
                      {goal.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2024 Goals Overview */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xs font-medium text-black dark:text-white">2024 Goals</h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {completedGoals2024}/{totalGoals2024} completed ({completionRate2024}%)
                </span>
              </div>

              {/* Goals List */}
              <div className="space-y-2">
                {goals2024.map((goal) => (
                  <div key={goal.id} className="flex items-center gap-3">
                    {/* Completion Icon */}
                    <div className="flex-shrink-0">
                      {goal.completed ? (
                        <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                      ) : (
                        <Circle className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                      )}
                    </div>

                    {/* Goal Text */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-relaxed ${
                        goal.completed 
                          ? 'text-gray-500 dark:text-gray-400 line-through' 
                          : 'text-black dark:text-white'
                      }`}>
                        {goal.text}
                      </p>
                    </div>

                    {/* Category Badge */}
                    <div className={`flex-shrink-0 px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(goal.category)}`}>
                      {goal.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
