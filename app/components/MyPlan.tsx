"use client";

import { Suspense } from "react";
import { Workout } from "@/app/types/workout";
import MyPlanContent from "@/app/components/MyPlanContent";
import Loading from "./Loading";

interface MyPlanProps {
  workoutsPromise: Promise<Workout[]>;
}

const MyPlan = ({ workoutsPromise }: MyPlanProps) => {
  return (
    <Suspense
      fallback={<Loading/>}>
      <MyPlanContent workoutsPromise={workoutsPromise} />
    </Suspense>
  );
};

export default MyPlan;