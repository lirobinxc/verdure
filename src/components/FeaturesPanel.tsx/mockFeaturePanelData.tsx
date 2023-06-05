import type { FeatureCardProps } from '../shared/FeatureCard';
import featurePic1 from '../../assets/feature-panel/feature1.jpg';
import featurePic2 from '../../assets/feature-panel/feature2.jpg';
import featurePic3 from '../../assets/feature-panel/feature3.jpg';

export const mockFeaturePanelData: FeatureCardProps[] = [
  {
    eyebrow: '01',
    title: 'Freedom to roam',
    content:
      'Immerse yourself in breathtaking landscapes, awe-inspiring natural wonders.',
    cta: 'Learn more',
    imageUrl: featurePic1,
    isActive: false,
  },
  {
    eyebrow: '02',
    title: 'Ultimate comfort',
    content:
      'Embrace a harmonious blend of comfort and innovation, crafted itinerary elevate your journey.',
    cta: 'Learn more',
    imageUrl: featurePic2,
    isActive: false,
  },
  {
    eyebrow: '03',
    title: 'Vehicle free zone',
    content:
      'Step into a vehicle-free zone and embrace a tranquil environment where you take center stage.',
    cta: 'Learn more',
    imageUrl: featurePic3,
    isActive: false,
  },
];
