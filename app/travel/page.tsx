// Component Imports  
import { NavBar } from "@/components/NavBar"
import { AnimatedCard } from "@/components/AnimatedCard"

type SubCategory = {
  id: string
  href: string
}

const travelSubCategories: SubCategory[] = [
  {
    id: 'checklist',
    href: '/travel/checklist'
  },
  {
    id: 'guides',
    href: '/travel/guides'
  }
]

export default function TravelPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Sub-categories List */}
          <div className="w-full">
            <div className="space-y-2">
              {travelSubCategories.map((category) => (
                <AnimatedCard
                  key={category.id}
                  id={category.id}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
