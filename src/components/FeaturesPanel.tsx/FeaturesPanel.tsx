import React from 'react';
import Header from '../shared/Header';
import { ColorName } from '../../types/ColorName';
import { FontFamily } from '../../types/FontFamily';

interface FeaturesPanelProps {
  tagline: string;
}

export const FeaturesPanel: React.FC<FeaturesPanelProps> = ({ tagline }) => {
  return (
    <>
      <p>{tagline}</p>
      <Header
        type="h2"
        color={ColorName.BLACK}
        font={FontFamily.DISPLAY}
        text={'We make travel accessible'}
      />
    </>
  );
};
