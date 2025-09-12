// Component Imports  
import { NavBar } from "@/components/NavBar"
import { AnimatedCard } from "@/components/AnimatedCard"

type SubCategory = {
  id: string
  href: string
}

const founderSubCategories: SubCategory[] = [
  {
    id: 'stellar effects',
    href: '/founder/stellar-effects'
  },
  {
    id: 'highs lows and rainbows',
    href: '/founder/highs-lows-and-rainbows'
  }
]

export default function FounderPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Sub-categories List */}
          <div className="w-full">
            <div className="space-y-2">
              {founderSubCategories.map((category) => (
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
