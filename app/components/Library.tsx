import { getWorkouts } from "@/app/lib/api";
import WorkoutCard from "./WorkoutCard";
import { Workout } from "../types/workout";

interface LibraryProps {
  id: string;
}

const Library = async ({ id }: LibraryProps) => {
  const workouts = await getWorkouts();

  return (
    <section id={id} className="mx-auto w-full max-w-350 px-4 py-10 sm:px-6 lg:py-14">

      <div className="mb-7">
        <h2 className="text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-[#969ba5]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout: Workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>

    </section>
  );
};

export default Library;