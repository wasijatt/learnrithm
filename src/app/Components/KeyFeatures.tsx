// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     icon: '/icons/ai.svg',
//     title: 'AI-Powered Teaching',
//   },
//   {
//     icon: '/icons/quizzes.svg',
//     title: 'Interactive Quizzes',
//   },
//   {
//     icon: '/icons/multilingual.svg',
//     title: 'Multilingual Support',
//   },
//   {
//     icon: '/icons/visual.svg',
//     title: 'Visual Aids and Resources',
//   },
//   {
//     icon: '/icons/upload.svg',
//     title: 'Study Material Upload',
//   },
//   {
//     icon: '/icons/progress.svg',
//     title: 'Progress Tracking',
//   },
//   {
//     icon: '/icons/path.svg',
//     title: 'Personalized Learning Path',
//   },
// ];

// const KeyFeatures = () => {
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     cardsRef.current.forEach((card, i) => {
//       gsap.fromTo(
//         card,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: i * 0.15,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 90%',
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto text-center">
//       <p className="text-[#0E65F0] font-medium text-sm mb-2">● KEY FEATURES</p>
//       <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed mb-6">
//         <span className="font-bold">Learnrithm AI</span> is a user-friendly learning platform that makes studying easier and more fun. <br className="hidden md:block" /> It has <span className="font-bold">smart tools</span> that let you <span className="font-bold">customize your lessons</span>, helping you learn in a way that works best for you. With Learnrithm AI, you can get the help you need to <span className="font-bold">succeed in school!</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             ref={(el) => (cardsRef.current[idx] = el!)}
//             className="bg-[#F4E6E2] p-6 rounded-xl flex flex-col items-start gap-4 shadow-md hover:shadow-xl transition-shadow duration-300 h-44 justify-center"
//           >
//             <div className="bg-[#0E65F0] p-2 rounded-full">
//               <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
//             </div>
//             <h4 className="font-semibold text-left text-sm md:text-base text-black">
//               {feature.title}
//             </h4>
//           </div>
//         ))}
//         <div className="flex items-center justify-center">
//           <button className="bg-[#F4E6E2] hover:bg-[#f3d9d2] transition p-3 rounded-full">
//             <svg width="18" height="18" fill="#0E65F0" viewBox="0 0 24 24">
//               <path d="M13 5l7 7-7 7M5 12h14" stroke="#0E65F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;
