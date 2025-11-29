import { z } from "zod"

// Login schema
export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type LoginFormData = z.infer<typeof LoginSchema>

// User schema
export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

// Post schema for JSONPlaceholder API
export const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
})

export const PostsArraySchema = z.array(PostSchema)

export type Post = z.infer<typeof PostSchema>

// API Response schemas
export const LoginResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  user: UserSchema.optional(),
})

export const ErrorResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
})
