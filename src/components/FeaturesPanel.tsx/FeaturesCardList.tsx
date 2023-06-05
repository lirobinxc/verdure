import React, { useEffect, useLayoutEffect, useState } from 'react';
import FeatureCard, { FeatureCardProps } from '../shared/FeatureCard';
import useMeasure from 'react-use-measure';
import { twJoin } from 'tailwind-merge';

export interface FeatureCardListProps {
  data: Omit<FeatureCardProps, 'onHover' | 'isActive'>[];
}

const FeatureCardList: React.FC<FeatureCardListProps> = ({ data }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [measuredRef, { height }] = useMeasure({ debounce: 500 });

  function handleCardHover(idx: number) {
    setActiveIdx(idx);
  }

  return (
    <div
      ref={measuredRef}
      // style={{ height }}
      className={twJoin(
        height > 0 && `h-[${height}px]`,
        `flex flex-col
        md:flex-row md:items-end`
      )}
    >
      {data.map((item, i) => (
        <FeatureCard
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
