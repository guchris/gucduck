// Component Imports  
import { NavBar } from "@/components/NavBar"
import { AnimatedCard } from "@/components/AnimatedCard"

type MainCategory = {
  id: string
  href: string
  color: string
}

const mainCategories: MainCategory[] = [
  {
    id: 'about',
    href: '/about',
    color: 'blue'
  },
  {
    id: 'fashion',
    href: '/fashion',
    color: 'pink'
  },
  {
    id: 'food',
    href: '/food',
    color: 'yellow'
  },
  {
    id: 'founder',
    href: '/founder',
    color: 'green'
  },
  {
    id: 'music',
    href: '/music',
    color: 'purple'
  },
  {
    id: 'photography',
    href: '/photography',
    color: 'gray'
  },
  {
    id: 'travel',
    href: '/travel',
    color: 'orange'
  },
  {
    id: 'other',
    href: '/other',
    color: 'black'
  }
]

export default function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Main Categories List */}
          <div className="w-full">
            <div className="space-y-2">
              {mainCategories.map((category) => (
                <AnimatedCard
                  key={category.id}
                  id={category.id}
                  href={category.href}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
