interface Event {
  id: string;
  name: string;
  category: string;
  description: string;
  date: string;
  time: string;
  location: string;
  entryFee: number;
  thumbnail: string;
  featured: boolean;
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  capacity: number;
  remainingSeats: number;
}

const events: Event[] = [
  {
    id: "1",
    name: "Tech Conference 2025",
    category: "tech",
    description: "Join us for the biggest tech conference of the year. Learn about the latest technologies, network with industry leaders, and participate in hands-on workshops. This event features keynote speeches from renowned tech innovators, panel discussions on emerging trends, and opportunities to connect with potential employers and collaborators.",
    date: "June 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Tech Hub Convention Center",
    entryFee: 99,
    thumbnail: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true,
    organizerName: "TechEvents Inc.",
    organizerEmail: "info@techevents.com",
    organizerPhone: "+1 (555) 123-4567",
    capacity: 500,
    remainingSeats: 245
  },
  {
    id: "2",
    name: "Summer Music Festival",
    category: "music",
    description: "Experience three days of amazing live music performances from top artists across multiple genres. Enjoy food stalls, art installations, and camping under the stars. This annual festival brings together music lovers from around the country for an unforgettable weekend of entertainment, community, and celebration.",
    date: "July 21-23, 2025",
    time: "2:00 PM - 1:00 AM",
    location: "City Park Grounds",
    entryFee: 149,
    thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true,
    organizerName: "Melody Productions",
    organizerEmail: "contact@melodyproductions.com",
    organizerPhone: "+1 (555) 789-0123",
    capacity: 5000,
    remainingSeats: 1873
  },
  {
    id: "3",
    name: "Culinary Masterclass",
    category: "food",
    description: "Learn cooking techniques from renowned chef Maria Rodriguez in this intimate masterclass. Perfect your culinary skills and discover secret recipes. Participants will receive hands-on instruction, ingredient knowledge, and professional tips that will elevate their home cooking to restaurant quality.",
    date: "August 5, 2025",
    time: "11:00 AM - 2:00 PM",
    location: "Gourmet Cooking Academy",
    entryFee: 75,
    thumbnail: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false,
    organizerName: "Culinary Arts Association",
    organizerEmail: "classes@culinaryarts.org",
    organizerPhone: "+1 (555) 456-7890",
    capacity: 30,
    remainingSeats: 12
  },
  {
    id: "4",
    name: "Modern Art Exhibition",
    category: "art",
    description: "Explore the boundaries of contemporary art at this exhibition featuring works from emerging and established artists. Guided tours available. This curated collection challenges conventions and provokes thought through innovative use of media, space, and concept, representing diverse perspectives on modern society.",
    date: "September 10-25, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Metropolitan Art Gallery",
    entryFee: 25,
    thumbnail: "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true,
    organizerName: "Art Collective Foundation",
    organizerEmail: "exhibitions@artcollective.org",
    organizerPhone: "+1 (555) 234-5678",
    capacity: 200,
    remainingSeats: 152
  },
  {
    id: "5",
    name: "Startup Pitch Competition",
    category: "business",
    description: "Watch innovative startups pitch their ideas to investors and compete for funding. Networking opportunities included. This high-energy event showcases the next generation of entrepreneurs as they present business models that could disrupt industries and change the future marketplace.",
    date: "October 12, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "Business Innovation Center",
    entryFee: 50,
    thumbnail: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false,
    organizerName: "Venture Capital Partners",
    organizerEmail: "events@vcpartners.com",
    organizerPhone: "+1 (555) 345-6789",
    capacity: 300,
    remainingSeats: 124
  },
  {
    id: "6",
    name: "Yoga & Wellness Retreat",
    category: "wellness",
    description: "Rejuvenate your mind and body at this weekend retreat featuring yoga sessions, meditation, and wellness workshops. Escape the stress of daily life and immerse yourself in practices that promote physical health, mental clarity, and emotional balance in a peaceful natural setting.",
    date: "November 18-20, 2025",
    time: "Full day events",
    location: "Serenity Mountain Resort",
    entryFee: 199,
    thumbnail: "https://images.pexels.com/photos/8436590/pexels-photo-8436590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true,
    organizerName: "Mindful Living Organization",
    organizerEmail: "retreats@mindfulliving.org",
    organizerPhone: "+1 (555) 567-8901",
    capacity: 50,
    remainingSeats: 18
  },
  {
    id: "7",
    name: "Marathon for Charity",
    category: "sports",
    description: "Run for a cause in this annual charity marathon. Various distance options available for all fitness levels. Participants can choose 5K, 10K, half-marathon or full marathon routes through scenic city landmarks while raising funds for local education initiatives.",
    date: "May 8, 2025",
    time: "7:00 AM Start",
    location: "Downtown City Streets",
    entryFee: 35,
    thumbnail: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false,
    organizerName: "Community Foundation",
    organizerEmail: "marathon@communityfoundation.org",
    organizerPhone: "+1 (555) 678-9012",
    capacity: 2000,
    remainingSeats: 873
  },
  {
    id: "8",
    name: "Digital Marketing Workshop",
    category: "tech",
    description: "Master the latest digital marketing strategies in this intensive one-day workshop. SEO, social media, content marketing and more. Participants will gain practical skills in campaign planning, analytics interpretation, and audience targeting across multiple platforms.",
    date: "April 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Creative Media Center",
    entryFee: 129,
    thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false,
    organizerName: "Digital Growth Academy",
    organizerEmail: "workshops@digitalgrowth.com",
    organizerPhone: "+1 (555) 890-1234",
    capacity: 75,
    remainingSeats: 32
  }
];

export default events;