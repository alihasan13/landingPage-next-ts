import Image from "next/image";

// Tag Component (inline)
const Tag = ({
  color,
  left,
  top,
  rotate,
  text,
  textColor,
}: {
  color: string;
  left: string;
  top: string;
  rotate: string;
  text: string;
  textColor: string;
}) => (
  <div
    className={`absolute ${color} px-4 py-2 text-xs font-bold shadow-lg whitespace-nowrap z-20`}
    style={{
      left,
      top,
      transform: `rotate(${rotate}deg)`,
    }}
  >
    <span className={textColor}>{text}</span>
  </div>
);

export default function CampusesSection() {
  // const campuses = [
  //   { name: "CANARY WHARF", image: "/campus-canary.png" },
  //   { name: "BOROUGH", image: "/campus-borough.png" },
  //   { name: "MANCHESTER", image: "/campus-manchester.png" },
  // ];

  return (
    <section className="bg-[#0a0e27] relative ">
       <div className="bg-[#1a2456] relative mt-0 py-25 md:mt-50 lg:mt-77.5">
      <div className="mx-auto w-full lg:w-6/7">
        {/* Image grid */}
        <div className="mx-auto grid grid-cols-3 items-center lg:w-1/2">
          <div className="relative aspect-[245/485] w-full lg:-mt-70">
            <Image
              alt="Image"
              fill
              className="object-cover"
              src="/campus-canary.png"
            />
          </div>
          <div className="relative aspect-[245/485] w-full lg:-mt-70">
            <Image
              alt="Image"
              fill
              className="object-cover"
              src="/campus-borough.png"
            />
          </div>
          <div className="relative aspect-[245/485] w-full lg:-mt-70">
            <Image
              alt="Image"
              fill
              className="object-cover"
              src="/campus-manchester.png"
            />
          </div>
        </div>

        {/* Title with underline highlight */}
        <div className="relative z-0 mt-7.5 flex justify-center">
          <h1 className="relative z-10 inline-block text-[64px] font-extrabold text-white uppercase before:absolute before:top-1/2 before:left-0 before:z-[-1] before:h-[20px] before:w-full before:translate-y-1/2 before:bg-[#8ec8ee]">
            campuses
          </h1>
        </div>

        {/* Paragraph */}
        <div className="mt-6 flex items-center justify-center">
          <p className="w-1/2 text-center text-white">
            We have multiple locations across the UK, all strategically situated
            in vibrant city centers and easily accessible by public transport.
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <Tag
          color="bg-[#FF1493]"
          left="10%"
          top="30%"
          rotate="-15"
          text="Canary Wharf"
          textColor="text-white"
        />
        <Tag
          color="bg-[#8066FF]"
          left="15%"
          top="75%"
          rotate="15"
          text="Manchester"
          textColor="text-white"
        />
        <Tag
          color="bg-[#00D9FF]"
          left="75%"
          top="55%"
          rotate="-15"
          text="Borough"
          textColor="text-black"
        />
      </div>
    </div>
    </section>
  );
}