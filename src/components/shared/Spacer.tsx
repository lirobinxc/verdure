import React from 'react';
import { twJoin } from 'tailwind-merge';

interface SpacerProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  bgColor?: 'darkGreen';
}

const Spacer: React.FC<SpacerProps> = ({ size, bgColor }) => {
  let heightSpacing = 'h-4';
  let backgroundColor;

  switch (size) {
    case 'xs':
      heightSpacing = 'h-1';
      break;
    case 'sm':
      heightSpacing = 'h-2';
      break;
    case 'md':
      heightSpacing = 'h-4';
      break;
    case 'lg':
      heightSpacing = 'h-8';
      break;
    case 'xl':
      heightSpacing = 'h-12';
      break;
    case '2xl':
      heightSpacing = 'h-24';
      break;
  }

  switch (bgColor) {
    case 'darkGreen':
      backgroundColor = 'bg-[#063347]';
      break;
  }

  return (
    <div
      className={twJoin('w-full', heightSpacing, backgroundColor)}
      role="separator"
    ></div>
  );
};

export default Spacer;
