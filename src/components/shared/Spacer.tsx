import React from 'react';
import { twJoin } from 'tailwind-merge';

interface SpacerProps {
  size: 'sm' | 'md' | 'lg';
  bgColor?: 'darkGreen';
}

const Spacer: React.FC<SpacerProps> = ({ size, bgColor }) => {
  let heightSpacing = 'h-4';
  let backgroundColor;

  switch (size) {
    case 'sm':
      heightSpacing = 'h-4';
      break;
    case 'md':
      heightSpacing = 'h-8';
      break;
    case 'lg':
      heightSpacing = 'h-12';
      break;
  }

  switch (bgColor) {
    case 'darkGreen':
      backgroundColor = 'bg-[#063347]';
      break;
  }

  return (
    <div className={twJoin('w-full', heightSpacing, backgroundColor)}></div>
  );
};

export default Spacer;
