import React, { useEffect, useRef } from 'react';
import heroLayer1Deer from '../../assets/heroLayer1-deer.svg';
import heroLayer2Birds from '../../assets/heroLayer2-birds.svg';
import heroLayer3Lake from '../../assets/heroLayer3-lake.svg';
import heroLayer4Mountains from '../../assets/heroLayer4-mountains.svg';
import heroLayer5Mountains from '../../assets/heroLayer5-mountains.svg';
import heroLayer6SunSky from '../../assets/heroLayer6-sunsky.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
// import styles from './Hero.module.css';

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
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
            y: useTransform(scrollYProgress, (progress) => `${progress * 50}%`),
          }}
          className="pointer-events-none absolute bottom-0 left-[-80%]
              h-auto w-[250%] max-w-[300%]
              md:left-[-20%] md:h-[auto] md:w-[140%]
              lg:left-[0%] lg:h-auto lg:w-[100%]"
        />

        <motion.img
          src={heroLayer5Mountains}
          style={{
            y: useTransform(
              scrollYProgress,
              (progress) => `${progress * 200}%`
            ),
          }}
          className="pointer-events-none absolute bottom-[20%]
              left-[-40%] h-auto w-[200%] max-w-[300%] 
              md:bottom-[20%] md:left-[-5%] md:h-[auto] md:w-[130%]
              lg:bottom-[30%] lg:left-[-5%] lg:h-auto lg:w-[120%]"
        />
        <motion.img
          src={heroLayer4Mountains}
          style={{
            y: useTransform(scrollYProgress, (progress) => `${progress * 80}%`),
          }}
          className="pointer-events-none absolute bottom-[10%]
              left-[-30%] h-auto w-[200%] max-w-[300%] 
              md:bottom-[10%] md:left-[-20%] md:h-[auto] md:w-[130%]
              lg:bottom-[20%] lg:left-[-30%] lg:h-auto lg:w-[120%]"
        />
        <motion.img
          src={heroLayer3Lake}
          style={{
            y: useTransform(scrollYProgress, (progress) => `${progress * 30}%`),
          }}
          className="pointer-events-none absolute bottom-0  left-[-70%]
              h-auto w-[200%] max-w-[300%]
              md:left-[-20%] md:h-[auto] md:w-[130%]
              lg:left-[0%] lg:h-auto lg:w-[100%]"
        />
        <motion.img
          src={heroLayer2Birds}
          style={{
            y: useTransform(
              scrollYProgress,
              (progress) => `${progress * 150}%`
            ),
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
    </section>
  );
};

export { Hero };
