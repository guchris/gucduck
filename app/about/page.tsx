// Component Imports  
import { NavBar } from "@/components/NavBar"

type SubCategory = {
  id: string
  href: string
}

const aboutSubCategories: SubCategory[] = [
  {
    id: 'career',
    href: '/about/career'
  },
  {
    id: 'education',
    href: '/about/education'
  },
  {
    id: 'goals',
    href: '/about/goals'
  }
]

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Sub-categories List */}
          <div className="w-full">
            <div className="space-y-2">
              {aboutSubCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="block w-fit h-12 border border-dashed border-gray-300 transition-all duration-300 cursor-pointer group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 flex items-center"
                >
                  <h3 className="text-base font-bold">
                    {category.id}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
