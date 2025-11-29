import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PostsGrid } from "@/components/dashboard/posts-grid"
import { getCurrentUser } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Dashboard | Next.js Authentication App",
  description: "View and manage your posts from the dashboard with real-time data",
  openGraph: {
    title: "Dashboard | Next.js Authentication App",
    description: "Your personalized dashboard with latest posts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard",
    description: "Your personalized dashboard",
  },
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={user?.name} userEmail={user?.email} />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back{user?.name ? `, ${user.name}` : ""}!</h1>
          <p className="text-muted-foreground">Here are the latest posts from our community</p>
        </div>
        <PostsGrid />
      </main>
    </div>
  )
}
