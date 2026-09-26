const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();

  return data;
};

export const getWorkout = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data = await response.json();

  return data;
};