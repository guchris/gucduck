// Component Imports  
import { NavBar } from "@/components/NavBar"

export default function CareerPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto gap-4 p-4">
        <NavBar />
        <main className="flex-1 flex flex-col items-start gap-4">
          {/* Page Content */}
          <div className="w-full">
            <div className="space-y-4">
              <div className="border border-dashed border-gray-300 p-6">
                <h1 className="text-2xl font-bold mb-4">Career</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  My professional journey, skills, and work experience will be showcased here.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
