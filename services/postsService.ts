import { PostsArraySchema, type Post } from "@/lib/zod-schemas"

/**
 * Fetch posts from JSONPlaceholder API
 * Validates response with Zod schema
 */
export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!response.ok) {
      throw new Error("Failed to fetch posts")
    }

    const data = await response.json()

    // Validate response with Zod schema
    const validatedPosts = PostsArraySchema.parse(data)

    return validatedPosts
  } catch (error) {
    console.error("Error fetching posts:", error)
    throw error
  }
}
