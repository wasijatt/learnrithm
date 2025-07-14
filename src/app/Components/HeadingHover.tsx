'use client';

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

type HoverTextProps = {
  text: string;
  className?: string;
  radius?: number; // radius in pixels
};

type CharBox = {
  char: string;
  top: number;
  left: number;
  index: number;
};

const HeadingHover: React.FC<HoverTextProps> = ({ text, className = '', radius = 60 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [charPositions, setCharPositions] = useState<CharBox[]>([]);

  useEffect(() => {
    const chars = Array.from(containerRef.current?.querySelectorAll('span.char') || []);
    const updated: CharBox[] = chars.map((charEl, index) => {
      const rect = charEl.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();
      return {
        char: charEl.textContent || '',
        top: rect.top - containerRect.top,
        left: rect.left - containerRect.left,
        index,
      };
    });
    setCharPositions(updated);
  }, [text]);

  const getDistance = (a: CharBox, b: CharBox) => {
    return Math.sqrt(
      Math.pow(a.top - b.top, 2) + Math.pow(a.left - b.left, 2)
    );
  };

  return (
    <div
      ref={containerRef}
      className={clsx('flex flex-wrap leading-[1.7] md:leading-[2]', className)}
    >
      {text.split('').map((char, index) => {
        const isActive =
          hoveredIndex !== null &&
          getDistance(charPositions[index] || { top: 0, left: 0, index, char: '' }, charPositions[hoveredIndex]) <=
            radius;

        return (
         <span
  key={index}
  className={clsx(
    "char text-xl md:text-2xl inline-block transition-all duration-300",
    isActive
      ? "text-black scale-125 font-extrabold p-[1px]"
      : "text-black font-normal"
  )}
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
>
  {char === " " ? "\u00A0" : char}
</span>

        );
      })}
    </div>
  );
};

export default HeadingHover;
