'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import useAnimatedButton from '../Hooks/AnimatedButtonHook';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const { translateX, translateY, handleMouseMove, handleMouseLeave } = useAnimatedButton();
  const logoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const dynamicTransform = {
    transform: `translate(${translateX * 0.09}px, ${translateY * 0.09}px)`,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(logoRef.current, {
        x: -40,
        opacity: 0,
        duration: 1,
      }).from(
        buttonRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        '-=0.8'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full  bg-[#14216d]/30 backdrop-blur-xl border-b border-white/10 z-50 px-6 md:px-12 py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          ref={logoRef}
       
          className="text-white text-xl font-bold"
        >
          <Image
          
            src="/Full logo.png"
            alt="Learnrithm Logo"
            width={150}
            height={200}
            className="w-[100px] md:w-full transition-transform duration-300 ease-out will-change-transform"
          />
        </div>

        {/* CTA Button */}
        <div
          className="max-w-fit"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            ref={buttonRef}
            href="/get-started"
            className="relative inline-flex items-center justify-center text-white text-xl font-medium px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-lg overflow-hidden"
          >
            <span
              style={dynamicTransform}
              className="block transition-transform duration-300 ease-out will-change-transform"
            >
              Get Started
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
