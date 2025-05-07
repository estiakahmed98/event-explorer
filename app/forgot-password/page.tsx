import type { Metadata } from "next";
import ForgotPasswordForm from "@/components/forgot-password-form";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your Event Explorer password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Suspense fallback={<div>Loading form...</div>}>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  );
}
