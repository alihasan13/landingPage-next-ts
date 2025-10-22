import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
       <Image
                    src="/logo.svg"
                    alt="VCAD Logo"
                    width={184}
                    height={69}
                    className=" rounded-lg"
                  />
    </Link>
  );
}