import type { Metadata } from "next"
import ProfileForm from "@/components/profile-form"
import ProtectedRoute from "@/components/protected-route"

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your Event Explorer profile",
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>
          <ProfileForm />
        </div>
      </div>
    </ProtectedRoute>
  )
}
