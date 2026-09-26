import Link from "next/link";

const BrowseWorkoutButton = () => {
  return (
    <Link
      href="#workout-library"
      className="mt-7 inline-block w-fit rounded-md bg-[#baff00] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#c8ff33]"
    >
      Browse Workouts
    </Link>
  );
};

export default BrowseWorkoutButton;
