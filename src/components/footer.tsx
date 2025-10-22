import Link from "next/link";
import Logo from "./logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Logo />
            <p className="text-xs text-gray-400 text-center lg:text-left">
              © 2025 Victoria College of Arts and Design. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border border-secondary px-6 py-3 rounded">
            <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">
              Policies
            </Link>
            <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">
              Contact us
            </Link>
            <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">
              Meet the Team
            </Link>
            <div className="flex items-center gap-3">
              <Facebook className="h-5 w-5 text-secondary hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-secondary hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-secondary hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}