"use client"

import { useState, useEffect, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface WinDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (name: string) => void
  duration: number
  lives: number
}

export function WinDialog({ open, onOpenChange, onSubmit, duration, lives }: WinDialogProps) {
  const [name, setName] = useState("anon")
  const inputRef = useRef<HTMLInputElement>(null)

  // Select all text when dialog opens
  useEffect(() => {
    if (open && inputRef.current) {
      // Small delay to ensure the input is focused first
      setTimeout(() => {
        inputRef.current?.select()
      }, 100)
    }
  }, [open])

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim())
      setName("anon")
      onOpenChange(false)
    }
  }

  // Reset to "anon" when dialog closes
  useEffect(() => {
    if (!open) {
      setName("anon")
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Congrats</DialogTitle>
          <DialogDescription>
            You've completed my pong game! Enter your name to save your score to the leaderboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              ref={inputRef}
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit()
                }
              }}
              autoFocus
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Time: {duration.toFixed(2)}s</p>
            <p>Lives remaining: {lives}</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={!name.trim()}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

