import type { Metadata } from "next"
import HomeSlider from "@/components/home-slider"
import UpcomingEvents from "@/components/upcoming-events"
import FeaturedSection from "@/components/featured-section"
import NewsletterSection from "@/components/newsletter-section"

export const metadata: Metadata = {
  title: "Home",
  description: "Discover and explore upcoming local events in your area",
}

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HomeSlider />
      <UpcomingEvents />
      <FeaturedSection />
      <NewsletterSection />
    </div>
  )
}
