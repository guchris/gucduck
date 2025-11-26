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
import { ChevronLeft, ChevronRight } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PongScore = {
  id: string;
  name: string;
  timestamp: string;
  duration: number;
  lives: number;
};

function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hoursStr = hours.toString().padStart(2, '0');
    return `${month}/${day}/${year} ${hoursStr}:${minutes} ${ampm}`;
  } catch {
    return timestamp;
  }
}

// Custom sorting function for ranking: duration first (asc), then lives (desc)
function rankSort(a: PongScore, b: PongScore): number {
  // First compare by duration (lower is better)
  if (a.duration !== b.duration) {
    return a.duration - b.duration;
  }
  // If durations are equal, compare by lives (higher is better)
  if (a.lives !== b.lives) {
    return b.lives - a.lives;
  }
  // If both are equal, sort by timestamp (newer first)
  return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
}

const columns: ColumnDef<PongScore>[] = [
  {
    id: "rank",
    header: () => <div className="text-foreground text-xs">Rank</div>,
    cell: ({ row, table }) => {
      // Calculate rank based on current sorting
      const sortedRows = table.getSortedRowModel().rows;
      const currentIndex = sortedRows.findIndex(r => r.id === row.id);
      const rank = currentIndex >= 0 ? currentIndex + 1 : '-';
      return <div className="font-medium text-xs">{rank}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-foreground text-xs">Name</div>,
    cell: ({ row }) => (
      <div className="font-medium text-xs">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "duration",
    header: () => <div className="text-foreground text-xs">Duration</div>,
    cell: ({ row }) => {
      const duration = row.getValue("duration") as number;
      return <div className="font-medium text-xs">{duration.toFixed(2)}s</div>;
    },
    sortingFn: (rowA, rowB) => {
      const a = rowA.getValue("duration") as number;
      const b = rowB.getValue("duration") as number;
      if (a !== b) return a - b;
      // If durations are equal, sort by lives (descending)
      const livesA = rowA.getValue("lives") as number;
      const livesB = rowB.getValue("lives") as number;
      return livesB - livesA;
    },
  },
  {
    accessorKey: "lives",
    header: () => <div className="text-foreground text-xs">Lives</div>,
    cell: ({ row }) => {
      const lives = row.getValue("lives") as number;
      return <div className="font-medium text-xs">{lives}</div>;
    },
  },
  {
    accessorKey: "timestamp",
    header: () => <div className="text-foreground text-xs">Date</div>,
    cell: ({ row }) => {
      const timestamp = row.getValue("timestamp") as string;
      return <div className="text-xs">{formatTimestamp(timestamp)}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const a = rowA.getValue("timestamp") as string;
      const b = rowB.getValue("timestamp") as string;
      return new Date(a).getTime() - new Date(b).getTime();
    },
  },
];

export default function PongLeaderboardPage() {
  const [scores, setScores] = useState<PongScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "duration",
      desc: false, // Ascending - lower duration is better
    },
    {
      id: "lives",
      desc: true, // Descending - higher lives is better
    },
  ]);

  useEffect(() => {
    async function fetchScores() {
      try {
        const querySnapshot = await getDocs(collection(db, "pong"));
        const fetched = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as PongScore));
        
        // Sort by ranking (duration first, then lives)
        fetched.sort(rankSort);
        
        setScores(fetched);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching scores:", error);
        setLoading(false);
      }
    }
    fetchScores();
  }, []);

  const table = useReactTable({
    data: scores,
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
          id: "duration",
          desc: false,
        },
        {
          id: "lives",
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
          
          <main className="flex-1 pt-6">

            {/* Scores Table */}
            <div>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Spinner className="size-6" />
                </div>
              ) : scores.length === 0 ? (
                <div className="text-center py-4 text-xs text-muted-foreground">No scores found.</div>
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
                                  className={`${(header.column.columnDef.meta as { className?: string } | undefined)?.className || ''}`}
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

