"use client";

import { Workout } from "@/app/types/workout";
import { usePlan } from "@/app/context/PlanContext";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 rounded-md bg-[#baff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#c8ff33]"
      >
        <span>▣</span>
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveForLater(workout)}
        className="flex items-center gap-2 rounded-md border border-[#353941] px-5 py-3 text-xs text-white transition hover:border-[#666b75]"
      >
        <span>♡</span>
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;