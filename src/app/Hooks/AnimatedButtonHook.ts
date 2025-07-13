"use client";
import React from "react";
import { useState } from "react";

const useAnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleMouseMove = <T extends HTMLElement>(e: React.MouseEvent<T>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  setTranslateX(x * 0.8);
  setTranslateY(y * 0.8);
};


  const handleMouseLeave =  () => {
    setIsHovered(false);
    setTranslateX(0);
    setTranslateY(0);
  };

  return {
    isHovered,
    translateX,
    translateY,
    setIsHovered,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useAnimatedButton;
