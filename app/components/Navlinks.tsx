'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 ${
              pathname === '/'
                ? 'bg-[#18230d] text-[#baff00]' 
                : 'text-[#969ba5] hover:text-white'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 ${
              pathname === '/my-plan'
                ? 'bg-[#18230d] text-[#baff00]' 
                : 'text-[#969ba5] hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </div>
    );
};

export default Navlinks;
