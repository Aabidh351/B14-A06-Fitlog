import Image from "next/image";
import { Oswald } from "next/font/google";
import { getWorkout } from "@/app/lib/api";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;
  const workout = await getWorkout(Number(id));

  return (
    <main className="min-h-screen bg-[#0b0c0e]">
      <section className="mx-auto w-full max-w-350 px-4 py-8 sm:px-6 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">

          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">

            <h1
              className={`${oswald.className} text-4xl uppercase leading-none text-white sm:text-5xl`}
            >
              {workout.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#969ba5] sm:text-[15px]">
              {workout.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-[#252931] bg-[#15171c]">

              <div className="flex items-center justify-between border-b border-[#252931] px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Equipment
                </span>
                <span className="text-sm text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252931] px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Difficulty
                </span>
                <span className="text-sm text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252931] px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Sets
                </span>
                <span className="text-sm text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252931] px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Reps
                </span>
                <span className="text-sm text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252931] px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Duration
                </span>
                <span className="text-sm text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252931] px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Calories
                </span>
                <span className="text-sm text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-5 py-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#969ba5]">
                  Rating
                </span>
                <span className="text-sm text-white">
                  {workout.rating}
                </span>
              </div>

            </div>

            <div className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-3 text-sm leading-6 text-[#969ba5]"
                  >
                    <span className="shrink-0 text-[#969ba5]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <button className="flex items-center gap-2 rounded-md bg-[#baff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#c8ff33]">
                <span>▣</span>
                Add to today&apos;s plan
              </button>

              <button className="flex items-center gap-2 rounded-md border border-[#353941] px-5 py-3 text-xs text-white transition hover:border-[#666b75]">
                <span>♡</span>
                Save for later
              </button>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;