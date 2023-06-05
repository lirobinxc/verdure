import React from 'react';
import { twJoin } from 'tailwind-merge';
import { ColorName } from '../../types/ColorName';
import { FontFamily } from '../../types/FontFamily';
import { getTwTextColor } from '../../lib/getTwTextColor';
import { getTwFontFamily } from '../../lib/getTwFontFamily';

interface HeaderProps {
  type: 'h1' | 'h2';
  font: FontFamily;
  color: ColorName;
  text: string;
}

const Header: React.FC<HeaderProps> = ({ type, font, color, text }) => {
  const twColor = getTwTextColor(color);
  const twFont = getTwFontFamily(font);

  const twShared = twJoin(twColor, twFont);

  if (type === 'h1') {
    return (
      <h1
        className={twJoin(
          'text-5xl sm:text-5xl lg:text-5xl 2xl:text-5xl',
          twColor,
          twShared
        )}
      >
        {text}
      </h1>
    );
  }

  if (type === 'h2') {
    return (
      <h2
        className={twJoin(
          'text-5xl sm:text-5xl lg:text-6xl 2xl:text-6xl',
          twColor,
          twShared
        )}
      >
        {text}
      </h2>
    );
  }

  return <></>;
};

export default Header;
