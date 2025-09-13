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
    breadcrumb.push({ name: 'gucduck', href: '/', color: null });
    
    // Add path segments
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.toLowerCase();
      
      // Assign colors to main categories
      const categoryColors: {[key: string]: string} = {
        'about': 'blue',
        'fashion': 'pink',
        'food': 'yellow',
        'founder': 'green',
        'music': 'purple',
        'photography': 'gray',
        'travel': 'orange',
        'other': 'black'
      };
      
      const color = categoryColors[name] || null;
      breadcrumb.push({ name, href: currentPath, color });
    });
    
    return breadcrumb;
  };

  const breadcrumb = generateBreadcrumb();

  const getBreadcrumbColorClasses = (color: string | null) => {
    if (!color) {
      return "hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
    }
    
    // Color mappings - only apply colors on hover/interaction
    const colorMap: {[key: string]: string} = {
      'red': 'hover:border-red-500 hover:bg-red-500 hover:text-white dark:hover:border-red-400 dark:hover:bg-red-500 dark:hover:text-white',
      'blue': 'hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:hover:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white',
      'yellow': 'hover:border-yellow-500 hover:bg-yellow-500 hover:text-black dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-black',
      'pink': 'hover:border-pink-500 hover:bg-pink-500 hover:text-white dark:hover:border-pink-400 dark:hover:bg-pink-500 dark:hover:text-white',
      'green': 'hover:border-green-500 hover:bg-green-500 hover:text-white dark:hover:border-green-400 dark:hover:bg-green-500 dark:hover:text-white',
      'purple': 'hover:border-purple-500 hover:bg-purple-500 hover:text-white dark:hover:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-white',
      'gray': 'hover:border-gray-500 hover:bg-gray-500 hover:text-white dark:hover:border-gray-400 dark:hover:bg-gray-500 dark:hover:text-white',
      'orange': 'hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:hover:border-orange-400 dark:hover:bg-orange-500 dark:hover:text-white',
      'white': 'hover:border-gray-400 hover:bg-gray-100 hover:text-black dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
      'black': 'hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black'
    }
    
    return colorMap[color] || "hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
  }

  return (
    <div className="flex w-full h-12 border border-dashed border-gray-300">
      <div className="h-full flex items-stretch">
        {/* Breadcrumb Navigation */}
        {breadcrumb.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-center h-full px-4 text-base font-bold cursor-pointer transition-colors duration-200 border-r border-dashed border-gray-300 ${getBreadcrumbColorClasses(item.color)}`}
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