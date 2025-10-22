import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

type Props = { 
  children: ReactNode;
};

export default function LandingPageLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}