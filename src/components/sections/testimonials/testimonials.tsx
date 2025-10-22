"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TestimonialCard from "./testimonial-card";
import { Student } from "@/types/student";

type Props = {
  students: Student[];
};

export default function Testimonials({ students }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Server-side render: simple grid
  if (!isClient) {
    return (
      <div className="w-full overflow-hidden">
        <div className="flex gap-6">
          {students.slice(0, 3).map((student) => (
            <div key={student.id} className="min-w-[300px] flex-shrink-0">
              <TestimonialCard student={student} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Client-side render: carousel with autoplay
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
        }),
      ]}
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 lg:-ml-6">
        {students.map((student) => (
          <CarouselItem
            key={student.id}
            className="pl-4 lg:pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <TestimonialCard student={student} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}