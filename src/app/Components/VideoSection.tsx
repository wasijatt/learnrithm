'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
 
  const videoRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
   
      gsap.from(videoRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    }, sectionRef);

  gsap.from('.feature-item', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
         
        },
      });


    return () => ctx.revert();
  }, []);


  const features = [
    'Pick any topic — school, tech, hobbies, exams',
    'Auto-generated videos, lessons, images & quizzes',
    'Earn verifiable certificates',
    'No tech skills needed — just type what you want to learn',
  ];


  return (
    <section ref={sectionRef} className=" w-full  md:w-[90]  shadow-md transition-shadow px-6 md:px-20 py-10 bg-[#ececec] secondary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold   leading-tight">
             Learn Anything. Fast.
          </h2>
          <p className="  text-lg">
            In this video, you’ll see how to build your own custom course in seconds using <strong>Learnrithm AI</strong> — your AI-powered learning assistant.
          </p>
        <ul ref={listRef} className="space-y-1 mt-4">
      {features.map((text, index) => (
        <li
          key={index}
          className="feature-item flex items-start gap-3 p-4 rounded-xl"
        >
          <CheckCircle className="secondary min-w-[20px]" size={24} />
          <span className="secondary dark:text-gray-200 text-base">{text}</span>
        </li>
      ))}
    </ul>
   
    <AnimatedButton
      className="hidden mx-auto  text-[#151617] bg-white shadow-xl  font-bold"
      href="/"
      content="Start learning smarter "
    />
        </div>

        {/* Right Video */}
        <div
          ref={videoRef}
          className="md:w-1/2 w-full aspect-video shadow-2xl rounded-4xl rounded-bl-[0px] overflow-hidden"
        >
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/2EaBtnmqIq8?autoplay=0&mute=0&vq=hd1080"
            title="Learnrithm AI Video"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

