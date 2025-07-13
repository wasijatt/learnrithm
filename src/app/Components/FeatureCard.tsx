
import React, { MouseEvent } from 'react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import useAnimatedButton from '../Hooks/AnimatedButtonHook';

type FeatureCardProps = {
  title: string;
  Icon: LucideIcon;
  bgImage: string;
  innerRef?: (el: HTMLDivElement | null) => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, Icon, bgImage, innerRef }) => {
  const {
    translateX,
    translateY,
    handleMouseMove,
    handleMouseLeave,
  } = useAnimatedButton();
 const dynamicTransform = {
    transform: `translate(${translateX * 0.05}px, ${translateY * 0.05}px)`,
  };
  return (
    <div
      ref={innerRef}
      className="relative overflow-hidden rounded-3xl rounded-bl-[0px]  shadow-md hover:shadow-xl transition-shadow duration-900 h-[300px] flex flex-col justify-end z-0"
      onMouseMove={(e: MouseEvent<HTMLDivElement>) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image with animation */}
      <div
        className="absolute inset-0 z-0 transition-transform hover:scale-105 duration-300 ease-out"
       style={dynamicTransform}
      >
        <Image
          src={bgImage}
          alt={title}
          layout="fill"
          objectFit="cover"
        
          className="  "
        />
      </div>

      {/* Icon and title */}
      <div
        className="relative z-10 flex items-center gap-4 p-6 bg-[#2f2f2f14] backdrop-blur-3xl transition-transform duration-300 ease-out overflow-hidden"
      
      >
        <div
          className="primary-bg  rounded-2xl rounded-bl-[0px] transition-transform duration-300 ease-out"
           
        >
          <Icon   className="text-white  w-10 h-10 p-2" />
        </div>
        <h4  className="font-semibold text-white text-left text-sm md:text-xl">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default FeatureCard;
