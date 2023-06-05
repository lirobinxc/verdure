import React from 'react';
import Header from '../shared/Header';
import { FontFamily } from '../../types/FontFamily';
import Container from '../shared/Container';
import Spacer from '../shared/Spacer';

interface AboutPanelProps {
  tagline: string;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({ tagline }) => {
  return (
    <section className="text-darkGreen">
      <Container>
        <p
          className="color-white font-primary font-semibold text-emerald-600
              md:flex-1"
        >
          {tagline.toLocaleUpperCase()}
        </p>
        <header
          className="flex flex-col gap-2 
            lg:flex-row lg:justify-between lg:gap-12"
        >
          <div>
            <Spacer size="xs" />
            <Header
              type="h2"
              font={FontFamily.DISPLAY}
              text={'book your getaway now'}
            />
          </div>
          <p
            className="flex-1 text-base
              sm:max-w-md
              md:max-w-md
              lg:max-w-xs lg:text-lg
              xl:max-w-sm"
          >
            Explore a world without barriers with our inclusive travel service,
            dedicated to making unforgettable experiences accessible to
            everyone.
          </p>
        </header>
        <Spacer size="2xl" />
      </Container>
    </section>
  );
};
