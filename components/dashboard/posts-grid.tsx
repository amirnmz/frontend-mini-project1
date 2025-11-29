"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchPosts } from "@/services/postsService"

// TypeScript type for Post data from API
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export async function PostsGrid() {
  let posts: Post[] | null = null
  let error: string | null = null

  try {
    // Fetch posts with Zod validation
    posts = await fetchPosts()
    // Limit to first 12 posts for better display
    posts = posts.slice(0, 12)
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load posts"
    console.error("Error fetching posts:", err)
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Error Loading Posts</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Please try refreshing the page or contact support if the problem persists.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Posts Available</CardTitle>
          <CardDescription>There are no posts to display at the moment.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="text-xs">
              Post #{post.id} • User {post.userId}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
