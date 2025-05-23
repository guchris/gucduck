"use client"

// React Imports
import React from "react"

// Next Imports
import Link from "next/link"

// Shadcn Imports
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar"

function useCurrentDateTime() {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const date = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return { date, time };
}

export function NavBar() {
  const { date, time } = useCurrentDateTime();
  return (
    <div className="p-4">
      <Menubar className="flex w-full items-center">
        <Link href="/" className="text-base font-bold px-3 select-none cursor-pointer hover:opacity-80 transition-opacity" style={{ textDecoration: 'none', color: 'inherit' }}>
          gucduck
        </Link>
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>Me</MenubarItem>
            <MenubarItem>Goals</MenubarItem>
            <MenubarItem>Career</MenubarItem>
            <MenubarItem>Education</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Contact</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email</MenubarItem>
                <MenubarItem>LinkedIn</MenubarItem>
                <MenubarItem>Instagram</MenubarItem>
                <MenubarItem>TikTok</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Brews & Bites</MenubarItem>
            <MenubarItem disabled>Chris' Corner</MenubarItem>
            <MenubarItem>Etsy: HLR</MenubarItem>
            <MenubarItem>Happns</MenubarItem>
            <MenubarItem>Stellar Effects</MenubarItem>
            <MenubarItem>Worn</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Food</MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/food/sunday-suppers">Sunday Suppers</Link>
            </MenubarItem>
            <MenubarItem>Restaurant Reviews</MenubarItem>
            <MenubarItem>Recipes</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <span className="flex-1" />
        <span className="text-sm px-3 select-none text-right hidden sm:inline">
          {date} {time}
        </span>
      </Menubar>
    </div>
  );
} 