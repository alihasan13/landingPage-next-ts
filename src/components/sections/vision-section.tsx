import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Quote */}
          <div className="relative order-2 lg:order-1">
            <span className="text-6xl md:text-8xl text-white-700 absolute -top-15 -left-4">&ldquo;</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-10">
              A World where<br />
              <span className="text-secondary ">EVERYONE</span> has<br />
              the <span className="text-secondary ">opportunity</span><br />
              to fulfil their<br />
              potential 
            </h2>
            <span className="text-6xl md:text-8xl text-white-700 absolute -bottom-20 left-55">&rdquo;</span>
            
          </div>

          {/* Image & CTA */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mb-[-80px] lg:mb-[-100px]">
              <Image
                src="/digital-learning.png"
                alt="Digital Learning"
                width={600}
                height={400}
                className="w-full h-64 lg:h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}