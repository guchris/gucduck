"use client"

// React Imports
import { useEffect, useState } from "react";

// Component Imports
import { NavBar } from "@/components/NavBar";

// Shadcn Imports
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Lucide Imports
import { Plus, Minus, ArrowDown, ArrowUp } from "lucide-react";

type DishScores = {
  [category: string]: { [index: string]: number };
};

type Dish = {
  id: string;
  name: string;
  date: string;
  scores: DishScores;
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

export default function DishDishPage() {
  // State for fetched dishes and loading indicator
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  // Collapse state for mobile cards
  const [introOpen, setIntroOpen] = useState(false);
  const [scoringOpen, setScoringOpen] = useState(false);
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

  // Card descriptions as strings for easy splitting
  const introDescription = `Dish Dish is me and my best friend Anjuli's favorite tradition. Every so often, we pick a recipe from social media, split the grocery list, and meet up at my place to cook, catch up, and laugh about everything and nothing.<br /><br />It's not just about the food (though that part's great) — it's our way of making time for each other. We always snap pics of our creations, eat way too much, and then rate the dish like we're judges on a cooking show.`;
  const scoringDescription = `A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.`;

  return (
    <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="flex-1 flex flex-col items-center gap-4">
        {/* Dish Dish Card */}
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardHeader className="p-4 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-left">Dish Dish</CardTitle>
            </div>
            <button
              aria-label={introOpen ? 'Collapse' : 'Expand'}
              onClick={() => setIntroOpen((open) => !open)}
              className="p-1 hover:bg-muted transition-colors"
              style={{ margin: 0 }}
              type="button"
            >
              {introOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
          </CardHeader>
          <CardContent className="px-4 pt-0 pb-4">
            <CardDescription className="text-left">
              <span dangerouslySetInnerHTML={{ __html: introOpen ? introDescription : getFirstParagraph(introDescription) }} />
            </CardDescription>
            {introOpen && (
              <></> /* No extra content for intro card */
            )}
          </CardContent>
        </Card>
        {/* Scoring System Card */}
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardHeader className="p-4 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-left">Scoring System</CardTitle>
            </div>
            <button
              aria-label={scoringOpen ? 'Collapse' : 'Expand'}
              onClick={() => setScoringOpen((open) => !open)}
              className="p-1 hover:bg-muted transition-colors"
              style={{ margin: 0 }}
              type="button"
            >
              {scoringOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
          </CardHeader>
          <CardContent className="px-4 pt-0 pb-4">
            <CardDescription className="text-sm text-left">
              {scoringDescription}
            </CardDescription>
            {scoringOpen && (
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                {/* Scoring grid (copied from desktop) */}
                <Card className="rounded-none shadow-none border-dashed border-gray-300">
                  <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      Taste <Badge variant="secondary">10 pts</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 pb-4 px-4">
                    <CardDescription>
                      The overall flavor profile and how enjoyable the dish is. Does the food taste good? Does the dish come together?
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="rounded-none shadow-none border-dashed border-gray-300">
                  <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      Appearance <Badge variant="secondary">5 pts</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 pb-4 px-4">
                    <CardDescription>
                      The visual appeal and arrangement of the dish. Is the food Instagram-worthy? Does the dish come together?
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="rounded-none shadow-none border-dashed border-gray-300">
                  <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      Effort <Badge variant="secondary">5 pts</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 pb-4 px-4">
                    <CardDescription>
                      The dedication and skill required in preparing the dish. How long did the dish demand? How labor-intensive or intricate was the process?
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="rounded-none shadow-none border-dashed border-gray-300">
                  <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      Misc <Badge variant="secondary">5 pts</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 pb-4 px-4">
                    <CardDescription>
                      The memorability and creativity of the dish. Is the food made in a creative way? Is it a unique cooking experience?
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
        {/* Search and Sort Row */}
        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-1/2 border border-dashed border-gray-300 rounded-none py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-muted transition-colors"
          />
          <button
            className={`w-1/4 border border-dashed border-gray-300 rounded-none py-2 text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2 ${sortBy === 'date' ? 'bg-muted' : ''}`}
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
            {sortDesc && sortBy === 'date' ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
            <span>Date</span>
          </button>
          <button
            className={`w-1/4 border border-dashed border-gray-300 rounded-none py-2 text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2 ${sortBy === 'score' ? 'bg-muted' : ''}`}
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
            {sortDesc && sortBy === 'score' ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
            <span>Score</span>
          </button>
        </div>
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardContent className="p-0">
            {/* Loading and empty states */}
            {loading ? (
              <div className="text-center py-4 text-muted-foreground">Loading...</div>
            ) : filteredDishes.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">No dishes found.</div>
            ) : filteredDishes.map((dish, i) => (
              <div
                key={dish.id}
                className={[
                  "flex items-start transition-colors duration-200 cursor-pointer group",
                  i !== filteredDishes.length - 1 && "border-b border-dashed border-gray-300",
                  "hover:bg-black hover:text-white"
                ].filter(Boolean).join(" ")}
              >
                {/* Image placeholder and content */}
                <div className="flex flex-row items-center gap-x-4 flex-1 min-w-0">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-800 flex-shrink-0 group-hover:bg-white/20 transition-colors duration-200" />
                  <div className="flex flex-col justify-center min-w-0 w-full mr-4">
                    <div className="font-semibold text-base truncate">{dish.name}</div>
                    <div className="flex flex-row items-center mt-1 w-full">
                      <div className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-200 truncate">
                        {dish.date}
                      </div>
                      <div className="flex-1" />
                      <div className="text-right font-semibold text-sm tabular-nums ml-4">
                        {sumScores(dish.scores).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 