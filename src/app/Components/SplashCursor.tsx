'use client';

import { useEffect, useRef, useState } from 'react';

type SplashCursorProps = {
  containerId?: string; // e.g., "#hero"
};

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  el: HTMLDivElement;
};

const COLORS = ['#1877F2'];

const SplashCursor: React.FC<SplashCursorProps> = ({ containerId = '#hero' }) => {
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  const createParticle = (x: number, y: number) => {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.left = '0';
    el.style.top = '0';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '9999';
    el.style.borderRadius = '50%';

    const size = Math.random() * 8 + 4;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = color;
    el.style.mixBlendMode = 'difference';

    const dx = (Math.random() - 0.5) * 4;
    const dy = (Math.random() - 0.5) * 4;

    const particle: Particle = {
      x,
      y,
      dx,
      dy,
      size,
      opacity: 1,
      color,
      life: 60,
      el,
    };

    if (containerRef.current) containerRef.current.appendChild(el);
    particles.current.push(particle);
  };

  useEffect(() => {
    const section = document.querySelector(containerId) as HTMLElement;
    if (!section) return;

    targetRef.current = section;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [containerId]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!targetRef.current || !isVisible) return;

      const bounds = targetRef.current.getBoundingClientRect();
      if (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      ) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;

        for (let i = 0; i < 4; i++) {
          createParticle(e.clientX, e.clientY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  useEffect(() => {
    const animate = () => {
      particles.current.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;
        p.opacity -= 0.02;
        p.life--;

        p.el.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.opacity})`;
        p.el.style.opacity = `${p.opacity}`;

        if (p.life <= 0 || p.opacity <= 0) {
          if (containerRef.current && p.el) {
            containerRef.current.removeChild(p.el);
          }
          particles.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div ref={containerRef} />;
};

export default SplashCursor;
