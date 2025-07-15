
'use client';
import SplashCursor from './SplashCursor';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';

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

const socialIcons: {
  href: string;
  icon: ReactElement;
  alt: string;
}[] = [
  { href: 'https://facebook.com', icon: <FaFacebook size={20} />, alt: 'Facebook' },
  { href: 'https://twitter.com', icon: <FaTwitter size={20} />, alt: 'Twitter' },
  { href: 'https://youtube.com', icon: <CiYoutube size={22} />, alt: 'YouTube' },
  { href: 'https://instagram.com', icon: <FaInstagram size={20} />, alt: 'Instagram' },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      ref={footerRef} id='footer'
      className=" splash relative bg-[#14216d] text-white px-6 md:px-20 py-20 overflow-hidden w-full"
    >
      <SplashCursor containerId="footer" />

      {/* Floating Blob */}
      {/* GLOWING LIGHT */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[300px] -translate-x-1/2 bg-[#135EBF] backdrop-blur-2xl opacity-30 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-14 text-sm">
          {/* Logo & Mobile Socials */}
          <div>
            <Link href="/" className="block w-fit">
              <Image
                src="/Full logo.png"
                alt="Logo"
                width={200}
                height={40}
                className="footer-column"
              />
            </Link>

            {/* Mobile Socials */}
            <div className="flex gap-4 mt-5 md:hidden">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="social-link hover:scale-110 transition-transform duration-300"
                    aria-label={icon.alt}
                  >
                    {icon.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerData.slice(1).map((col, idx) => (
            <div key={idx}>
              <h4 className="footer-column text-xs text-[#88a1c1] font-semibold mb-3 tracking-widest">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li
                    key={i}
                    className="footer-column hover:text-[#a8a7a7] transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Desktop Socials */}
          <div className="hidden md:flex flex-col gap-3 items-start">
            <h4 className="footer-column text-xs text-[#88a1c1] font-semibold mb-3 tracking-widest">
              FOLLOW US
            </h4>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="social-link hover:scale-110 transition-transform duration-300"
                    aria-label={icon.alt}
                  >
                    {icon.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
