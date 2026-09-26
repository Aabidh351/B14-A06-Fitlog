"use client";

import { usePlan } from "@/app/context/PlanContext";

const PlanBadges = () => {
  const { todayPlan, savedWorkouts } = usePlan();

  return (
    <div className="flex items-center gap-5">
      <span className="flex items-center gap-2 text-xs text-[#969ba5]">
        Plan
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#baff00] px-1 text-[10px] font-bold text-black">
          {todayPlan.length}
        </span>
      </span>

      <span className="flex items-center gap-2 text-xs text-[#969ba5]">
        Saved
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#353941] px-1 text-[10px]">
          {savedWorkouts.length}
        </span>
      </span>
    </div>
  );
};

export default PlanBadges;