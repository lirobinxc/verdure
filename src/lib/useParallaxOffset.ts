import { MotionValue, useTransform } from 'framer-motion';

export default function useParallaxOffset(
  scrollYProgress: MotionValue,
  ratio: number
) {
  return useTransform(
    scrollYProgress,
    (progress) => `${progress * 100 * ratio}%`
  );
}
