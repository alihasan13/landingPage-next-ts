import { Student } from "@/types/student";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

type Props = {
  student: Student;
};

export default function TestimonialCard({ student }: Props) {
  return (
    <div className="h-[450px] lg:h-[520px] w-full relative rotate-3 overflow-hidden border-2 border-[#E018E0] rounded-lg bg-gradient-to-br from-[#061665] to-[#0a0e27]">
      {/* Background Image */}
      {student.image && (
        <div className="absolute inset-0 opacity-30">
          <Image
            src={student.image}
            alt={`${student.firstname} ${student.lastname}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-white p-6 lg:p-8 pl-8 lg:pl-12 -rotate-3">
        {/* Quote */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            &quot;LOREM IPSUM<br />LOREM IPSUM&quot;
          </h2>
        </div>

        {/* Name / Course */}
        <div className="mb-6">
          <p className="text-base lg:text-lg font-medium uppercase tracking-wide">
            {student.firstname}/AGE/COURSE
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Facebook className="w-5 h-5 lg:w-6 lg:h-6 hover:text-secondary cursor-pointer transition-colors" />
          <Instagram className="w-5 h-5 lg:w-6 lg:h-6 hover:text-secondary cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 hover:text-secondary cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
}