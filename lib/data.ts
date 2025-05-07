import type { Event } from "@/types";

const events: Event[] = [
  {
    id: "event_001",
    name: "Tech Innovators Conference 2025",
    thumbnail: "/Tech Innovators Conference.jpg",
    category: "Technology",
    date: "2025-05-15",
    location: "Dhaka Convention Center, Dhaka",
    entry_fee: 500,
    description:
      "An exclusive gathering of tech leaders and innovators from around the country.",
  },
  {
    id: "event_002",
    name: "Green Energy Summit",
    thumbnail: "/Green Energy Summit.jpg",
    category: "Environment",
    date: "2025-06-10",
    location: "Bangabandhu International Conference Center",
    entry_fee: 300,
    description:
      "Explore renewable energy trends and sustainability strategies.",
  },
  {
    id: "event_003",
    name: "Startup Pitch Night",
    thumbnail: "/Startup Pitch Night.jpg",
    category: "Entrepreneurship",
    date: "2025-05-25",
    location: "Innovation Hub, Chittagong",
    entry_fee: 150,
    description: "Watch top startups pitch to investors and industry experts.",
  },
  {
    id: "event_004",
    name: "Digital Marketing Bootcamp",
    thumbnail: "/5.jpg",
    category: "Marketing",
    date: "2025-07-02",
    location: "Sylhet Business School Auditorium",
    entry_fee: 400,
    description: "Hands-on training with top digital marketing professionals.",
  },
  {
    id: "event_005",
    name: "UX/UI Design Expo",
    thumbnail: "/6.jpg",
    category: "Design",
    date: "2025-08-20",
    location: "Art & Design Institute, Rajshahi",
    entry_fee: 250,
    description: "Showcasing user experience and interface design innovation.",
  },
  {
    id: "event_006",
    name: "AI & Robotics Fair",
    thumbnail: "/7.jpg",
    category: "Technology",
    date: "2025-09-15",
    location: "National Science Museum, Dhaka",
    entry_fee: 600,
    description: "A showcase of cutting-edge AI applications and robotics.",
  },
  {
    id: "event_007",
    name: "Women in Tech Forum",
    thumbnail: "/8.jpg",
    category: "Diversity",
    date: "2025-05-30",
    location: "Khulna IT Park",
    entry_fee: 200,
    description: "Empowering women in technology with talks and networking.",
  },
  {
    id: "event_008",
    name: "Cloud Computing Meetup",
    thumbnail: "/9.jpg",
    category: "IT",
    date: "2025-06-18",
    location: "ICT Tower, Dhaka",
    entry_fee: 350,
    description:
      "Networking session for cloud experts, engineers, and businesses.",
  },
  {
    id: "event_009",
    name: "Game Dev Carnival",
    thumbnail: "/10.jpg",
    category: "Gaming",
    date: "2025-07-25",
    location: "Chattogram Gaming Zone",
    entry_fee: 450,
    description: "A festival of indie games, VR, eSports, and dev talks.",
  },
  {
    id: "event_010",
    name: "Data Science Symposium",
    thumbnail: "/11.jpg",
    category: "Data",
    date: "2025-08-10",
    location: "Mymensingh Tech Park",
    entry_fee: 550,
    description:
      "Deep dive into analytics, machine learning, and big data trends.",
  },
];

export async function getEvents(): Promise<Event[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return events;
}

export async function getEventById(id: string): Promise<Event | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return events.find((event) => event.id === id);
}
