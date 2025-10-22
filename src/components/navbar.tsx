import { Menu } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#030a2e]  backdrop-blur-sm">
      <nav className="container mx-auto px-4 lg:px-5 flex h-20 lg:h-24 items-center justify-between">
        <Logo />
        <Button variant="ghost" size="icon" className="hover:bg-white/10">
          <Menu className="w-6 h-6 lg:w-7 lg:h-7" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </nav>
    </header>
  );
}