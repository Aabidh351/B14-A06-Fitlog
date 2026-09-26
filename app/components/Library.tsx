import Image from "next/image";
import Link from "next/link";
import { getWorkouts } from "@/app/lib/api";

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="mx-auto w-full max-w-350 px-4 py-10 sm:px-6 lg:py-14">
      
      <div className="mb-7">
        <h2 className="font-bold text-3xl uppercase leading-none text-white sm:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-[#969ba5]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout: any) => (
          <Link
            href={`/workouts/${workout.id}`}
            key={workout.id}
            className="group overflow-hidden rounded-xl border border-[#252931] bg-[#15171c] transition hover:border-[#baff00]"
          >

            <div className="relative aspect-[1.9/1] w-full overflow-hidden">
              <Image
                src={workout.image}
                alt={workout.name}
                fill loading="eager"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover duration-300"
              />
            </div>

            <div className="p-5">

              <div className="mb-4 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold uppercase leading-none text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold uppercase leading-tight text-white">
                {workout.name}
              </h3>

              <p className="mt-1 text-xs text-[#858b95]">
                {workout.equipment}
              </p>

              <div className="my-4 h-px bg-[#292d34]" />

              <div className="flex items-center gap-4 text-xs text-[#969ba5]">
                <span className="flex items-center gap-1.5">
                  <span>◷</span>
                  {workout.duration} min
                </span>

                <span className="flex items-center gap-1.5">
                  <span>♨</span>
                  {workout.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1.5">
                  <span>☆</span>
                  {workout.rating}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Library;