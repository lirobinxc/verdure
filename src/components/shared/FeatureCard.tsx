import React from 'react';
import Header from './Header';
import { FontFamily } from '../../types/FontFamily';
import Spacer from './Spacer';
import { motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import useMeasure from 'react-use-measure';

export interface FeatureCardProps {
  eyebrow: string;
  title: string;
  content: string;
  cta: string;
  imageUrl: string;
  isActive: boolean;
  onCardHover?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  eyebrow,
  title,
  content,
  cta,
  imageUrl,
  isActive,
  onCardHover,
}) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.article
      whileHover={{}}
      onHoverStart={onCardHover}
      className={twJoin(
        isActive ? 'md:bg-emerald-800' : 'md:bg-emerald-950',
        `
        relative flex h-fit flex-1 flex-col justify-between gap-4 overflow-hidden bg-emerald-950 p-8 transition duration-500
        sm:p-8
        md:p-10
        lg:p-12
        xl:p-16
        `
      )}
    >
      <img
        src={imageUrl}
        className={twJoin(
          !isActive && 'md:opacity-0',
          `
          absolute right-[-1rem] top-[-1rem] h-32 rounded-b-full rounded-l-full transition-all duration-300
          sm:h-36
          md:h-36
          lg:h-40
          xl:h-40
          `
        )}
      />
      <div className="z-10 w-1/3">
        <p className="font-display text-5xl text-gray-500">{eyebrow}</p>
        <Spacer size="sm" />
        <Header
          type="h3"
          font={FontFamily.PRIMARY}
          text={title}
          className="font-bold !leading-6"
        />
      </div>
      <motion.div key={title} animate={{ height }} className="overflow-hidden">
        <div ref={ref}>
          {isActive && (
            <>
              <p
                className="text-sm
                  sm:w-2/3
                  md:w-full md:text-base
                  lg:w-4/5"
              >
                {content}
              </p>
              <button className="justify-end self-start pt-6">{cta}</button>
            </>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
};

export default FeatureCard;
