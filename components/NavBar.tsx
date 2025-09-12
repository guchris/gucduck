"use client"

// React Imports
import React, { useEffect, useState } from "react"

// Next Imports
import Link from "next/link"
import { usePathname } from "next/navigation"

// Shadcn Imports
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar"
import { Sun, Moon, ChevronRight } from "lucide-react"

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
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On mount, check the current theme
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        setIsDark(false);
      } else {
        html.classList.add("dark");
        setIsDark(true);
      }
    }
  };

  // Generate breadcrumb from pathname
  const generateBreadcrumb = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumb = [];
    
    // Add home
    breadcrumb.push({ name: 'gucduck', href: '/' });
    
    // Add path segments
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.toLowerCase();
      breadcrumb.push({ name, href: currentPath });
    });
    
    return breadcrumb;
  };

  const breadcrumb = generateBreadcrumb();

  return (
    <div className="flex w-full h-12 border border-dashed border-gray-300">
      <div className="h-full flex items-stretch">
        {/* Breadcrumb Navigation */}
        {breadcrumb.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-center h-full px-4 text-base font-bold cursor-pointer transition-colors duration-200 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white border-r border-dashed border-gray-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex-1" />
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center h-full px-4 text-base font-bold cursor-pointer transition-colors duration-200 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white border-l border-dashed border-gray-300 bg-white dark:bg-black rounded-none"
        aria-label="Toggle dark mode"
        type="button"
      >
        {isDark ? (
          <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </button>
    </div>
  );
} 