import Link from "next/link";
import CoursesSection from "@/components/sections/courses-section";
import HeroSection from "@/components/sections/hero-section";
import PartnerSection from "@/components/sections/partner-section";
import StoriesSection from "@/components/sections/stories-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CampusesSection from "@/components/sections/campuses-section";
import VisionSection from "@/components/sections/vision-section";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "courses", url: "#courses" },
  { label: "partner institutions", url: "#partner" },
  { label: "student testimonials", url: "#testimonials" },
  { label: "stories", url: "#stories" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Navigation Links */}
      <div className="container mx-auto px-4 lg:px-5 py-8 lg:py-12 border-y border-[#E018E0]">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-xs lg:text-sm">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={cn(
                "uppercase hover:text-secondary transition-colors",
                index === 0 ? "font-bold" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <CoursesSection />

      {/* Vision Quote Section */}
      <VisionSection />

      

      {/* Campuses Section */}
      <CampusesSection />

      {/* Partner Institution Section */}
      <PartnerSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Stories Section */}
      <StoriesSection />
    </div>
  );
}