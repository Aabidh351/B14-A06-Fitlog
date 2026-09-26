import MyPlan from "@/app/components/MyPlan";
import { getWorkouts } from "../lib/api";

const MyPlanPage = () => {
  const workoutsPromise = getWorkouts();

  return <MyPlan workoutsPromise={workoutsPromise} />;
};

export default MyPlanPage;