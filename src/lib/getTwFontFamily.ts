import { FontFamily } from '../types/FontFamily';

export function getTwFontFamily(font: FontFamily) {
  switch (font) {
    case FontFamily.DISPLAY:
      return 'font-display';
    case FontFamily.PRIMARY:
      return 'font-primary';
  }
}
