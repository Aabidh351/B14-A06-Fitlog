import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png"
import PlanBadges from "./PlanBadges";

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


        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/workouts"
            className="rounded-full bg-[#18230d] px-3 py-1.5 text-xs font-semibold text-[#baff00] sm:px-4"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-3 py-1.5 text-xs text-[#969ba5] transition hover:text-white sm:px-4"
          >
            My Plan
          </Link>
        </div>


        <PlanBadges />
      </div>
    </nav>
  );
};

export default Navbar;