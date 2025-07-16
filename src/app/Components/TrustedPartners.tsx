"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsapFadeUp } from "../Hooks/GsapFadeupAnimation";

const universities = [
  { name: "University of Cambridge", logo: "/Uni-Images/Camrage.png" },
  { name: "University of Oxford", logo: "/Uni-Images/Osford.png" },
  { name: "Princeton University", logo: "/Uni-Images/princeton.png" },
  { name: "Imperial College London", logo: "/Uni-Images/imperial.png" },
  { name: "Queen Mary University of London", logo: "/Uni-Images/mary.png" },
  { name: "University of Edinburgh", logo: "/Uni-Images/eding.png" },
  { name: "University of Bristol", logo: "/Uni-Images/bristol.png" },
  { name: "Stanford University", logo: "/Uni-Images/standford.png" },
];

const TrustedPartner = () => {
  const headingRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  useGsapFadeUp(
    [headingRef.current, titleRef.current, descRef.current, taglineRef.current],
    { y: 30, duration: 0.8, stagger: 0.1, triggerStart: "top 85%" }
  );

  useGsapFadeUp(
    logosRef.current,
    { y: 50, duration: 1, stagger: 0.05, triggerStart: "top 90%" }
  );

  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-white to-slate-50">
      <p ref={headingRef} className="text-sm font-semibold text-gray-500 mb-3 tracking-widest">
        MAIN FEATURES
      </p>
      <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 max-w-2xl mx-auto">
        Trusted by <span className="text-blue-600">Students and Teachers</span> in all Universities.
      </h2>
      <p ref={descRef} className="max-w-xl mx-auto text-gray-600 mb-10">
        Learnrithm has been used by students of over 1000 universities worldwide and has helped students excel in their examinations by 100%.
      </p>
      <div ref={taglineRef} className="text-gray-700 font-medium mb-12">
        Trusted by thousands of students in more than 4,000+ universities
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {universities.map((uni, index) => (
          <div
            key={index}

            className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer"
          >
            <Image
              ref={(el) => {
                logosRef.current[index] = el;
              }}

              src={uni.logo}
              alt={uni.name}
              width={128}
              height={80}
              className="object-contain"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartner;
