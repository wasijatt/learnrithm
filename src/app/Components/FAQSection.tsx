"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FAQItem } from "../types/FAQ";
import AnimatedButton from "./AnimatedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);
const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const faqRef = useRef<HTMLDivElement>(null);
    const faqheadref = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const answersRef = useRef<(HTMLDivElement | null)[]>([]);

    const faqData = useMemo<FAQItem[]>(() => [

        {
            question: "What is Learnrithm Ai?",
            answer:
                "Learnrithm AI Teacher is an AI-driven educational platform that provides personalized learning experiences with step-by-step lessons, interactive quizzes, and multimedia resources like videos, images, and PDFs. It supports multilingual learning, allowing users to upload materials for customized lessons and study at their own pace. The platform features an AI Study Buddy, a chatbot that assists students by answering questions, summarizing or reteaching YouTube videos by them supplying it the link to the youtube videos, and serving as a study companion. Additionally, an AI voice model enhances accessibility for students with disabilities, making Learnrithm AI inclusive and versatile for diverse learning needs.",
            src: "https://i.pravatar.cc/100?img=1",
        },
        {
            question: "How does Learnrithm Ai Work?",
            answer:
                "Learnrithm AI uses advanced AI algorithms to break down complex topics into simpler lessons. You can tell the AI what subject you are struggling with, and it will guide you step by step. You can also upload your own study materials, and the AI will analyze and teach the content in an easier-to-understand format. Its like having a personal tutor available 24/7!.",
            src: "https://i.pravatar.cc/100?img=2",
        },
        {
            question: "Who is Learnrithm AI for?",
            answer:
                "Learnrithm AI is designed for students of all levels, from high school to university, and even for professionals looking to learn new skills. Whether youre preparing for exams, need help with a tough subject, or want to acquire a new skill, Learnrithm AI can provide tailored lessons and quizzes to suit your learning needs..",
            src: "https://i.pravatar.cc/100?img=3",
        },
        {
            question: "What subjects can I learn with Learnrithm AI?",
            answer:
                "You can learn almost any subject with Learnrithm AI, including math, science, history, economics, programming, and languages. The AI Teacher feature is versatile and can teach both academic and non-academic subjects. If you have specific materials you need help with, you can upload them, and the AI will guide you through the content. ",
            src: "https://i.pravatar.cc/100?img=4",
        },
        {
            question: "Can I change the language of the lessons?",
            answer:
                "Yes! One of the features of the paid plan is multilingual support. You can switch between different languages, making it easier for non-native speakers to learn subjects in their preferred language.",
            src: "https://i.pravatar.cc/100?img=5",
        },
        {
            question: "How are the quizzes in Learnrithm AI designed?",
            answer:
                "The quizzes in Learnrithm AI are personalized to test your understanding of the topics youve studied. The AI generates quizzes based on the subject youre learning and the materials youve uploaded, helping you review and solidify your knowledge..",
            src: "https://i.pravatar.cc/100?img=10",
        }, {
            question: "What platforms is Learnrithm AI available on?",
            answer:
                "Learnrithm AI is a web-based platform that can be accessed through any device with an internet connection, including desktops, laptops, tablets, and smartphones. You can easily study and quiz yourself on the go!.",
            src: "https://i.pravatar.cc/100?img=17",
        }, {
            question: "Do I need any prior knowledge to use Learnrithm AI?",
            answer:
                "No prior knowledge is necessary. Learnrithm AI caters to all learning levels, whether youre just starting out in a subject or looking for advanced content. The AI will adjust the lesson pace and depth based on your needs.",
            src: "https://i.pravatar.cc/100?img=18",
        },
    ], []);


    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(faqRef.current, {
            opacity: 0,
            y: 60,
            duration: 1.2,
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


        if (window.matchMedia("(min-width: 1024px)").matches) {
            const ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: faqRef.current,
                    start: "top top",
                    // end: () => `+=${faqRef.current?.offsetHeight}`,
                    end: "bottom bottom",
                    pin: faqheadref.current,
                    pinSpacing: false,
                    scrub: false,
                });
            });

            return () => ctx.revert();
        }
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
            const el = answersRef.current[index];
            el.style.height = "auto";
            const fullHeight = el.scrollHeight;

            gsap.fromTo(el,
                { height: 0 },
                { height: fullHeight, duration: 0.6, ease: "power2.inOut" }
            );
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
        <div className="min-h-screen w-full md:w-[95%] bg-gradient-to-br from-gray-50 to-gray-100 py-16 pb-0 px-4 !h-full mb-[10%] ">
            <div className="max-w-full mx-auto md:flex  " >
                {/* Header */}
                <div ref={faqheadref} className=" w-full lg:w-[40%] md:text-start p-4 text-center md:py-[13%]  md:px-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <h1 className=" text-3xl md:text-6xl font-bold text-gray-900 mb-4 ">Frequently Asked Questions
                    </h1>
                    {/* <AnimatedHeading mainText="Frequently Asked Questions" subText=""  className="!text-3xl md:!text-6xl !font-bold !text-gray-900 mb-4"/> */}
                    <p className="text-gray-600 text-lg md:text-xl">Heres a set of frequently asked questions (FAQ) for Learnrithm AI, along with answers that highlight key features and details about your platform:.</p>
                    <div className=" my-10">
                        <AnimatedButton
                            className="hidden  text-[#151617] bg-white shadow-xl  "
                            href="/"
                            content="Still have a Question?"
                            style={{ background: "" }}
                        />
                    </div>
                </div>
                <div
                    ref={faqRef}
                    className=" rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full lg:w-[60%]  "
                >


                    {/* FAQ Items */}
                    <div className="md:p-4 md:space-y-2">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className=" overflow-hidden transition-all duration-500 flex   relative   "
                                ref={(el) => {
                                    itemsRef.current[index] = el;
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <div className=" absolute bottom-8 ">
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
                                                : 'bg-white text-gray-800 hover:bg-gray-50'}`}>{item.question}</span>
                                            <span className={`transform transition-transform duration-300 bg-gray-600 rounded-full p-1 mx-2.5 ${activeIndex === index ? 'rotate-45' : 'rotate-0'
                                                }`}>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="white"
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
                                        ref={(el) => {
                                            answersRef.current[index] = el;
                                        }}
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
