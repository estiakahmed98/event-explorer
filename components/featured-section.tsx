import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FeaturedSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/Robotics.jpg"
            alt="AI & Robotics Fair"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Choose Event Explorer?</h2>
          <p className="text-muted-foreground">
            Event Explorer is your gateway to discovering the most exciting
            events in your area. We curate a diverse range of experiences to
            match your interests and help you make the most of your free time.
          </p>
          <ul className="space-y-3">
            {[
              "Discover events tailored to your interests",
              "Get detailed information about each event",
              "Reserve seats with just a few clicks",
              "Share your experiences with the community",
              "Stay updated with the latest happenings",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
