import { Duck } from "./types"

const STORAGE_KEY = "gucduck_ducks"

export function saveDuck(duck: Duck): void {
  const ducks = getAllDucks()
  ducks.push(duck)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ducks))
}

export function getAllDucks(): Duck[] {
  if (typeof window === "undefined") return []
  
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  
  try {
    const ducks = JSON.parse(stored)
    // Ensure all ducks have a name field (for backwards compatibility)
    return ducks.map((duck: Duck) => ({
      ...duck,
      name: duck.name || "Unnamed Duck"
    }))
  } catch {
    return []
  }
}

export function getDuckById(id: string): Duck | null {
  const ducks = getAllDucks()
  return ducks.find((d) => d.id === id) || null
}

