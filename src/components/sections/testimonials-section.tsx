
import { getStudentsService } from "@/services/students";
import Testimonials from "./testimonials/testimonials";

export default async function TestimonialsSection() {
  const students = await getStudentsService();

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-5">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="relative inline-block">
            <div className="absolute bottom-2 left-2 right-0 bg-[#8ec8ee] bg-accent -z-10 h-4 lg:h-6"></div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight">
              Student<br />Testimonials
            </h3>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Testimonials students={students} />
      </div>
    </section>
  );
}