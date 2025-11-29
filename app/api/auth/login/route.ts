import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { LoginSchema } from "@/lib/zod-schemas"
import { createToken } from "@/lib/auth"

/**
 * POST /api/auth/login
 * Authenticates user and sets httpOnly cookie with JWT token
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body with Zod
    const validation = LoginSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const { email, password } = validation.data

    // Fake authentication logic
    // In production, you would:
    // 1. Query database for user
    // 2. Compare hashed passwords
    // 3. Return user data
    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 },
      )
    }

    // Create fake user data
    const user = {
      userId: 1,
      email: email,
      name: email.split("@")[0],
    }

    // Create JWT token
    const token = await createToken(user)

    // Set httpOnly cookie
    const cookieStore = await cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.userId,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}
