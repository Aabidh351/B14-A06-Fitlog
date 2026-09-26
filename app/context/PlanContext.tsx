"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Workout } from "@/app/types/workout";
import toast from "react-hot-toast";

interface PlanContextType {
  todayPlan: Workout[];
  savedWorkouts: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveForLater: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

interface PlanProviderProps {
  children: ReactNode;
}

export const PlanProvider = ({ children }: PlanProviderProps) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    if (todayPlan.some((item) => item.id === workout.id)) {
      toast.error("Workout is already in today's plan");
      return;
    }

    if (todayPlan.length >= 5) {
      toast.error("Today's plan can have up to five workouts");
      return;
    }

    setTodayPlan((current) => [...current, workout]);

    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    setTodayPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );

    toast.success("Removed from today's plan");
  };

  const saveForLater = (workout: Workout) => {
    if (savedWorkouts.some((item) => item.id === workout.id)) {
      toast.error("Workout is already saved");
      return;
    }

    setSavedWorkouts((current) => [...current, workout]);

    toast.success("Saved for later");
  };

  const removeFromSaved = (id: number) => {
    setSavedWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );

    toast.success("Removed from saved");
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        saveForLater,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};