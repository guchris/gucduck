// Component Imports  
import { NavBar } from "@/components/NavBar"
import { AnimatedCard } from "@/components/AnimatedCard"

type SubCategory = {
  id: string
  href: string
}

const fashionSubCategories: SubCategory[] = [
  {
    id: 'closet',
    href: '/fashion/closet'
  },
  {
    id: 'outfits',
    href: '/fashion/outfits'
  }
]

export default function FashionPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Sub-categories List */}
          <div className="w-full">
            <div className="space-y-2">
              {fashionSubCategories.map((category) => (
                <AnimatedCard
                  key={category.id}
                  id={category.id}
                  href={category.href}
                >
                  {category.id}
                </AnimatedCard>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
