import { forwardRef } from 'react';
import Header from './Header';
import { FontFamily } from '../../types/FontFamily';
import Spacer from './Spacer';
import { motion, AnimatePresence } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import useMeasure from 'react-use-measure';
import { BsArrowRight } from 'react-icons/bs';

export interface FeatureCardProps {
  eyebrow: string;
  title: string;
  content: string;
  cta: string;
  imageUrl: string;
  isActive: boolean;
  onCardHover?: () => void;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ eyebrow, title, content, cta, imageUrl, isActive, onCardHover }, ref) => {
    const [measuredRef, { height }] = useMeasure();

    return (
      <article
        ref={ref}
        onMouseEnter={onCardHover}
        className={twJoin(
          isActive ? 'md:bg-teal-800' : 'md:bg-emerald-950',
          `
        relative flex h-fit flex-1 flex-col justify-between gap-4 overflow-hidden bg-emerald-950 p-8 transition duration-500
        sm:p-8
        md:min-h-[20rem] md:p-10
        lg:p-12
        xl:p-16
        `
        )}
      >
        <motion.img
          initial={{}}
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
        <motion.div
          key={title}
          animate={{ height }}
          className="overflow-hidden"
        >
          <div ref={measuredRef}>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p
                    className={twJoin(
                      `text-sm 
                    sm:w-2/3
                    md:w-full md:text-base
                    lg:w-4/5`
                    )}
                  >
                    {content}
                  </p>
                  <button className="flex flex-row items-center justify-end gap-2 self-start pt-6 font-semibold">
                    {cta} <BsArrowRight className="text-blue-300" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </article>
    );
  }
);

export default FeatureCard;
