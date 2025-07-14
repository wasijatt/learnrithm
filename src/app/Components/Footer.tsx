'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const footerData = [
  {
    title: 'ABOUT US',
    links: ['Pricing', 'Contact', 'FAQ', 'Blog'],
  },
  {
    title: 'SUPPORT',
    links: ['Terms', 'Privacy', 'Security'],
  },
  {
    title: 'COMMUNITY',
    links: ['Forum', 'Events', 'Career'],
  },
  {
    title: 'PRESS',
    links: ['Investors', 'Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Legal'],
  },
];

const socials = ['Facebook', 'Twitter', 'Youtube', 'Instagram'];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
  //     gsap.from('.social-link', {
  // opacity: 0,
  //       y: 40,
  //       duration: 0.8,
  //       stagger: 0.2,
  //       delay: 0.3,
  //       ease: 'power3.out',
  //     });

       gsap.from(['.social-link', '.footer-column'], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#14216d] text-white px-6 md:px-20 py-20 overflow-hidden w-full"
    >
      {/* GLOWING LIGHT */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[300px] -translate-x-1/2 bg-[#135EBF] backdrop-blur-2xl opacity-30 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SOCIALS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10 pb-10 mb-12">
          {socials.map((item, index) => (
            <div
              key={index}
              className=" flex items-center justify-between text-sm md:text-lg font-medium hover:scale-105 transition-all duration-300"
            >
              {item}
              <ArrowRight size={16} />
            </div>
          ))}
        </div>

        {/* LINK COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {footerData.map((col, idx) => (
            <div key={idx} className="">
              <h4 className="footer-column text-xs text-[#88a1c1] font-semibold mb-3 tracking-widest">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li
                    key={i}
                    className=" footer-column hover:text-[#a8a7a7] transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
export default Footer;