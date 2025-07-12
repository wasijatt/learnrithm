// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import Image from 'next/image';
// const FAQSection = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const faqRef = useRef(null);
//     const itemsRef = useRef([]);
//     const answersRef = useRef([]);

//     const faqData = [
//         {
//             question: "How much does it cost to create a video?",
//             answer: "Our projects range from $2,500 to $25,000, depending on the complexity, length, deadline, and a few other factors. Think of it like ordering a pizza — you can go basic, or you can load it up with all the toppings. The price adjusts accordingly. Want to know exactly what's in your pie? Schedule a consultation, and we'll break down the costs slice by slice."
//         },
//         {
//             question: "What's your process like?",
//             answer: "Our process is collaborative and streamlined. We start with a discovery call to understand your vision, then move through concept development, scripting, production planning, filming, post-production, and final delivery. Each step includes client feedback loops to ensure we're creating exactly what you need."
//         },
//         {
//             question: "What's the payment structure?",
//             answer: "We typically work with a 50% deposit upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including wire transfers, checks, and major credit cards. Payment terms are always clearly outlined in our contract."
//         },
//         {
//             question: "Do you use real human voiceovers?",
//             answer: "Absolutely! We work with professional voice actors and can provide samples in different styles and tones. We also offer multilingual voiceovers if needed. If you prefer AI-generated voices for budget considerations, we can discuss those options too, but we always recommend human voices for the best emotional connection."
//         },
//         {
//             question: "Can I see some of your past work?",
//             answer: "Of course! We have a comprehensive portfolio showcasing our work across various industries and styles. You can view our reel on our website, or we can send you specific examples that match your project type. We're also happy to provide client references upon request."
//         },
//         {
//             question: "What's your process like?",
//             answer: "Our process is collaborative and streamlined. We start with a discovery call to understand your vision, then move through concept development, scripting, production planning, filming, post-production, and final delivery. Each step includes client feedback loops to ensure we're creating exactly what you need."
//         },
//         {
//             question: "What's the payment structure?",
//             answer: "We typically work with a 50% deposit upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including wire transfers, checks, and major credit cards. Payment terms are always clearly outlined in our contract."
//         },
//         {
//             question: "Do you use real human voiceovers?",
//             answer: "Absolutely! We work with professional voice actors and can provide samples in different styles and tones. We also offer multilingual voiceovers if needed. If you prefer AI-generated voices for budget considerations, we can discuss those options too, but we always recommend human voices for the best emotional connection."
//         },
//         {
//             question: "Can I see some of your past work?",
//             answer: "Of course! We have a comprehensive portfolio showcasing our work across various industries and styles. You can view our reel on our website, or we can send you specific examples that match your project type. We're also happy to provide client references upon request."
//         }
//     ];

//     useEffect(() => {
//         const tl = gsap.timeline();

//         // Initial animation for the entire section
//         tl.from(faqRef.current, {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             ease: "power2.out"
//         });

//         // Animate FAQ items
//         itemsRef.current.forEach((item, index) => {
//             if (item) {
//                 tl.from(item, {


//                     duration: 0.6,
//                     ease: "power2.out"
//                 }, index * 0.1);
//             }
//         });

//         // Set initial state for answers
//         answersRef.current.forEach((answer, index) => {
//             if (answer) {
//                 if (index === 0) {
//                     gsap.set(answer, { height: "auto" });
//                 } else {
//                     gsap.set(answer, { height: 0 });
//                 }
//             }
//         });

//     }, []);

//     const toggleFAQ = (index) => {
//         if (activeIndex === index) return;

//         // Close previous answer
//         if (answersRef.current[activeIndex]) {
//             gsap.to(answersRef.current[activeIndex], {
//                 height: 0,
//                 duration: 0.4,
//                 ease: "power2.inOut"
//             });
//         }

//         // Open new answer
//         if (answersRef.current[index]) {
//             gsap.set(answersRef.current[index], { height: "auto" });
//             const height = answersRef.current[index].scrollHeight;
//             gsap.from(answersRef.current[index], {
//                 height: 0,
//                 duration: 0.4,
//                 ease: "power2.inOut"
//             });
//         }

//         // Animate question button
//         gsap.to(itemsRef.current[index], {
//             scale: 1.02,
//             duration: 0.2,
//             yoyo: true,
//             repeat: 1,
//             ease: "power2.inOut"
//         });

//         setActiveIndex(index);
//     };

//     const handleMouseEnter = (index) => {
//         if (index !== activeIndex) {
//             gsap.to(itemsRef.current[index], {
//                 scale: 1.01,
//                 duration: 0.2,
//                 ease: "power2.out"
//             });
//         }
//     };

//     const handleMouseLeave = (index) => {
//         if (index !== activeIndex) {
//             gsap.to(itemsRef.current[index], {
//                 scale: 1,
//                 duration: 0.2,
//                 ease: "power2.out"
//             });
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
//             <div className="max-w-4xl mx-auto">
//                 <div
//                     ref={faqRef}
//                     className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
//                 >
//                     {/* Header */}
//                     <div className="text-center py-12 px-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
//                         <h1 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h1>
//                         <p className="text-gray-600 text-lg">Get quick answers to your questions.</p>
//                         <p className="text-gray-500 mt-2">To understand more, contact us.</p>
//                     </div>

//                     {/* FAQ Items */}
//                     <div className="p-8 space-y-4">
//                         {faqData.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className=" overflow-hidden transition-all duration-500 flex  items-baseline-last "
//                                 ref={el => itemsRef.current[index] = el}
//                                 onMouseEnter={() => handleMouseEnter(index)}
//                                 onMouseLeave={() => handleMouseLeave(index)}
//                             >
//                                 <div>
//                                     <Image width={100} height={100} alt='Faqs Image' quality={75}  src={item.src} />
//                                 </div>
//                                 <div>
//                                     {/* Question Button */}
//                                     <button
//                                         onClick={() => toggleFAQ(index)}
//                                         className={`  text-left focus:outline-none  transition-all duration-300 }`}
//                                     >
//                                         <div className="flex items-center justify-between">
//                                             <span className={`font-medium text-base px-6 py-4 rounded-2xl rounded-bl-[0px]  hover:shadow-lg ${activeIndex === index
//                                                     ? 'bg-gray-800 text-white'
//                                                     : 'bg-white text-gray-800 hover:bg-gray-50'}
//                   `}>{item.question}</span>
//                                             <span className={`transform transition-transform duration-300 bg-gray-600 rounded-full p-1 mx-2.5 ${activeIndex === index ? 'rotate-45' : 'rotate-0'
//                                                 }`}>
//                                                 <svg
//                                                     width="20"
//                                                     height="20"
//                                                     viewBox="0 0 24 24"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     strokeWidth="2"
//                                                 >
//                                                     <line x1="12" y1="5" x2="12" y2="19"></line>
//                                                     <line x1="5" y1="12" x2="19" y2="12"></line>
//                                                 </svg>
//                                             </span>
//                                         </div>
//                                     </button>

//                                     {/* Answer */}
//                                     <div
//                                         ref={el => answersRef.current[index] = el}
//                                         className="overflow-hidden bg-gray-50 border-gray-200 shadow-lg rounded-2xl rounded-bl-[0]"
//                                         style={{ height: index === 0 ? 'auto' : 0 }}
//                                     >
//                                         <div className="px-6 py-6 text-gray-700 leading-relaxed">
//                                             <div className="flex items-start space-x-3">

//                                                 <div className="flex-1">
//                                                     <p className="text-gray-800">{item.answer}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                             </div>
//                         ))}
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FAQSection;




"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FAQItem } from "../types/FAQ";

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const faqRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const answersRef = useRef<(HTMLDivElement | null)[]>([]);

    const faqData: FAQItem[] = [

        {
          question: "How much does it cost to create a video?",
          answer:
            "Our projects range from $2,500 to $25,000, depending on the complexity...",
          src: "https://i.pravatar.cc/100?img=1",
        },
        {
          question: "What's your process like?",
          answer:
            "Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call..Our process is collaborative and streamlined. We start with a discovery call...",
          src: "https://i.pravatar.cc/100?img=2",
        },
        {
          question: "What's the payment structure?",
          answer:
            "We typically work with a 50% deposit upfront and 50% upon completion...",
          src: "https://i.pravatar.cc/100?img=3",
        },
        {
          question: "Do you use real human voiceovers?",
          answer:
            "Absolutely! We work with professional voice actors...",
          src: "https://i.pravatar.cc/100?img=4",
        },
        {
          question: "Can I see some of your past work?",
          answer:
            "Of course! We have a comprehensive portfolio showcasing our work...",
          src: "https://i.pravatar.cc/100?img=5",
        },
      ];
      

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(faqRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        });

        itemsRef.current.forEach((item, index) => {
            if (item) {
                tl.from(item, {
                    duration: 0.6,
                    ease: "power2.out"
                }, index * 0.1);
            }
        });

        answersRef.current.forEach((answer, index) => {
            if (answer) {
                gsap.set(answer, { height: index === 0 ? "auto" : 0 });
            }
        });
    }, []);

    const toggleFAQ = (index: number) => {
        if (activeIndex === index) return;

        if (answersRef.current[activeIndex]) {
            gsap.to(answersRef.current[activeIndex], {
                height: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
        }

        if (answersRef.current[index]) {
            gsap.set(answersRef.current[index], { height: "auto" });
            const height = answersRef.current[index]!.scrollHeight;
            gsap.from(answersRef.current[index], {
                height: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
        }

        gsap.to(itemsRef.current[index], {
            scale: 1.02,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });

        setActiveIndex(index);
    };

    const handleMouseEnter = (index: number) => {
        if (index !== activeIndex) {
            gsap.to(itemsRef.current[index], {
                scale: 1.01,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    };

    const handleMouseLeave = (index: number) => {
        if (index !== activeIndex) {
            gsap.to(itemsRef.current[index], {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div
                    ref={faqRef}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                >
                    {/* Header */}
                    <div className="text-center py-12 px-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h1>
                        <p className="text-gray-600 text-lg">Get quick answers to your questions.</p>
                        <p className="text-gray-500 mt-2">To understand more, contact us.</p>
                    </div>

                    {/* FAQ Items */}
                    <div className="p-8 space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className=" overflow-hidden transition-all duration-500 flex   relative   "
                                ref={el => itemsRef.current[index] = el}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <div className=" absolute bottom-6 ">
                                    <Image width={100} height={100} alt='Faqs Image' quality={75} src={item.src} className="rounded-full w-7 h-7" />
                                </div>
                                <div className=" p-4 pl-8.5">
                                    {/* Question Button */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className={`  text-left focus:outline-none  transition-all duration-300 }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className={`font-medium text-base px-6 py-4 rounded-2xl rounded-bl-[0px]  hover:shadow-lg ${activeIndex === index
                                                ? 'bg-gray-800 text-white'
                                                : 'bg-white text-gray-800 hover:bg-gray-50'}
                      `}>{item.question}</span>
                                            <span className={`transform transition-transform duration-300 bg-gray-600 rounded-full p-1 mx-2.5 ${activeIndex === index ? 'rotate-45' : 'rotate-0'
                                                }`}>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                            </span>
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        ref={el => answersRef.current[index] = el}
                                        className="overflow-hidden bg-white shadow-lg border-gray-200  rounded-3xl rounded-bl-[0]"
                                        style={{ height: index === 0 ? 'auto' : 0 }}
                                    >
                                        <div className="px-6 py-6 text-gray-700 leading-relaxed">
                                            <div className="flex items-start space-x-3">

                                                <div className="flex-1">
                                                    <p className="text-gray-800 ">{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FAQSection;
