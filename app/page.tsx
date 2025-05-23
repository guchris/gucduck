import Image from "next/image";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="flex-1 flex items-center justify-center">
      </main>
    </div>
  );
}
