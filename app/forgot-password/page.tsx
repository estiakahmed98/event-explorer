import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/forgot-password-form"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your Event Explorer password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
