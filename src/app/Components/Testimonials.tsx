// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
// import gsap from "gsap";
// import Image from "next/image";

// const testimonials = [
//   {
//     text: `Bit PI has revolutionized the way I manage projects. Its comprehensive suite of tools, user-friendly interface, and robust performance have significantly enhanced our productivity and collaboration. A must-have for any team!`,
//     author: "Jack William",
//     role: "CEO of MarketingPoint",
//     rating: 5,
//     avatar: "/avatar.jpg",
//   },
//   {
//     text: `We've seen a 40% improvement in efficiency. It's simple, intuitive, and powerful enough to meet all our needs. Highly recommended for anyone in the industry!`,
//     author: "Sarah Johnson",
//     role: "Project Manager at BuildTech",
//     rating: 4.8,
//     avatar: "/avatar.jpg",
//   },
//   {
//     text: `The UI/UX is unmatched. Bit PI helps keep everything organized and streamlined. Our team is more productive and less stressed!`,
//     author: "Liam Chen",
//     role: "COO of DevSync",
//     rating: 4.9,
//     avatar: "/avatar.jpg",
//   },
// ];

// const Testimonials = () => {
//   const textRef = useRef(null);
//   const cardRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef<any>(null);

//   const clearAutoSlide = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };

//   const resetAutoSlide = () => {
//     clearAutoSlide();
//     timeoutRef.current = setTimeout(() => {
//       handleNext();
//     }, 5000); // Auto-loop every 5 seconds
//   };

//   useEffect(() => {
//     resetAutoSlide();

//     gsap.fromTo(
//       cardRef.current,
//       { y: 60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
//     );

//     gsap.fromTo(
//       textRef.current,
//       { x: -40, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
//     );

//     return () => clearAutoSlide();
//   }, [index]);

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const testimonial = testimonials[index];

//   return (
//     <section className="bg-[#121212] w-full py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1440px] mx-auto overflow-hidden">
//       {/* Left Side - Review Info */}
//       <div
//         ref={textRef}
//         className="max-w-lg text-white flex flex-col items-start justify-center gap-6"
//       >
//         <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//           What Our Clients Say
//         </h2>
//         <p className="text-gray-400 text-lg leading-relaxed">
//           Hear from those who’ve worked with us. Real stories, real results.
//           We’re proud of our impact and excited to share it with you.
//         </p>
//       </div>

//       {/* Right Side - Testimonial Slider */}
//       <div
//         ref={cardRef}
//         className="relative bg-gradient-to-br from-[#1c1c1c] to-[#0f111a] p-8 rounded-2xl shadow-xl w-full max-w-xl text-white transition-all duration-700 ease-in-out"
//       >
//         {/* Navigation Arrows */}
//         <div className="absolute top-4 right-4 flex gap-3 text-white text-lg z-10">
//           <FaArrowLeft
//             onClick={() => {
//               handlePrev();
//               resetAutoSlide();
//             }}
//             className="cursor-pointer hover:scale-110 transition-transform duration-200 text-[#1877F2]"
//           />
//           <FaArrowRight
//             onClick={() => {
//               handleNext();
//               resetAutoSlide();
//             }}
//             className="cursor-pointer hover:scale-110 transition-transform duration-200 text-[#1877F2]"
//           />
//         </div>

//         {/* Review Text */}
//         <p className="text-xl leading-relaxed italic mb-6 transition-all duration-500 ease-in-out">
//           “{testimonial.text}”
//         </p>

//         {/* Author Info */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Image
//               src={testimonial.avatar}
//               alt={testimonial.author}
//               width={48}
//               height={48}
//               className="rounded-full object-cover"
//             />
//             <div>
//               <h4 className="font-bold text-lg">{testimonial.author}</h4>
//               <p className="text-sm text-gray-400">{testimonial.role}</p>
//             </div>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center gap-1 text-[#1877F2]">
//             {Array.from({ length: Math.floor(testimonial.rating) }).map(
//               (_, i) => (
//                 <FaStar key={i} />
//               )
//             )}
//             <span className="ml-2 text-white font-semibold">
//               {testimonial.rating.toFixed(1)}
//             </span>
//           </div>
//         </div>

//         {/* Indicators */}
//         <div className="mt-6 flex justify-center gap-2">
//           {testimonials.map((_, i) => (
//             <span
//               key={i}
//               onClick={() => {
//                 setIndex(i);
//                 resetAutoSlide();
//               }}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
//                 i === index ? "bg-[#1877F2]" : "bg-white/20"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;
