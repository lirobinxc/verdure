import { ColorName } from '../types/ColorName';

export function getTwTextColor(color: ColorName) {
  switch (color) {
    case ColorName.DARK_GREEN:
      return 'text-[#063347]';
    case ColorName.WHITE:
      return 'text-white';
    default:
      return 'text-black';
  }
}
