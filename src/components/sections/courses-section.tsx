import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-16 items-center">
          {/* Section Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/courses-image.png"
              alt="Art and Design Courses"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Section Text */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8 lg:mb-10">
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight">
                What will you
              </h3>
              <div className="relative inline-block">
                <div className="absolute bottom-2 left-0 right-0 bg-[#061665] -z-10 h-3 lg:h-4"></div>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase">
                  Study?
                </h3>
              </div>
            </div>

            <p className="mb-8 text-sm lg:text-base text-gray-300 leading-relaxed">
              If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-[#00D9FF] hover:bg-[#00c0e6] text-black font-semibold">
                View Courses
              </Button>
              <Button size="lg" variant="default" className="font-extrabold text-base lg:text-lg border-2 text-secondary border-secondary">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}