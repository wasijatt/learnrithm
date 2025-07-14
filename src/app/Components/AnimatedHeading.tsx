'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeadingProps {
  mainText: string;
  subText: string;
  className: string;
}

const AnimatedHeading: React.FC<HeadingProps> = ({ mainText, subText , className }) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const letters = headingRef.current.querySelectorAll('.letter');

    gsap.set(letters, { y: 20, opacity: 0 });

    gsap.to(letters, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 70%',
        once: true,
      },
    });
  }, []);

  const renderLetters = (text: string) =>
    [...text].map((char, idx) => (
      <span key={idx} className="inline-block letter whitespace-pre">
        {char}
      </span>
    ));

  return (
    <h1
      ref={headingRef}
      className={` font-neueMachina font-normal text-xl mt-4 md:text-2xl  leading-none  ${className}`}
    >
      {renderLetters(mainText)}
      <br />
      <span className="ml-16 fontspring">{renderLetters(subText)}</span>
    </h1>
  );
};

export default AnimatedHeading;
