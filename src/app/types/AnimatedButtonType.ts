// types/AnimatedButtonTypes.ts

import React from "react";

export interface AnimatedButtonProps {
  href: string;
  content: string;
  className?: string;
  style?: React.CSSProperties & {
    borderColor?: string;
  };
}
