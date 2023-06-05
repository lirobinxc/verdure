import React, { useState } from 'react';
import FeatureCard, { FeatureCardProps } from '../shared/FeatureCard';
import useMeasure from 'react-use-measure';
import { twJoin } from 'tailwind-merge';

export interface FeatureCardListProps {
  data: Omit<FeatureCardProps, 'onHover' | 'isActive'>[];
}

const FeatureCardList: React.FC<FeatureCardListProps> = ({ data }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [measuredRef] = useMeasure({ debounce: 500 });

  function handleCardHover(idx: number) {
    setActiveIdx(idx);
  }

  return (
    <div
      // style={{ height }}
      className={twJoin(
        `flex flex-col 
        md:h-[22rem] md:flex-row md:items-end`
      )}
    >
      {data.map((item, i) => (
        <FeatureCard
          ref={i === 0 ? measuredRef : null}
          key={item.title}
          {...item}
          isActive={i === activeIdx}
          onCardHover={() => handleCardHover(i)}
        />
      ))}
    </div>
  );
};

export default FeatureCardList;
