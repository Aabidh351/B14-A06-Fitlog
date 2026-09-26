"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { usePlan } from "@/app/context/PlanContext";
import { Workout } from "@/app/types/workout";

type SortOption = "duration" | "calories" | "rating";

interface MyPlanContentProps {
  workoutsPromise: Promise<Workout[]>;
}

const MyPlanContent = ({
  workoutsPromise,
}: MyPlanContentProps) => {
  const workouts = use(workoutsPromise);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    markAsDone,
    removeFromSaved,
  } = usePlan();

  const currentWorkouts =
    activeTab === "plan" ? todayPlan : savedWorkouts;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.rating - b.rating;
  });

  const exercises = currentWorkouts.length;

  const minutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0c0e]">
      <section className="mx-auto w-full max-w-350 px-4 py-10 sm:px-6 lg:py-14">

        <div>
          <h1 className="text-4xl font-bold uppercase leading-none text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-[#969ba5]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#252931] bg-[#15171c] p-5">
            <p className="text-xs uppercase text-[#969ba5]">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {exercises}
            </p>
          </div>

          <div className="rounded-xl border border-[#252931] bg-[#15171c] p-5">
            <p className="text-xs uppercase text-[#969ba5]">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {minutes}
            </p>
          </div>

          <div className="rounded-xl border border-[#252931] bg-[#15171c] p-5">
            <p className="text-xs uppercase text-[#969ba5]">
              Calories
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {calories}
            </p>
          </div>
        </div>


        <div className="mt-8 flex flex-col gap-4 border-b border-[#252931] sm:flex-row sm:items-center sm:justify-between">

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-4 py-3 text-xs font-bold uppercase ${
                activeTab === "plan"
                  ? "border-b-2 border-[#baff00] text-[#baff00]"
                  : "text-[#969ba5]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-3 text-xs font-bold uppercase ${
                activeTab === "saved"
                  ? "border-b-2 border-[#baff00] text-[#baff00]"
                  : "text-[#969ba5]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 pb-3 sm:pb-2">
            <span className="text-xs uppercase text-[#969ba5]">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="appearance-none rounded-md border border-[#353941] bg-[#15171c] py-2 pl-3 pr-8 text-xs text-white outline-none"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#969ba5]">
                ▼
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {sortedWorkouts.length === 0 ? (
            <div className="py-16 text-center">
              <h2 className="text-2xl font-bold uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-sm text-[#969ba5]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-md bg-[#baff00] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#c8ff33]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-xl border border-[#252931] bg-[#15171c] p-4 sm:flex-row sm:items-center"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-40">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#858b95]">
                    {workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#969ba5]">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                    <span>{workout.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-[#353941] px-4 py-2 text-xs text-white transition hover:border-[#baff00]"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => markAsDone(workout.id)}
                      className="rounded-full bg-[#baff00] border border-[#353941] px-4 py-2 text-xs text-black transition hover:text[#baff00] hover:bg-[#18230d] hover:text-[#baff00]"
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="px-4 py-2 text-xs text-[#969ba5] transition hover:text-[#baff00]"
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default MyPlanContent;