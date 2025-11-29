"use client"

import { useRouter } from "next/navigation"
import { LogOut, User } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { ThemeToggle } from "@/components/theme-toggle"

interface DashboardHeaderProps {
  userName?: string
  userEmail?: string
}

export function DashboardHeader({ userName, userEmail }: DashboardHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      // Call logout API to clear httpOnly cookie
      await fetch("/api/auth/logout", {
        method: "POST",
      })

      // Redirect to login page
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>
          {userEmail && (
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <User className="size-4" />
              <span>{userEmail}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
