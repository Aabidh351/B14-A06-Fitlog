import Image from "next/image";
import Logo from "@/public/logo.png"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#252931] bg-[#0b0c0e]">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between gap-8 px-4 py-8 sm:px-6">


        <Link href="/" className="flex shrink-0 items-center gap-2">
        <Image src={Logo} alt="FitLog logo" width={32} height={32}
        className="h-7 w-7 sm:h-8 sm:w-8" />

        <span className="text-lg font-extrabold tracking-wide text-white">
        FITLOG
        </span>
        </Link>


        <p className="text-right text-sm text-[#969ba5]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;