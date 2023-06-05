import React, { useRef } from 'react';
import heroLayer1Deer from '../../assets/hero-background/heroLayer1-deer.svg';
import heroLayer2Birds from '../../assets/hero-background/heroLayer2-birds.svg';
import heroLayer3Lake from '../../assets/hero-background/heroLayer3-lake.svg';
import heroLayer4Mountains from '../../assets/hero-background/heroLayer4-mountains.svg';
import heroLayer5Mountains from '../../assets/hero-background/heroLayer5-mountains.svg';
import heroLayer6SunSky from '../../assets/hero-background/heroLayer6-sunsky.svg';
import { motion, useScroll } from 'framer-motion';
import useParallaxOffset from '../../lib/useParallaxOffset';
import CtaButton from '../shared/CtaButton';
import Spacer from '../shared/Spacer';
// import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section ref={sectionRef} className="relative h-full w-full bg-[#92eae4]">
      <div
        className="absolute h-full w-full overflow-hidden"
        aria-roledescription="img"
        aria-label="Nature background with deer"
      >
        <motion.img
          src={heroLayer6SunSky}
          style={{
            y: useParallaxOffset(scrollYProgress, 0.5),
          }}
          className="pointer-events-none absolute bottom-0 left-[-80%]
              h-auto w-[250%] max-w-[300%]
              md:left-[-20%] md:h-[auto] md:w-[140%]
              lg:left-[0%] lg:h-auto lg:w-[100%]"
        />

        <motion.img
          src={heroLayer5Mountains}
          style={{
            y: useParallaxOffset(scrollYProgress, 2),
          }}
          className="pointer-events-none absolute bottom-[20%]
              left-[-40%] h-auto w-[200%] max-w-[300%] 
              md:bottom-[20%] md:left-[-5%] md:h-[auto] md:w-[130%]
              lg:bottom-[30%] lg:left-[-5%] lg:h-auto lg:w-[120%]"
        />
        <motion.img
          src={heroLayer4Mountains}
          style={{
            y: useParallaxOffset(scrollYProgress, 0.85),
          }}
          className="pointer-events-none absolute bottom-[10%]
              left-[-30%] h-auto w-[200%] max-w-[300%] 
              md:bottom-[10%] md:left-[-20%] md:h-[auto] md:w-[130%]
              lg:bottom-[20%] lg:left-[-30%] lg:h-auto lg:w-[120%]"
        />
        <motion.img
          src={heroLayer3Lake}
          style={{
            y: useParallaxOffset(scrollYProgress, 0.3),
          }}
          className="pointer-events-none absolute bottom-0  left-[-70%]
              h-auto w-[200%] max-w-[300%]
              md:left-[-20%] md:h-[auto] md:w-[130%]
              lg:left-[0%] lg:h-auto lg:w-[100%]"
        />
        <motion.img
          src={heroLayer2Birds}
          style={{
            y: useParallaxOffset(scrollYProgress, 1.5),
          }}
          className="pointer-events-none absolute bottom-[30%]
              left-[15%] h-auto w-[70%] max-w-[300%]
              md:bottom-[25%] md:left-[15%] md:h-[auto] md:w-[60%]
              lg:bottom-[50%] lg:left-[20%] lg:h-auto lg:w-[50%]"
        />
        <img
          src={heroLayer1Deer}
          className="pointer-events-none absolute bottom-[-3%] 
              left-[-40%] h-[50%] max-w-[300%]
              sm:left-[-20%] sm:h-auto sm:w-[150%] sm:max-w-[300%]
              md:left-[-20%] md:h-auto md:w-[150%] md:max-w-[300%]
              lg:left-[-10%] lg:h-auto lg:w-[120%] "
        />
      </div>
      <div className="flex h-full w-full justify-center">
        <motion.div
          className="relative flex flex-col items-center gap-5 pt-[25vh] text-teal-800"
          transition={{ duration: 1.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1
            className="w-10/12 text-center font-display text-6xl 
              sm:text-7xl 
              lg:w-11/12 lg:text-7xl 
              2xl:text-7xl"
          >
            {title}
          </h1>
          <p
            className="w-11/12 px-4 text-center font-primary text-2xl drop-shadow-lg 
              sm:w-8/12 sm:text-3xl
              md:w-6/12 md:text-3xl
              2xl:w-7/12 2xl:text-4xl"
          >
            {subtitle}
          </p>
          <Spacer size="md" />
          <CtaButton name="Plan your trip" />
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
