import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="py-10 lg:py-12">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-5">
          {/* Hero Text */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left uppercase font-extrabold leading-tight">
              Welcome<br />to VCAD
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-center lg:text-left text-gray-300 leading-relaxed">
              Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London&apos;s Design District, we have valuable connections within our industry. Search our latest courses.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="bg-[#00D9FF] hover:bg-[#00c0e6] text-black font-semibold">
                Apply Now
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/hero-image.png"
              alt="VCAD Creative Programs"
              width={925}
              height={880}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}