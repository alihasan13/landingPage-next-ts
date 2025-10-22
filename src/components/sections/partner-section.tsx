import Image from "next/image";

export default function PartnerSection() {
  return (
    <section id="partner" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Section Text */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12">
            <div>
              <div className="relative inline-block">
                <div className="absolute bottom-2 left-0 right-0 bg-[#E018E0] -z-10 h-4 lg:h-6"></div>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight">
                  Partner<br />Institutions
                </h3>
              </div>
            </div>

            <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus veritatis ratione laboriosam sit, ipsam quasi exercitationem obcaecati odit illo, recusandae, laudantium praesentium id sunt aut nemo necessitatibus voluptas porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum accusantium dolorum sequi delectus fuga ducimus debitis eos modi quibusdam?
            </p>
          </div>

          {/* Partners Logo */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12">
            <Image
              src="/partner-image-1.png"
              alt="Ravensbourne University"
              width={685}
              height={167}
              className="h-32 lg:h-40 w-auto object-contain mx-auto lg:mx-0"
            />
            <Image
              src="/partner-image-2.png"
              alt="Arts University Plymouth"
              width={495}
              height={167}
              className="h-24 lg:h-32 w-auto object-contain mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}