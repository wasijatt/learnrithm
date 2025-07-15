'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from './FeatureCard';
import AnimatedButton from './AnimatedButton';
import HeadingHover from './HeadingHover';
import {
    BrainCircuit,
    FileText,
    Languages,
    BarChart3,
    Upload,
    ListChecks,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'AI-Powered Teaching',
        Icon: BrainCircuit,
        bgImage: '/Feature/AI Teacher.jpeg',
    },
    {
        title: 'Interactive Quizzes',
        Icon: ListChecks,
        bgImage: '/Feature/Quiz.jpeg',

    },
    {
        title: 'Multilingual Support',
        Icon: Languages,
        bgImage: '/Feature/multiLingual.jpeg',

    },
    {
        title: 'Visual Aids and Resources',
        Icon: BarChart3,
        bgImage: '/Feature/visual aid and resources.jpeg',

    },
    {
        title: 'Study Material Upload',
        Icon: Upload,
        bgImage: '/Feature/study material.jpeg',

    },
    {
        title: 'Progress Tracking',
        Icon: FileText,
        bgImage: '/Feature/progress tracking.jpeg',

    },
];

const KeyFeatures = () => {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: i * 0.15,
                    ease: 'power3.out',
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        // scrub: true,

                    },
                }
            );
        });
    }, []);

    return (
        <section className=" mt-[5%] px-6 md:px-20 py-16 max-w-7xl mx-auto text-center">

            <HeadingHover className='inline font-extrabold primary-bg py-2.5 px-5 rounded-xl !text-white   md:my-2  ' text='Learnrithm AI ' />
            <HeadingHover radius={35} className='inline  ' text=' is a user-friendly learning platform that makes studying easier and more fun.
             It has smart tools that let you customize your lessons, helping you learn in a way that works best for you. With Learnrithm AI, you can get the help you need to succeed in school!'/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {features.map((feature, idx) => (
                    <FeatureCard
                        key={idx}
                        title={feature.title}
                        Icon={feature.Icon}
                        bgImage={feature.bgImage}
                        innerRef={(el) => (cardsRef.current[idx] = el)}

                    />
                ))}
            </div>

            <AnimatedButton
                className="hidden mx-auto mt-10 text-[#151617] bg-white shadow-xl font-bold"
                href="/"
                content="Explore more Features"
            />
        </section>
    );
};

export default KeyFeatures;
