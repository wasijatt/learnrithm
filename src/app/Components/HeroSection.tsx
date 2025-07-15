'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import { ArrowRight } from "lucide-react";
import useAnimatedButton from '../Hooks/AnimatedButtonHook';
import SplashCursor from './SplashCursor';


const HeroSection = () => {


    const avatars = [
        "https://i.pravatar.cc/100?img=4",
        "https://i.pravatar.cc/100?img=6",
        "https://i.pravatar.cc/100?img=10",
    ]
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subTextRef = useRef<HTMLParagraphElement | null>(null);

    const buttonRef = useRef<HTMLDivElement | null>(null);
    const floatRef1 = useRef<HTMLDivElement | null>(null);
    const floatRef2 = useRef<HTMLDivElement | null>(null);
   

    


    const {
        translateX,
        translateY,
        handleMouseMove,
        handleMouseLeave,
    } = useAnimatedButton();
    useEffect(() => {
        // Animate counter
      

        // GSAP Animations
        const tl = gsap.timeline({ delay: 0.3 });
        tl.from(headingRef.current, { y: 80, opacity: 0, duration: 1, ease: 'power3.out' })
            .from(subTextRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
            .from(buttonRef.current, { scale: 0.5, opacity: 0, duration: 0.8 }, "-=0.4");

        // Floating blobs
        gsap.to(floatRef1.current, {
            y: 20,
            x: 10,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });
       

        gsap.to(floatRef2.current, {
            y: -15,
            x: -10,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });

     
    }, []);

    const dynamicTransform = {
        transform: `translate(${translateX * 0.5}px, ${translateY * 0.5}px)`,
    };

    return (
        <section  id='hero' className="  relative w-full  md:min-h-screen bg-black text-white flex py-[30%] md:py-[10%]  justify-center px-6 md:px-10 overflow-hidden">
            {/* Floating 3D Blob 1 */}
            <div
                ref={floatRef1}
                className="absolute top-[-60px] left-[-40px] w-72 h-72 bg-gradient-to-tr blur-[150px] from-purple-700 to-indigo-500 rounded-full opacity-40 z-0"
            />
            <SplashCursor containerId='#hero' />
         

            {/* Floating 3D Blob 2 */}
            <div
                ref={floatRef2}
                className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-gradient-to-br from-blue-600 rounded-full blur-[150px] opacity-30 z-0"
            />


            <div className="relative  !top-0 z-10  w-full flex flex-col  items-start justify-center  md:space-x-10 md:w-[80%]">
                <p
                    ref={subTextRef}
                    className="text-gray-400 max-w-82 text-base md:text-lg leading-relaxed absolute top-10 hidden md:block right-20"
                >Learnrithm AI makes learning simple turning complex topics into  personalized insights to help you grow faster.
                </p>


                <div
                    ref={headingRef}
                    className="text-white leading-tight text-balance -pt-10 md:pt-[10%] space-y-6 "
                > 
                    <h1 className="text-4xl md:text-7xl font-neue uppercase ">
                        Learning doesn&apos;t <br /> have to be  <span className='inline md:hidden font-spring ml-2'> Hard</span>
                    </h1>

                    <div className="flex items-center flex-wrap gap-6 md:gap-10">
                        <h2 className="md:text-7xl font-spring font-bold -pt-3 hidden md:inline text-white">
                            Hard
                        </h2>

  <p
                    ref={subTextRef}
                    className="text-gray-400  text-base  leading-relaxed   md:hidden block "
                >Learnrithm AI makes learning simple turning complex topics into  personalized insights to help you grow faster.
                </p>

                        <div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="flex items-center gap-4 py-4 px-6 text-lg md:text-xl rounded-3xl rounded-bl-none bg-blue-600/2 backdrop-blur-3xl shadow-[0_8px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(255,255,255,0.2)] cursor-pointer"
                        >
                            {/* Floating Avatars */}
                            <div
                                style={dynamicTransform}
                                className="flex -space-x-3 transition-transform ease-out duration-900"
                            >
                                {avatars.map((avatar, idx) => (
                                    <Image
                                        key={idx}
                                        src={avatar}
                                        width={44}
                                        height={44}
                                        alt={`avatar-${idx}`}
                                        className="rounded-full border-2 border-black shadow-md hover:scale-105 transition-transform duration-300"
                                    />
                                ))}
                            </div>

                            {/* Call-to-action */}
                            <div
                                style={dynamicTransform}
                                className="flex items-center gap-2 font-semibold text-white capitalize transition-transform ease-out duration-900">
                                <span className="">Explore</span>
                                <ArrowRight size={52} className="bg-white/10 backdrop-blur p-2 rounded-full text-white" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HeroSection;



