"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Tech Innovators Conference 2025",
    description:
      "Join the biggest tech event of the year with industry leaders and innovators.",
    image: "/Tech Innovators Conference.jpg",
    link: "/events/event_001",
  },
  {
    id: 2,
    title: "Green Energy Summit",
    description:
      "Explore sustainable energy solutions and environmental innovations.",
    image: "/Green Energy Summit.jpg",
    link: "/events/event_002",
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    description:
      "Watch promising startups pitch their ideas to investors and industry experts.",
    image: "/Startup Pitch Night.jpg",
    link: "/events/event_003",
  },
];

export default function HomeSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-muted animate-pulse rounded-lg my-8"></div>
    );
  }

  return (
    <div className="relative my-8 rounded-lg overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[500px] rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-3xl">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 mb-6 max-w-xl">
                    {slide.description}
                  </p>
                  <Button asChild size="lg">
                    <Link href={slide.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="outline"
        size="icon"
        className="swiper-button-prev absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="swiper-button-next absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
