import type { Metadata } from "next"
import RegisterForm from "@/components/register-form"

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new Event Explorer account",
}

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <RegisterForm />
      </div>
    </div>
  )
}
