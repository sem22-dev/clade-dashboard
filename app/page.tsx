
"use client"
import Job from '@/components/job';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Home() {
  const navItems = ["Job Preview", "Applicants", "Match", "Messages"];
  const pathname = usePathname();

  return (
    <main className=''>
     <div className='border-b'>
      <div className="px-8 md:px-24">
          <nav className="flex items-center gap-14 text-sm py-3">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className={`text-888888 relative ${pathname === '/' && item === 'Job Preview' ? 'text-DC4A2D border-highlight cursor-pointer' : ' hover:text-DC4A2D cursor-pointer'}`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
     </div>

      <Job />
    </main>
  );
}
