import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-[#baff00]">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-none text-white">
        Page Not Found!
      </h1>

      <p className="mt-4 max-w-md text-sm text-[#969ba5]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block w-fit rounded-md bg-[#baff00] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#c8ff33]"
      >
        Back to Home
      </Link>
    </div>
  );
}