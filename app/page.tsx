import { NavBar } from "@/components/NavBar"

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto p-4">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
        </main>
      </div>
    </>
  );
}
