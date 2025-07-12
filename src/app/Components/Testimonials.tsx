// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight, Star, Quote, Heart, Sparkles, Trophy, Zap } from 'lucide-react';

// const TestimonialsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const descriptionRef = useRef<HTMLParagraphElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   const navigationRef = useRef<HTMLDivElement>(null);
//   const centerRef = useRef<HTMLDivElement>(null);
//   const [currentRotation, setCurrentRotation] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [activeCard, setActiveCard] = useState(0);
//   const [autoRotate, setAutoRotate] = useState(true);

//   const testimonials = [
//     {
//       name: "Sarah Mitchell",
//       role: "Senior UX Designer",
//       company: "TechCorp",
//       testimonial: "ByteSpace transformed my career trajectory completely. The interactive courses and mentorship programs helped me land my dream job at a Fortune 500 company!",
//       rating: 5,
//       color: "from-rose-400 via-pink-500 to-rose-600",
//       avatar: "SM",
//       icon: Heart,
//       achievement: "Promoted to Senior Designer"
//     },
//     {
//       name: "James Rodriguez",
//       role: "Full Stack Developer", 
//       company: "StartupLab",
//       testimonial: "The hands-on projects and real-world applications on ByteSpace are incredible. I built 3 production apps during my learning journey!",
//       rating: 5,
//       color: "from-blue-400 via-indigo-500 to-blue-600",
//       avatar: "JR",
//       icon: Zap,
//       achievement: "Built 3 Production Apps"
//     },
//     {
//       name: "Alexandra Chen",
//       role: "Product Manager",
//       company: "InnovateCo",
//       testimonial: "ByteSpace's community-driven approach and expert-led workshops gave me the confidence to transition from engineering to product management.",
//       rating: 5,
//       color: "from-purple-400 via-violet-500 to-purple-600",
//       avatar: "AC",
//       icon: Trophy,
//       achievement: "Successful Career Pivot"
//     },
//     {
//       name: "Michael Thompson",
//       role: "Data Scientist",
//       company: "DataTech",
//       testimonial: "The AI and machine learning courses are cutting-edge. I went from zero to deploying ML models in production within 6 months!",
//       rating: 5,
//       color: "from-emerald-400 via-teal-500 to-emerald-600",
//       avatar: "MT",
//       icon: Sparkles,
//       achievement: "ML Models in Production"
//     },
//     {
//       name: "Emily Johnson",
//       role: "Growth Marketing Lead",
//       company: "GrowthHQ",
//       testimonial: "The marketing strategies I learned increased our company's conversion rate by 340%. ByteSpace delivers real, measurable results!",
//       rating: 5,
//       color: "from-amber-400 via-orange-500 to-amber-600",
//       avatar: "EJ",
//       icon: Trophy,
//       achievement: "340% Conversion Increase"
//     },
//     {
//       name: "David Park",
//       role: "Software Architect",
//       company: "CloudSoft",
//       testimonial: "The advanced system design courses and peer learning sessions helped me architect scalable solutions for millions of users.",
//       rating: 5,
//       color: "from-cyan-400 via-blue-500 to-cyan-600",
//       avatar: "DP",
//       icon: Zap,
//       achievement: "Architected Million-User Systems"
//     }
//   ];

//   const radius = 400;
//   const angleStep = 60;

//   // Auto-rotation effect
//   useEffect(() => {
//     if (!autoRotate) return;
    
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         rotateCarousel('next');
//       }
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [autoRotate, isAnimating]);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//     script.onload = () => {
//       if (window.gsap) {
//         initializeAnimations();
//       }
//     };
//     document.head.appendChild(script);

//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   const initializeAnimations = () => {
//     const gsap = window.gsap;
    
//     // Set initial states
//     gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], { 
//       opacity: 0, 
//       y: 50 
//     });
//     gsap.set(carouselRef.current, { 
//       opacity: 0, 
//       scale: 0.8 
//     });
//     gsap.set(navigationRef.current, { 
//       opacity: 0, 
//       y: 30 
//     });
//     gsap.set(centerRef.current, { 
//       opacity: 0, 
//       scale: 0.5,
//       rotation: -180 
//     });

//     gsap.set(cardsRef.current, { 
//       opacity: 0, 
//       scale: 0.3,
//       rotation: 15
//     });

//     positionCards();

//     // Entrance animation
//     const tl = gsap.timeline({ delay: 0.5 });
    
//     tl.to(subtitleRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     })
//     .to(titleRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power3.out"
//     }, "-=0.5")
//     .to(descriptionRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     }, "-=0.6")
//     .to(carouselRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 1.2,
//       ease: "back.out(1.7)"
//     }, "-=0.4")
//     .to(centerRef.current, {
//       opacity: 1,
//       scale: 1,
//       rotation: 0,
//       duration: 1.5,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(cardsRef.current, {
//       opacity: 1,
//       scale: 1,
//       rotation: 0,
//       duration: 1.2,
//       ease: "back.out(1.7)",
//       stagger: 0.15
//     }, "-=1.0")
//     .to(navigationRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     }, "-=0.6");

//     // Continuous center rotation
//     gsap.to(centerRef.current, {
//       rotation: 360,
//       duration: 20,
//       ease: "none",
//       repeat: -1
//     });

//     // Add hover animations
//     cardsRef.current.forEach((card, index) => {
//       if (card) {
//         card.addEventListener('mouseenter', () => {
//           setAutoRotate(false);
//           gsap.to(card, {
//             scale: index === activeCard ? 1.35 : 1.2,
//             rotation: index === activeCard ? 5 : 2,
//             duration: 0.4,
//             ease: "power2.out",
//             zIndex: 100
//           });
//         });

//         card.addEventListener('mouseleave', () => {
//           setAutoRotate(true);
//           gsap.to(card, {
//             scale: index === activeCard ? 1.25 : 1,
//             rotation: 0,
//             duration: 0.4,
//             ease: "power2.out",
//             zIndex: index === activeCard ? 10 : 1
//           });
//         });
//       }
//     });
//   };

//   const positionCards = () => {
//     const gsap = window.gsap;
    
//     cardsRef.current.forEach((card, index) => {
//       if (card) {
//         const angle = (index * angleStep) + currentRotation;
//         const radian = (angle * Math.PI) / 180;
//         const x = Math.cos(radian) * radius;
//         const y = Math.sin(radian) * radius;
        
//         // Enhanced active card styling
//         const scale = index === activeCard ? 1.25 : 1;
//         const zIndex = index === activeCard ? 10 : 1;
//         const brightness = index === activeCard ? 1.1 : 0.85;
        
//         gsap.set(card, {
//           x: x,
//           y: y,
//           scale: scale,
//           zIndex: zIndex,
//           filter: `brightness(${brightness}) saturate(${index === activeCard ? 1.2 : 0.8})`
//         });
//       }
//     });
//   };

//   const rotateCarousel = (direction: 'next' | 'prev') => {
//     if (isAnimating) return;
//     setIsAnimating(true);
    
//     const gsap = window.gsap;
//     const rotationAmount = direction === 'next' ? -angleStep : angleStep;
//     const newRotation = currentRotation + rotationAmount;
    
//     setCurrentRotation(newRotation);
    
//     const newActiveCard = direction === 'next' 
//       ? (activeCard + 1) % testimonials.length
//       : (activeCard - 1 + testimonials.length) % testimonials.length;
//     setActiveCard(newActiveCard);

//     // Animate cards with enhanced effects
//     cardsRef.current.forEach((card, index) => {
//       if (card) {
//         const angle = (index * angleStep) + newRotation;
//         const radian = (angle * Math.PI) / 180;
//         const x = Math.cos(radian) * radius;
//         const y = Math.sin(radian) * radius;
        
//         const scale = index === newActiveCard ? 1.25 : 1;
//         const zIndex = index === newActiveCard ? 10 : 1;
//         const brightness = index === newActiveCard ? 1.1 : 0.85;
//         const rotation = index === newActiveCard ? 2 : 0;
        
//         gsap.to(card, {
//           x: x,
//           y: y,
//           scale: scale,
//           zIndex: zIndex,
//           rotation: rotation,
//           filter: `brightness(${brightness}) saturate(${index === newActiveCard ? 1.2 : 0.8})`,
//           duration: 0.8,
//           ease: "power2.inOut",
//           onComplete: () => {
//             if (index === 0) setIsAnimating(false);
//           }
//         });
//       }
//     });

//     // Button animation
//     const button = direction === 'next' 
//       ? navigationRef.current?.querySelector('.next-btn')
//       : navigationRef.current?.querySelector('.prev-btn');
    
//     if (button) {
//       gsap.to(button, {
//         scale: 0.9,
//         duration: 0.1,
//         yoyo: true,
//         repeat: 1,
//         ease: "power2.inOut"
//       });
//     }
//   };

//   const addToRefs = (el: HTMLDivElement | null, index: number) => {
//     if (el) {
//       cardsRef.current[index] = el;
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
//         <div className="absolute inset-0 opacity-30">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`,
//                 animationDuration: `${2 + Math.random() * 2}s`
//               }}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div 
//         ref={sectionRef}
//         className="relative z-10 min-h-screen"
//         style={{
//           background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
//           backdropFilter: 'blur(20px)',
//           borderRadius: '50px 50px 0 0',
//           boxShadow: '0 -20px 40px rgba(0,0,0,0.1)'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <p 
//               ref={subtitleRef}
//               className="text-sm font-bold tracking-wider mb-6 uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//             >
//               ✨ Success Stories That Inspire ✨
//             </p>
//             <h2 
//               ref={titleRef}
//               className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8"
//               style={{ 
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 letterSpacing: '-0.02em'
//               }}
//             >
//               REAL PEOPLE,<br />
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 REAL RESULTS
//               </span>
//             </h2>
//             <p 
//               ref={descriptionRef}
//               className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
//             >
//               Join thousands of professionals who've transformed their careers with ByteSpace. 
//               These aren't just testimonials—they're career transformation stories.
//             </p>
//           </div>

//           {/* Enhanced Circular Carousel */}
//           <div className="relative flex justify-center items-center mb-16" style={{ height: '950px' }}>
//             <div 
//               ref={carouselRef}
//               className="relative"
//               style={{ 
//                 width: `${radius * 2.5}px`, 
//                 height: `${radius * 2.5}px`
//               }}
//             >
//               {/* Enhanced Center Element */}
//               <div 
//                 ref={centerRef}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <div className="relative">
//                   {/* Outer rotating ring */}
//                   <div className="w-40 h-40 rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-400 animate-spin-slow">
//                     <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-white shadow-2xl">
//                       <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
//                         <div className="text-center text-white">
//                           <div className="text-2xl font-bold">{activeCard + 1}</div>
//                           <div className="text-xs">of {testimonials.length}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Floating achievement badge */}
//                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-yellow-400">
//                     <div className="flex items-center space-x-1">
//                       <Trophy className="w-4 h-4 text-yellow-500" />
//                       <span className="text-xs font-bold text-gray-700">Featured</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Progress ring */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#e5e7eb"
//                     strokeWidth="2"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="url(#gradient)"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeDasharray={`${(activeCard + 1) * (283 / testimonials.length)} 283`}
//                     className="transition-all duration-1000"
//                   />
//                   <defs>
//                     <linearGradient id="gradient">
//                       <stop offset="0%" stopColor="#3b82f6" />
//                       <stop offset="100%" stopColor="#8b5cf6" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </div>

//               {/* Testimonial Cards */}
//               {testimonials.map((testimonial, index) => {
//                 const IconComponent = testimonial.icon;
//                 const isActive = index === activeCard;
                
//                 return (
//                   <div
//                     key={index}
//                     ref={(el) => addToRefs(el, index)}
//                     className="absolute cursor-pointer"
//                     style={{
//                       width: '380px',
//                       height: '460px',
//                       transform: 'translate(-50%, -50%)',
//                       left: '50%',
//                       top: '50%'
//                     }}
//                   >
//                     <div className="w-full h-full relative">
//                       <div 
//                         className={`bg-white rounded-3xl p-8 shadow-2xl border-2 w-full h-full relative overflow-hidden transition-all duration-500 ${
//                           isActive 
//                             ? 'border-blue-400 shadow-blue-500/25' 
//                             : 'border-gray-200'
//                         }`}
//                         style={{
//                           background: isActive 
//                             ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)'
//                             : 'rgba(255, 255, 255, 0.85)',
//                           backdropFilter: 'blur(15px)',
//                           boxShadow: isActive 
//                             ? '0 35px 70px -12px rgba(59, 130, 246, 0.35)' 
//                             : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
//                         }}
//                       >
//                         {/* Active indicator */}
//                         {isActive && (
//                           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
//                         )}

//                         {/* Floating icon */}
//                         <div className="absolute top-6 right-6">
//                           <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center ${
//                             isActive ? 'animate-bounce' : ''
//                           }`}>
//                             <IconComponent className="w-6 h-6 text-white" />
//                           </div>
//                         </div>

//                         {/* Quote decoration */}
//                         <div className="absolute top-6 left-6 opacity-10">
//                           <Quote className="w-16 h-16 text-gray-400" />
//                         </div>

//                         {/* Profile Section */}
//                         <div className="relative z-10 flex flex-col items-center text-center mb-6">
//                           <div className="w-28 h-28 rounded-full mb-4 overflow-hidden ring-4 ring-white shadow-xl">
//                             <div 
//                               className={`w-full h-full rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center relative`}
//                             >
//                               <span className="text-white text-2xl font-bold">
//                                 {testimonial.avatar}
//                               </span>
//                               {isActive && (
//                                 <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
//                               )}
//                             </div>
//                           </div>

//                           <h3 className="text-xl font-bold text-gray-900 mb-1">
//                             {testimonial.name}
//                           </h3>
//                           <p className="text-gray-600 text-sm font-medium mb-1">
//                             {testimonial.role}
//                           </p>
//                           <p className="text-gray-400 text-xs mb-3">
//                             {testimonial.company}
//                           </p>

//                           {/* Achievement badge */}
//                           <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-3 py-1 mb-4">
//                             <p className="text-xs font-bold text-orange-700">
//                               🏆 {testimonial.achievement}
//                             </p>
//                           </div>

//                           {/* Rating */}
//                           <div className="flex items-center mb-4">
//                             {[...Array(testimonial.rating)].map((_, i) => (
//                               <Star 
//                                 key={i} 
//                                 className={`w-5 h-5 text-yellow-400 fill-current ${
//                                   isActive ? 'animate-pulse' : ''
//                                 }`}
//                                 style={{ animationDelay: `${i * 0.1}s` }}
//                               />
//                             ))}
//                           </div>
//                         </div>

//                         {/* Testimonial Text */}
//                         <p className="text-gray-700 text-base leading-relaxed text-center relative z-10">
//                           "{testimonial.testimonial}"
//                         </p>

//                         {/* Decorative elements */}
//                         <div 
//                           className="absolute bottom-0 left-0 w-full h-2 rounded-b-3xl"
//                           style={{
//                             background: `linear-gradient(90deg, ${testimonial.color.replace('from-', '').replace('via-', '').replace('to-', '').split(' ')[0]} 0%, ${testimonial.color.split(' ')[2]} 100%)`
//                           }}
//                         />

//                         {isActive && (
//                           <>
//                             <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r from-blue-500 to-purple-500" />
//                             <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 animate-pulse" />
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Enhanced Navigation */}
//           <div 
//             ref={navigationRef}
//             className="flex justify-center items-center space-x-8"
//           >
//             <button
//               onClick={() => rotateCarousel('prev')}
//               disabled={isAnimating}
//               className="prev-btn group w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50"
//             >
//               <ChevronLeft className="w-7 h-7 text-white" />
//             </button>
            
//             <div className="flex space-x-3">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     if (!isAnimating) {
//                       setAutoRotate(false);
//                       const steps = (index - activeCard + testimonials.length) % testimonials.length;
//                       for (let i = 0; i < steps; i++) {
//                         setTimeout(() => rotateCarousel('next'), i * 200);
//                       }
//                       setTimeout(() => setAutoRotate(true), 2000);
//                     }
//                   }}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === activeCard 
//                       ? 'w-10 h-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
//                       : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
//                   }`}
//                 />
//               ))}
//             </div>
            
//             <button
//               onClick={() => rotateCarousel('next')}
//               disabled={isAnimating}
//               className="next-btn group w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50"
//             >
//               <ChevronRight className="w-7 h-7 text-white" />
//             </button>
//           </div>

//           {/* Auto-rotation indicator */}
//           <div className="text-center mt-8">
//             <div className="inline-flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2 backdrop-blur-sm">
//               <div className={`w-2 h-2 rounded-full ${autoRotate ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
//               <span className="text-sm text-gray-600">
//                 {autoRotate ? 'Auto-rotating' : 'Paused'}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;