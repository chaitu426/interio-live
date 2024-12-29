import Carousel from '../components/Carousel';
import PricingSection from '../components/sections/PricingSection';
import FeaturedSection from '../components/sections/FeaturedSection';

export default function Home() {
  return (
    <div>
      <Carousel />
      <FeaturedSection />
      <PricingSection />
    </div>
  );
}