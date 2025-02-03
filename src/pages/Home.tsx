import Carousel from '../components/Carousel';
import PricingSection from '../components/sections/PricingSection';
import FeaturedSection from '../components/sections/FeaturedSection';
 import Howwework from '../components/Howwework';

export default function Home() {
  return (
    <div>
      <Carousel />
      <FeaturedSection />
      <Howwework/>
      <PricingSection />
    </div>
  );
}