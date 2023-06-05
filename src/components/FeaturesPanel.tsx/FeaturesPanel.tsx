import React from 'react';
import Header from '../shared/Header';
import { ColorName } from '../../types/ColorName';
import { FontFamily } from '../../types/FontFamily';
import Container from '../shared/Container';
import Spacer from '../shared/Spacer';
import FeatureCard from '../shared/FeatureCard';
import { mockFeaturePanelData } from './mockFeaturePanelData';
import FeatureCardList from './FeaturesCardList';

interface FeaturesPanelProps {
  tagline: string;
}

export const FeaturesPanel: React.FC<FeaturesPanelProps> = ({ tagline }) => {
  return (
    <section className="bg-darkGreen text-white">
      <Container>
        <p
          className="color-white font-primary font-semibold text-lightGreen
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
              text={'We make travel accessible'}
            />
          </div>
          <p
            className="flex-1 text-base
              sm:max-w-md
              md:max-w-md
              lg:max-w-xs lg:text-lg
              xl:max-w-sm"
          >
            Discover a world without barriers with our inclusive travel service,
            dedicated to making unforgettable experiences accessible to
            everyone.
          </p>
        </header>
        <Spacer size="2xl" />
        <FeatureCardList data={mockFeaturePanelData} />
      </Container>
    </section>
  );
};
