"use client";

import { Suspense } from "react";
import { Workout } from "@/app/types/workout";
import MyPlanContent from "@/app/components/MyPlanContent";

interface MyPlanProps {
  workoutsPromise: Promise<Workout[]>;
}

const MyPlan = ({ workoutsPromise }: MyPlanProps) => {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#0b0c0e]">
          <div className="mx-auto w-full max-w-350 px-4 py-16 text-center sm:px-6">
            <p className="text-sm text-[#969ba5]">
              Loading workouts...
            </p>
          </div>
        </main>
      }
    >
      <MyPlanContent workoutsPromise={workoutsPromise} />
    </Suspense>
  );
};

export default MyPlan;