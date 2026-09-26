import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png"
import PlanBadges from "./PlanBadges";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="border-b border-[#202329] bg-[#0b0c0e]">
      <div className="mx-auto flex h-16 max-w-350 items-center justify-between px-4 sm:px-6">

        <Link href="/" className="flex shrink-0 items-center gap-2">
        <Image src={Logo} alt="FitLog logo" width={32} height={32}
        className="h-7 w-7 sm:h-8 sm:w-8" />

        <span className="text-lg font-extrabold tracking-wide text-white">
        FITLOG
        </span>
        </Link>


        <Navlinks/>

        <PlanBadges />
      </div>
    </nav>
  );
};

export default Navbar;