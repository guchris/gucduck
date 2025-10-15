"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"
import { SubNav } from "@/components/SubNav"

const aboutSubNavItems = [
  { id: "career", label: "Career", href: "/about/career" },
  { id: "education", label: "Education", href: "/about/education" },
  { id: "goals", label: "Goals", href: "/about/goals" }
]

export default function GoalsPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          <SubNav items={aboutSubNavItems} color="blue" />
        </div>
      </div>
    </>
  );
}
