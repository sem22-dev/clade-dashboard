
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Briefcase, ChevronDown, MessageSquare, X } from 'lucide-react';

export default function Navbar2() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Jobs', href: '/' },
    { name: 'Messages', href: '/' },
    { name: 'Payments', href: '/' },
  ];

  return (
    <div className={`${pathname === '/authentication' || pathname === '/authentication/login' || pathname === '/authentication/login/reset' ? "hidden" : "inline"}`}>
      {/* Larger screen navigation */}
      <nav className=" px-2 sm:px-6 lg:px-12 hidden md:flex py-3 items-center justify-between border-b">
        <div className='bg-[#E7E7E7] p-3 text-[#DC4A2D]'>
            Logo
        </div>
        <div className={`items-center border p-2 rounded-full text-sm space-x-10 hidden md:flex md:space-x-10`}>
            <div className="flex bg-[#DC4A2D] rounded-full gap-2 text-white cursor-pointer p-2 items-center">
                   <Briefcase size={20}/>
                    Jobs
                </div>

                <div className="flex rounded-full gap-2 text-[#B0B0B0] hover:text-[#DC4A2D] cursor-pointer p-2 items-center">
                   <Image src={'./message-1.svg'} width={100} height={100} alt='mesg' className=' w-5' />
                    Messages
                </div>

                <div className="flex rounded-full gap-2 text-[#B0B0B0] hover:text-[#DC4A2D] cursor-pointer p-2 items-center">
                   <Image src={'./coins-hand.svg'} width={100} height={100} alt='mesg' className=' w-5' />
                    Payments
                </div>
        </div>
        <div className="flex gap-3 items-center">
                <Image src={'/bell1.svg'} width={100} height={100} alt="bell" className=" w-6 h-6"/>
                <div className="flex items-center gap-2">
                    <Image src={'/icon.png'} width={100} height={100} alt="bell" className="w-6 h-6"/>
                    <ChevronDown size={15}/>
                </div>
            </div>
      </nav>

      {/* Smaller screens navigation */}
      <nav style={{ backdropFilter: 'blur(6.7px)' }} className={`shadow-md z-50 flex w-full md:hidden justify-between items-center sticky py-4 top-0 px-4`}>
      <div className='bg-[#E7E7E7] p-2 text-[#DC4A2D]'>
            Logo
        </div>
        <div onClick={() => setShowMenu(true)} className="p-1">
          {/* Hamburger Icon */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </div>
      </nav>

      {showMenu && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex">
          <div style={{ backdropFilter: 'blur(5.7px)' }} className=" bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
          <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 rounded-full p-1 bg-white duration-300 text-black hover:bg-[#bebcbc]">
            <X size={23} />
          </button>
          <div className="bg-white rounded-lg p-4 text-black text-[20px] w-full mx-4 mt-14 z-10 h-fit">
            {navItems.map((item, index) => (
              <Link key={index} className="block py-4 border-b text-sm" onClick={() => setShowMenu(false)} href={item.href}>
                {item.name}
              </Link>
            ))}
            <div className="text-center py-3">
              <button
                className="text-white bg-[#DC4A2D] text-sm py-2  px-6 w-full rounded-lg hover:brightness-110"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
