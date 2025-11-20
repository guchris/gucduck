"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface GameOverDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onViewLeaderboard: () => void
  onRefresh: () => void
}

export function GameOverDialog({ open, onOpenChange, onViewLeaderboard, onRefresh }: GameOverDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Game Over</AlertDialogTitle>
          <AlertDialogDescription>
            You've run out of lives. Refresh to try again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="secondary" onClick={onViewLeaderboard}>
              View Leaderboard
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={onRefresh}>
              Refresh
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

