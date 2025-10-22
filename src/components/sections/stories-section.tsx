import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StoriesSection() {
  const stories = [
    {
      image: "/story-image-one.png",
      title: "Induction in VCAD Canary Wharf campus",
      description: "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
      buttons: ["Read Article", "View Full Gallery"],
    },
    {
      image: "/story-image-two.png",
      title: "Be ready for applying! Five tips to",
      titleHighlight: "build your portfolio",
      description: "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
      buttons: ["Read Article"],
    },
  ];

  return (
    <section id="stories" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-5">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase">
            Stories
          </h3>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 items-center"
            >
              {/* Story Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Story Text */}
              <div className="w-full lg:w-1/2">
                <div className="mb-6 lg:mb-8">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight">
                    {story.title}
                    {story.titleHighlight && (
                      <>
                        <br />
                        <span className="text-[#E018E0]">
                          {story.titleHighlight}
                        </span>
                      </>
                    )}
                  </h3>
                </div>

                <p className="mb-6 lg:mb-8 text-sm lg:text-base text-gray-300 leading-relaxed">
                  {story.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  {story.buttons.map((button, btnIndex) => (
                    <Button
                      key={btnIndex}
                      size="lg"
                      variant={btnIndex === 0 ? "secondary" : "default"}
                      className={`bg-[#00D9FF] hover:bg-[#00c0e6] text-black font-semibold  text-base lg:text-lg ${
                        btnIndex === 0 ? "" : "border-2 text-secondary border-secondary"
                      }`}
                    >
                      {button}
                    </Button> 
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}