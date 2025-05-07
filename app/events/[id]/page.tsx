import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { getEventById, getEvents } from "@/lib/data";
import ReservationForm from "@/components/reservation-form";
import ProtectedRoute from "@/components/protected-route";

interface EventPageProps {
  params: {
    id: string;
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default function EventPage({ params }: EventPageProps) {
  return (
    <ProtectedRoute>
      <EventDetails id={params.id} />
    </ProtectedRoute>
  );
}

async function EventDetails({ id }: { id: string }) {
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={event.thumbnail || "/placeholder.svg"}
            alt={event.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-2">
              {event.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">{event.name}</h1>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-primary" />
              <span>Entry Fee: ৳{event.entry_fee}</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">About This Event</h2>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Reserve Your Seat</h2>
        <div className="max-w-md mx-auto">
          <ReservationForm eventId={id} eventName={event.name} />
        </div>
      </div>
    </div>
  );
}
