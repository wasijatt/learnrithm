'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterData {
  label: string;
  value: number;
  suffix?: string;
}

const counters: CounterData[] = [
  { label: 'Users improved their grades within one month', value: 94, suffix: '%' },
  { label: 'Faster learning compared to traditional methods', value: 3.2, suffix: 'x' },
  { label: 'Users feel more confident about exams', value: 87, suffix: '%' },
];

const ResultCounter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    numberRefs.current = numberRefs.current.slice(0, counters.length);

    numberRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: counters[i].value,
          duration: 2,
          ease: 'power3.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            const val = +el.innerText;
            el.innerText = counters[i].suffix
              ? `${val.toFixed(1)}${counters[i].suffix}`
              : `${val.toFixed(0)}`;
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-5xl mx-auto px-6 py-20 bg-gradient-to-br  rounded-3xl  text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
         Real Results from Learnrithm Students
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-xl p-6 primary">
            <span
              ref={(el) => el && (numberRefs.current[index] = el)}
              className="text-2xl md:text-4xl  font-extrabold "
            >
              0
            </span>
            <p className=" max-w-xs text-sm md:text-lg">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ResultCounter;
