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
import { ArrowUpDown } from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  return `${month}/${day}/${year.toString().slice(-2)}`;
}

const columns: ColumnDef<Dish>[] = [
  {
    id: "image",
    header: () => null,
    cell: ({ row }) => {
      const images = row.original.images;
      if (Array.isArray(images) && images.length > 0) {
        return (
          <img
            src={images[0]}
            alt={row.original.name}
            className="w-16 h-16 object-cover rounded-md flex-shrink-0 min-w-16"
          />
        );
      }
      return <div className="text-muted-foreground">—</div>;
    },
    meta: {
      className: "w-16 min-w-16",
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-8 px-2 text-foreground"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-8 px-2 text-foreground"
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{formatDate(row.getValue("date"))}</div>,
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
          className="h-8 px-2 text-foreground"
        >
          Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const score = sumScores(row.original.scores);
      return <div className="font-medium">{score.toFixed(1)}</div>;
    },
  },
  {
    id: "taste",
    accessorFn: (row) => {
      const categoryScores = getCategoryScores(row.scores);
      return categoryScores.taste || 0;
    },
    header: () => <div className="text-foreground">Taste</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium">
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
    header: () => <div className="text-foreground">App</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium">
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
    header: () => <div className="text-foreground">Effort</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium">
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
    header: () => <div className="text-foreground">Misc</div>,
    cell: ({ row }) => {
      const categoryScores = getCategoryScores(row.original.scores);
      return (
        <div className="font-medium">
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
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "date",
      desc: true,
    },
  ]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
        pageSize: 10,
      },
    },
  });

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          
          <main className="flex-1 pt-6">

            {/* Hero Section */}
            <div className="mb-12">
              <div className="space-y-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Dish Dish is me and my best friend Anjuli's favorite tradition. Every so often, we pick a recipe from social media, split the grocery list, and meet up at my place to cook, catch up, and laugh about everything and nothing. It's not just about the food (though that part's great) - it's our way of making time for each other. We always snap pics of our creations, eat way too much, and then rate the dish like we're judges on a cooking show.
                </p>
              </div>
            </div>

            {/* Scoring System Section */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white">Scoring System</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Taste */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-yellow-500 hover:text-white">
                            Taste
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">10 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The overall flavor profile and how enjoyable the dish is. Does the food taste good? Does the dish come together?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Appearance */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-pink-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-pink-500 hover:text-white">
                            Appearance
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The visual appeal and arrangement of the dish. Is the food Instagram-worthy? Does the dish come together?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Effort */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-green-500 hover:text-white">
                            Effort
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The dedication and skill required in preparing the dish. How long did the dish demand? How labor-intensive or intricate was the process?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Misc */}
                  <div className="group">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-purple-500 hover:text-white">
                            Misc
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 pts</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      The memorability and creativity of the dish. Is the food made in a creative way? Is it a unique cooking experience?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dishes Table */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white">Dishes</h3>
              </div>
              
            {loading ? (
                <div className="text-center py-4 text-sm text-muted-foreground">Loading...</div>
              ) : dishes.length === 0 ? (
                <div className="text-center py-4 text-sm text-muted-foreground">No dishes found.</div>
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
                                  className={(header.column.columnDef.meta as { className?: string } | undefined)?.className}
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
                          table.getRowModel().rows.map((row) => (
                            <TableRow
                              key={row.id}
                              data-state={row.getIsSelected() && "selected"}
                              onClick={() => {
                                setSelectedDish(row.original);
                                setDialogOpen(true);
                              }}
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
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={columns.length}
                              className="h-24 text-center"
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
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
              </div>

      </main>
    </div>
                            </div>
                            
      {/* Dish Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl w-[calc(100%-2rem)] sm:w-full max-h-[90vh] overflow-y-auto border-gray-200 dark:border-gray-700">
          {selectedDish && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedDish.name}</DialogTitle>
                <DialogDescription>
                  {formatDate(selectedDish.date)} • {sumScores(selectedDish.scores).toFixed(2)} pts total
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Large Image */}
                {Array.isArray(selectedDish.images) && selectedDish.images.length > 0 && (
                  <div className="w-full">
                    <img
                      src={selectedDish.images[0]}
                      alt={selectedDish.name}
                      className="w-full h-auto rounded-lg object-cover"
                                    />
                                  </div>
                                )}
                                
                {/* Score Breakdown */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Score Breakdown</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {(() => {
                      const categoryScores = getCategoryScores(selectedDish.scores);
                      const individualScores = getIndividualScores(selectedDish.scores);
                      const colorClasses: { [key: string]: string } = {
                        yellow: "bg-yellow-500",
                        pink: "bg-pink-500",
                        green: "bg-green-500",
                        purple: "bg-purple-500",
                      };
                      
                      const categories = [
                        {
                          name: "Taste",
                          total: categoryScores.taste,
                          chris: individualScores.taste?.chris,
                          anjuli: individualScores.taste?.anjuli,
                          color: "yellow",
                        },
                        {
                          name: "Appearance",
                          total: categoryScores.appearance,
                          chris: individualScores.appearance?.chris,
                          anjuli: individualScores.appearance?.anjuli,
                          color: "pink",
                        },
                        {
                          name: "Effort",
                          total: categoryScores.effort,
                          chris: individualScores.effort?.chris,
                          anjuli: individualScores.effort?.anjuli,
                          color: "green",
                        },
                        {
                          name: "Misc",
                          total: categoryScores.misc,
                          chris: individualScores.misc?.chris,
                          anjuli: individualScores.misc?.anjuli,
                          color: "purple",
                        },
                      ];
                      
                      return categories.map((category) => (
                        <div key={category.name} className="border rounded-lg p-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${colorClasses[category.color]}`}></div>
                            <h4 className="text-sm font-medium">{category.name}</h4>
                                  </div>
                                    <div className="space-y-1">
                                      <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Total</span>
                              <span className="text-sm font-medium">
                                {category.total ? category.total.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Chris</span>
                              <span className="text-sm">
                                {category.chris ? category.chris.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Anjuli</span>
                              <span className="text-sm">
                                {category.anjuli ? category.anjuli.toFixed(1) : '—'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 