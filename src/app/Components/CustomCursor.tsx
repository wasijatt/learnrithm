'use client';

import { useEffect, useRef, useState } from 'react';

type CursorState = {
  x: number;
  y: number;
  rotation: number;
};

type CursorStyle = {
  size: number;
  color: string;
  opacity?: number;
};

const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    rotation: 0,
  });

  const [cursorStyle, setCursorStyle] = useState<CursorStyle>({
    size: 10,
    color: '#1877F2',
  });

  const rafRef = useRef<number>(0);

  // Track raw mouse position
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Animate smooth cursor movement and rotation
  useEffect(() => {
    let x = cursor.x;
    let y = cursor.y;

    const animate = () => {
      x += (mouse.x - x) * 0.1;
      y += (mouse.y - y) * 0.1;
      const deltaX = mouse.x - x;
      const deltaY = mouse.y - y;
      const rotation = (deltaX + deltaY) * 0.05;

      setCursor({ x, y, rotation });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current!);
  }, [mouse]);

  // Change style on hover of specific elements
//   useEffect(() => {
//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;

//       if (target.tagName === 'IMG') {
//         setCursorStyle({
//           size: 100,
//           color: '#ffffff',
//           opacity: 0.2,
//         });
//       } else if (/^H[1-3]$/.test(target.tagName)) {
//         setCursorStyle({
//           size: 20,
//           color: '#',
//         });
//       }
//     };

//     const handleMouseOut = () => {
//       setCursorStyle({
//         size: 10,
//         color: '#1877F2',
//       });
//     };

//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mouseout', handleMouseOut);
//     };
//   },[]);
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  const handleMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'IMG') {
      setCursorStyle({
        size: 100,
        color: '#ffffff',
        opacity: 0.2,
      });
    } else if (/^H[1-3]$/.test(target.tagName)) {
      setCursorStyle({
        size: 20,
        color: '#',
      });
    }
  };

  const handleMouseOut = () => {
    setCursorStyle({
      size: 10,
      color: ' #1877F2',
    });
  };

  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);

  return () => {
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
  };
}, []);

  return (
    <div
      className="hidden md:block"
      style={{
        position: 'fixed',
        left: cursor.x,
        top: cursor.y,
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: cursorStyle.size,
          height: cursorStyle.size,
          backgroundColor: cursorStyle.color,
          opacity: cursorStyle.opacity ?? 1,
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s, opacity 0.3s',
          mixBlendMode: 'difference',
        }}
      />
    </div>
  );
};

export default CustomCursor;
