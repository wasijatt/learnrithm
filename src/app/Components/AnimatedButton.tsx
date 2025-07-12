"use client";

import { useRef, useEffect, MouseEvent } from "react";
import { gsap } from "gsap";
import useAnimatedButton from "../Hooks/AnimatedButtonHook";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedButtonProps } from "@/types/AnimatedButtonTypes"; // ⬅️ import from types folder

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  content,
  className = "",
  style = {},
}) => {
  const {
    isHovered,
    translateX,
    translateY,
    setIsHovered,
    handleMouseMove,
    handleMouseLeave,
  } = useAnimatedButton();

  const borderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (borderRef.current) {
      gsap.set(borderRef.current, { width: "100%" });
    }
  }, []);

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
    handleMouseMove(e);

    if (borderRef.current) {
      gsap.to(borderRef.current, {
        width: "25%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeaveMerged = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(false);
    handleMouseLeave(e);

    if (borderRef.current) {
      gsap.to(borderRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const { borderColor = "#151617", ...restStyles } = style;

  return (
    <Link
      href={href}
      className={`inline-block relative px-4 py-2 rounded-3xl transition-all ease-out duration-1000 max-w-fit ${className}`}
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
        ...restStyles,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveMerged}
    >
      <span
        ref={borderRef}
        className="absolute top-0 right-0 h-full w-full border-[2px] rounded-3xl z-0"
        style={{
          height: "100%",
          borderColor,
        }}
      ></span>
      <span className="relative bottom-[3px]">{content}</span>
      <span className="relative z-10 inline-block ml-5 top-[4px]">
        <ArrowRight />
      </span>
    </Link>
  );
};

export default AnimatedButton;
