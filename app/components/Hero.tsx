import Image from "next/image";
import HeroImage from "@/public/banner.png";
import { Oswald } from "next/font/google";
import BrowseWorkoutButton from "@/app/components/BrowseWorkoutButton"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

const Hero = () => {
  return (
    <section className="mx-auto mt-8 w-full max-w-350 px-4 sm:px-6 lg:mt-10">
      <div className="md:py-10 grid min-h-115 w-full grid-cols-1 overflow-hidden rounded-xl border border-[#252931] bg-[#15171c] md:grid-cols-2">

        <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-10 md:items-start md:px-12 md:text-left lg:px-16">
        <p className="mb-5 text-xs font-bold tracking-[0.12em] text-[#baff00]">
        WORKOUT LIBRARY
        </p>

    <h1
    className={`${oswald.className} max-w-162 font-bold uppercase text-white text-4xl md:text-5xl`}>
    Train with intent. Log every set.
    </h1>

    <p className="mt-6 max-w-140 text-sm leading-6 text-[#969ba5] sm:text-[15px]">
    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
    into today&apos;s plan, and watch the week&apos;s work add up.
    </p>
    
    <BrowseWorkoutButton/>
    
    </div>

        <div className="relative min-h-75 md:min-h-full">
          <Image
            src={HeroImage} alt="Workout" priority sizes="(max-width: 767px) 100vw, 50vw"
            className="object-contain py-0 md:py-10" fill />
        </div>

      </div>
    </section>
  );
};

export default Hero;