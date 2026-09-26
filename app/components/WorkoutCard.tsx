import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/app/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-[#252931] bg-[#15171c] transition hover:border-[#baff00]"
    >
     
      <div className="relative aspect-[1.9/1] w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">

        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
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
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>{workout.rating}</span>
        </div>

      </div>
    </Link>
  );
};

export default WorkoutCard;