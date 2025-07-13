'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from './AnimatedButton';
gsap.registerPlugin(ScrollTrigger);

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const team: TeamMember[] = [
  {
    name: 'Peter Chukwuemeka Okafor',
    role: 'Founder and CEO',
    image: 'https://i.pravatar.cc/100?img=3',
    linkedin: '#',
  },
  {
    name: 'Ayoub Chalabi',
    role: 'Software Engineer and CTO',
    image: 'https://i.pravatar.cc/100?img=10',
    linkedin: '#',
  },
  {
    name: 'Osedebeme',
    role: 'Head of Socials',
    image: 'https://i.pravatar.cc/100?img=5',
    linkedin: '#',
  },
  {
    name: 'Felicia Annabel Ruriyanto',
    role: 'Social Media Manager',
    image: 'https://i.pravatar.cc/100?img=4',
    linkedin: '#',
  },
];

const TeamSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.team-card');

      cards.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          x: gsap.utils.random(-150, 150),
          y: gsap.utils.random(-150, 150),
          scale: gsap.utils.random(0.9, 1.1),
          rotate: gsap.utils.random(-20, 20),
          filter: 'blur(8px)',
        });
      });

      gsap.to(cards, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'power3.out',
        stagger: {
          each: 0.12,
          from: 'random',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="primary-bg rounded-4xl rounded-bl-[0px] shadow-xl py-20 px-6 md:px-20 overflow-hidden z-50 text-white"
    >
      <div className="text-center mb-16">
      
        <h2 className="text-4xl font-bold">
          <span className="bg-white text-[#262525] py-2 px-5 rounded-2xl  -rotate-45">Expert team</span> behind Learnrithm AI
        </h2>
        <p className="mt-4  max-w-xl mx-auto">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a
          culture that empowers you to do your best work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="team-card will-change-transform rounded-3xl rounded-bl-[0px] p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-out text-center bg-white"
          >
            <div className="w-30 h-30 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
            <p className="text-sm primary ">{member.role}</p>
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 inline-block hover:underline transition-colors duration-200"
            >
              LinkedIn
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
      
        
            <AnimatedButton
                className="hidden mx-auto md:mt-10 p-4 primary bg-white shadow-xl font-bold border-2 border-blue-600 text-blue-600 rounded-full"
                href="/"
                content="We are hiring"
            />
      </div>
    </section>
  );
};

export default TeamSection;
