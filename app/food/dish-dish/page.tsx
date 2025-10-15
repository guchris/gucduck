"use client"

// React Imports
import { useEffect, useState } from "react";

// Component Imports
import { NavBar } from "@/components/NavBar";
import { SubNav } from "@/components/SubNav";

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Lucide Imports
import { ArrowDown, ArrowUp } from "lucide-react";

const foodSubNavItems = [
  { id: "dish-dish", label: "DishDish", href: "/food/dish-dish" },
  { id: "grounded", label: "Grounded", href: "/food/grounded" },
  { id: "recipes", label: "Recipes", href: "/food/recipes" }
];

type DishScores = {
  [category: string]: { [index: string]: number };
};

type Dish = {
  id: string;
  name: string;
  date: string;
  scores: DishScores;
  images?: string[];
};

function sumScores(scores: DishScores): number {
  if (!scores) return 0;
  return Object.values(scores).reduce((total, category) => {
    const values = Object.values(category).map(Number);
    const n = values.length;
    if (n === 0) return total;
    // Normalize to 2 people
    const normalized = values.reduce((a, b) => a + b, 0) * (2 / n);
    return total + normalized;
  }, 0);
}

function getCategoryScores(scores: DishScores) {
  if (!scores) return {};
  
  const categoryTotals: { [key: string]: number } = {};
  
  Object.entries(scores).forEach(([category, categoryScores]) => {
    const values = Object.values(categoryScores).map(Number);
    const n = values.length;
    if (n > 0) {
      // Normalize to 2 people
      const normalized = values.reduce((a, b) => a + b, 0) * (2 / n);
      categoryTotals[category] = normalized;
    }
  });
  
  return categoryTotals;
}

function getIndividualScores(scores: DishScores) {
  if (!scores) return {};
  
  const individualScores: { [key: string]: { chris: number | null, anjuli: number | null } } = {};
  
  Object.entries(scores).forEach(([category, categoryScores]) => {
    const values = Object.values(categoryScores).map(Number);
    individualScores[category] = {
      chris: values[0] || null,
      anjuli: values[1] || null
    };
  });
  
  return individualScores;
}

export default function DishDishPage() {
  // State for fetched dishes and loading indicator
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortDesc, setSortDesc] = useState(true);
  const [sortBy, setSortBy] = useState<'date' | 'score'>('date');
  const [search, setSearch] = useState("");

  function sortDishes(dishes: Dish[], by: 'date' | 'score', desc: boolean) {
    return [...dishes].sort((a, b) => {
      if (by === 'date') {
        const [am, ad, ay] = a.date.split('/').map(Number);
        const [bm, bd, byy] = b.date.split('/').map(Number);
        const aDate = new Date(ay, am - 1, ad);
        const bDate = new Date(byy, bm - 1, bd);
        return desc ? bDate.getTime() - aDate.getTime() : aDate.getTime() - bDate.getTime();
      } else {
        const aScore = sumScores(a.scores);
        const bScore = sumScores(b.scores);
        return desc ? bScore - aScore : aScore - bScore;
      }
    });
  }

  useEffect(() => {
    async function fetchDishes() {
      const querySnapshot = await getDocs(collection(db, "dish-dish"));
      const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Dish));
      setDishes(sortDishes(fetched, sortBy, sortDesc));
      setLoading(false);
    }
    fetchDishes();
  }, []);

  // When sortDesc or sortBy changes, re-sort
  useEffect(() => {
    setDishes((prev) => sortDishes(prev, sortBy, sortDesc));
  }, [sortDesc, sortBy]);

  // Filtered dishes by search
  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  // Helper: get first paragraph from a string
  function getFirstParagraph(text: string) {
    return text.split(/<br\s*\/?><br\s*\/?/)[0];
  }

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
                  Dish Dish is me and my best friend Anjuli's favorite tradition. Every so often, we pick a recipe from social media, split the grocery list, and meet up at my place to cook, catch up, and laugh about everything and nothing. It's not just about the food (though that part's great) - it's our way of making time for each other. We always snap pics of our creations, eat way too much, and then rate the dish like we're judges on a cooking show.
                </p>
              </div>
            </div>

            {/* Scoring System Section */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white">Scoring System</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Taste */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-yellow-500 hover:text-white">
                            Taste
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">10 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The overall flavor profile and how enjoyable the dish is. Does the food taste good? Does the dish come together?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Appearance */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-pink-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-pink-500 hover:text-white">
                            Appearance
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The visual appeal and arrangement of the dish. Is the food Instagram-worthy? Does the dish come together?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Effort */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-green-500 hover:text-white">
                            Effort
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The dedication and skill required in preparing the dish. How long did the dish demand? How labor-intensive or intricate was the process?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Misc */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-purple-500 hover:text-white">
                            Misc
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The memorability and creativity of the dish. Is the food made in a creative way? Is it a unique cooking experience?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Sort Controls */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white">Dishes</h3>
              </div>
              
              <div className="flex flex-row gap-2 mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
                  placeholder="Search dishes..."
                  className="flex-1 border border-gray-200 dark:border-gray-700 rounded-none py-2 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors bg-white dark:bg-black"
          />
          <button
                  className={`border border-gray-200 dark:border-gray-700 rounded-none py-2 px-3 text-xs font-medium hover:bg-yellow-500 hover:text-white transition-colors flex items-center justify-center gap-2 ${sortBy === 'date' ? 'bg-yellow-500 text-white' : ''}`}
            type="button"
            onClick={() => {
              if (sortBy === 'date') {
                setSortDesc((prev) => !prev);
              } else {
                setSortBy('date');
                setSortDesc(true);
              }
            }}
          >
                  {sortDesc && sortBy === 'date' ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
            <span>Date</span>
          </button>
          <button
                  className={`border border-gray-200 dark:border-gray-700 rounded-none py-2 px-3 text-xs font-medium hover:bg-yellow-500 hover:text-white transition-colors flex items-center justify-center gap-2 ${sortBy === 'score' ? 'bg-yellow-500 text-white' : ''}`}
            type="button"
            onClick={() => {
              if (sortBy === 'score') {
                setSortDesc((prev) => !prev);
              } else {
                setSortBy('score');
                setSortDesc(true);
              }
            }}
          >
                  {sortDesc && sortBy === 'score' ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
            <span>Score</span>
          </button>
        </div>
            </div>

            {/* Dishes List */}
            <div className="mb-8">
            {loading ? (
                <div className="text-center py-4 text-xs text-gray-500 dark:text-gray-400">Loading...</div>
            ) : filteredDishes.length === 0 ? (
                <div className="text-center py-4 text-xs text-gray-500 dark:text-gray-400">No dishes found.</div>
              ) : (
                <div className="w-full space-y-6">
                  {filteredDishes.map((dish) => {
                    const categoryScores = getCategoryScores(dish.scores);
                    const individualScores = getIndividualScores(dish.scores);
                    const totalScore = sumScores(dish.scores);
                    
                    return (
                      <div key={dish.id} className="group">
                        <div className="flex items-start">
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            {/* Title and Total Score */}
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-yellow-500 hover:text-white">
                                {dish.name}
                              </h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{dish.date}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                                {totalScore.toFixed(2)} pts total
                              </span>
                            </div>
                            
                            {/* Score Breakdown Table */}
                            <div className="mb-3">
                              <div className="flex items-start gap-4">
                                {/* Image if available */}
                                {Array.isArray(dish.images) && dish.images.length > 0 && (
                                  <div className="flex-shrink-0">
                    <img
                      src={dish.images[0]}
                      alt={dish.name}
                                      className="w-32 h-32 object-cover rounded border border-gray-200 dark:border-gray-700"
                                    />
                                  </div>
                                )}
                                
                                {/* Score Categories */}
                                <div className="grid grid-cols-2 gap-2 text-xs flex-1">
                                  {/* Taste */}
                                  <div className="p-2 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-1">
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Taste</span>
                                        <span className="font-mono text-gray-900 dark:text-white">
                                          {categoryScores.taste ? categoryScores.taste.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Chris</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.taste?.chris ? individualScores.taste.chris.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Anjuli</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.taste?.anjuli ? individualScores.taste.anjuli.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Appearance */}
                                  <div className="p-2 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-1">
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">App</span>
                                        <span className="font-mono text-gray-900 dark:text-white">
                                          {categoryScores.appearance ? categoryScores.appearance.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Chris</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.appearance?.chris ? individualScores.appearance.chris.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Anjuli</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.appearance?.anjuli ? individualScores.appearance.anjuli.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Effort */}
                                  <div className="p-2 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-1">
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Effort</span>
                                        <span className="font-mono text-gray-900 dark:text-white">
                                          {categoryScores.effort ? categoryScores.effort.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Chris</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.effort?.chris ? individualScores.effort.chris.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Anjuli</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.effort?.anjuli ? individualScores.effort.anjuli.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Misc */}
                                  <div className="p-2 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-1">
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Misc</span>
                                        <span className="font-mono text-gray-900 dark:text-white">
                                          {categoryScores.misc ? categoryScores.misc.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Chris</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.misc?.chris ? individualScores.misc.chris.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Anjuli</span>
                                        <span className="font-mono text-gray-500 dark:text-gray-400">
                                          {individualScores.misc?.anjuli ? individualScores.misc.anjuli.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                      </div>
                      </div>
                    </div>
                  </div>
                    );
                  })}
                </div>
              )}
              </div>

      </main>
    </div>
      </div>
    </>
  );
} 