import React from 'react';

interface AboutPanelProps {
  title: string;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};
