import type { Metadata } from "next"
import { LoginForm } from "@/components/organisms/LoginForm"

export const metadata: Metadata = {
  title: "Login | Next.js Authentication App",
  description: "Sign in to access your dashboard with secure JWT authentication",
  openGraph: {
    title: "Login | Next.js Authentication App",
    description: "Sign in to access your dashboard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login",
    description: "Sign in to access your dashboard",
  },
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
