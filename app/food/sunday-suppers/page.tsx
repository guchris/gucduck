"use client"

// React Imports
import { useEffect, useState } from "react";
import * as React from "react";

// Component Imports
import { NavBar } from "@/components/NavBar";

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// TanStack Table Imports
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// Lucide Imports
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DishScores = {
  [category: string]: { [index: string]: number };
};

type Dish = {
  id: string;
  name: string;
  date: string;
  scores: DishScores;
  images?: string[];
};

function sumScores(scores: DishScores): number {
  if (!scores) return 0;
  return Object.values(scores).reduce((total, category) => {
    const values = Object.values(category).map(Number);
    const n = values.length;
    if (n === 0) return total;
    // Normalize to 2 people
    const normalized = values.reduce((a, b) => a + b, 0) * (2 / n);
    return total + normalized;
  }, 0);
}

function getCategoryScores(scores: DishScores) {
  if (!scores) return {};
  
  const categoryTotals: { [key: string]: number } = {};
  
  Object.entries(scores).forEach(([category, categoryScores]) => {
    const values = Object.values(categoryScores).map(Number);
    const n = values.length;
    if (n > 0) {
      // Normalize to 2 people
      const normalized = values.reduce((a, b) => a + b, 0) * (2 / n);
      categoryTotals[category] = normalized;
    }
  });
  
  return categoryTotals;
}

function getIndividualScores(scores: DishScores) {
  if (!scores) return {};
  
  const individualScores: { [key: string]: { chris: number | null, anjuli: number | null } } = {};
  
  Object.entries(scores).forEach(([category, categoryScores]) => {
    const values = Object.values(categoryScores).map(Number);
    individualScores[category] = {
      chris: values[0] || null,
      anjuli: values[1] || null
    };
  });
  
  return individualScores;
}

function formatDate(dateString: string): string {
  const [month, day, year] = dateString.split('/').map(Number);
  const monthStr = month.toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');
  const yearStr = year.toString().slice(-2);
  return `${monthStr}/${dayStr}/${yearStr}`;
}

const columns: ColumnDef<Dish>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-8 px-2 text-foreground text-xs"
        >
          Name
          <ArrowUpDown className="!h-3 !w-3" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium text-xs">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-8 px-2 text-foreground text-xs"
        >
          Date
          <ArrowUpDown className="!h-3 !w-3" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-xs">{formatDate(row.getValue("date"))}</div>,
    sortingFn: (rowA, rowB) => {
      const a = rowA.getValue("date") as string;
      const b = rowB.getValue("date") as string;
      const [am, ad, ay] = a.split('/').map(Number);
      const [bm, bd, byy] = b.split('/').map(Number);
      const aDate = new Date(ay, am - 1, ad);
      const bDate = new Date(byy, bm - 1, bd);
      return aDate.getTime() - bDate.getTime();
    },
  },
  {
    id: "totalScore",
    accessorFn: (row) => sumScores(row.scores),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-8 px-2 text-foreground text-xs"
        >
          Total
          <ArrowUpDown className="!h-3 !w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const score = sumScores(row.original.scores);
      return <div className="font-medium text-xs">{score.toFixed(1)}</div>;
    },
  },
  {
    id: "taste",
    accessorFn: (row) => {
      const categoryScores = getCategoryScores(row.scores);
      return categoryScores.taste || 0;
    },
    header: () => <div className="text-foreground text-xs">Taste</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium text-xs">
          {categoryScores.taste ? categoryScores.taste.toFixed(1) : '—'}
        </div>
      );
    },
    meta: {
      className: "hidden md:table-cell",
    },
  },
  {
    id: "appearance",
    accessorFn: (row) => {
      const categoryScores = getCategoryScores(row.scores);
      return categoryScores.appearance || 0;
    },
    header: () => <div className="text-foreground text-xs">App</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium text-xs">
          {categoryScores.appearance ? categoryScores.appearance.toFixed(1) : '—'}
        </div>
      );
    },
    meta: {
      className: "hidden md:table-cell",
    },
  },
  {
    id: "effort",
    accessorFn: (row) => {
      const categoryScores = getCategoryScores(row.scores);
      return categoryScores.effort || 0;
    },
    header: () => <div className="text-foreground text-xs">Effort</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium text-xs">
          {categoryScores.effort ? categoryScores.effort.toFixed(1) : '—'}
        </div>
      );
    },
    meta: {
      className: "hidden md:table-cell",
    },
  },
  {
    id: "misc",
    accessorFn: (row) => {
      const categoryScores = getCategoryScores(row.scores);
      return categoryScores.misc || 0;
    },
    header: () => <div className="text-foreground text-xs">Misc</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium text-xs">
          {categoryScores.misc ? categoryScores.misc.toFixed(1) : '—'}
        </div>
      );
    },
    meta: {
      className: "hidden md:table-cell",
    },
  },
];

export default function DishDishPage() {
  // State for fetched dishes and loading indicator
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "date",
      desc: true,
    },
  ]);

  useEffect(() => {
    async function fetchDishes() {
      const querySnapshot = await getDocs(collection(db, "dish-dish"));
      const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Dish));
      setDishes(fetched);
      setLoading(false);
    }
    fetchDishes();
  }, []);

  const table = useReactTable({
    data: dishes,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    initialState: {
      sorting: [
        {
          id: "date",
          desc: true,
        },
      ],
      pagination: {
        pageSize: 50,
      },
    },
  });

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          
          <main className="flex-1 pt-6 space-y-8">

            {/* Hero Section */}
            <div>
              <div className="space-y-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sunday Suppers is a favorite tradition of mine with my best friend Anjuli. Every so often, we pick a recipe from social media, split the grocery list, and meet up at my place to cook, catch up, and laugh about everything and nothing. It's not just about the food (though that part's great) - it's our way of making time for each other. We always snap pics of our creations, eat way too much, and then rate the dish like we're judges on a cooking show.
                </p>
              </div>
            </div>

            {/* Scoring System Accordion */}
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="scoring-system" className="border-b-0 border rounded-lg px-4">
                  <AccordionTrigger className="font-semibold text-xs">Scoring System</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs font-medium mb-1">Taste (10 pts)</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            The overall flavor profile and how enjoyable the dish is. Does the food taste good? Does the dish come together?
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-medium mb-1">Appearance (5 pts)</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            The visual appeal and arrangement of the dish. Is the food Instagram-worthy? Does the dish come together?
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-medium mb-1">Effort (5 pts)</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            The dedication and skill required in preparing the dish. How long did the dish demand? How labor-intensive or intricate was the process?
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-medium mb-1">Misc (5 pts)</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            The memorability and creativity of the dish. Is the food made in a creative way? Is it a unique cooking experience?
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Dishes Table */}
            <div>
              
            {loading ? (
                <div className="text-center py-4 text-xs text-muted-foreground">Loading...</div>
              ) : dishes.length === 0 ? (
                <div className="text-center py-4 text-xs text-muted-foreground">No dishes found.</div>
              ) : (
                <div className="w-full">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                          <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                    return (
                                <TableHead 
                                  key={header.id}
                                  className={`pl-0 ${(header.column.columnDef.meta as { className?: string } | undefined)?.className || ''}`}
                                >
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                      )}
                                </TableHead>
                              );
                            })}
                          </TableRow>
                        ))}
                      </TableHeader>
                      <TableBody>
                        {table.getRowModel().rows?.length ? (
                          table.getRowModel().rows.map((row) => {
                            const isExpanded = expandedRow === row.id;
                            const dish = row.original;
                            const individualScores = getIndividualScores(dish.scores);
                            const categories = ['taste', 'appearance', 'effort', 'misc'];
                            
                            return (
                              <React.Fragment key={row.id}>
                                <TableRow
                                  data-state={row.getIsSelected() && "selected"}
                                  onClick={() => setExpandedRow(isExpanded ? null : row.id)}
                                  className="cursor-pointer"
                                >
                                  {row.getVisibleCells().map((cell) => (
                                    <TableCell 
                                      key={cell.id}
                                      className={(cell.column.columnDef.meta as { className?: string } | undefined)?.className}
                                    >
                                      {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                      )}
                                    </TableCell>
                                  ))}
                                </TableRow>
                                {isExpanded && (
                                  <TableRow key={`${row.id}-expanded`}>
                                    <TableCell colSpan={columns.length} className="bg-muted/30">
                                      <div className="py-2 px-2">
                                        <div className="flex gap-4">
                                          {dish.images && dish.images.length > 0 && (
                                            <div className="flex-shrink-0">
                                              <img 
                                                src={dish.images[0]} 
                                                alt={dish.name}
                                                className="w-32 h-32 object-cover rounded"
                                              />
                                            </div>
                                          )}
                                          <div className="space-y-1 flex-1">
                                            {categories.map((category) => {
                                              const scores = individualScores[category];
                                              const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
                                              const chrisScore = scores?.chris !== null && scores?.chris !== undefined ? scores.chris.toFixed(1) : null;
                                              const anjuliScore = scores?.anjuli !== null && scores?.anjuli !== undefined ? scores.anjuli.toFixed(1) : null;
                                              const scoreArray = [chrisScore, anjuliScore].filter(score => score !== null);
                                              const scoreString = scoreArray.length > 0 ? `[${scoreArray.join(', ')}]` : '[—, —]';
                                              
                                              return (
                                                <div key={category} className="text-xs font-mono">
                                                  <span className="inline-block w-24 text-left">{categoryName}</span>
                                                  <span className="ml-4">{scoreString}</span>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                )}
                              </React.Fragment>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={columns.length}
                              className="h-24 text-center text-xs"
                            >
                              No results.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                                      </div>
                  <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      <ChevronLeft className="!h-3 !w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      <ChevronRight className="!h-3 !w-3" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

      </main>
    </div>
      </div>
    </>
  );
} 