import PricingCard from '../pricing/PricingCard';

const pricingPlans = [
  {
    title: 'Basic',
    subtitle: 'Perfect for small spaces',
    price: '81,016',
    features: [
      { text: '2 room designs' },
      { text: '3D visualization' },
      { text: 'Furniture recommendations' },
      { text: 'Color palette selection' }
    ]
  },
  {
    title: 'Pro',
    subtitle: 'Ideal for full home makeovers',
    price: '168,116',
    features: [
      { text: '5 room designs' },
      { text: '3D visualization' },
      { text: 'Furniture recommendations' },
      { text: 'Color palette selection' },
      { text: 'Custom furniture design' },
      { text: '2 revision rounds' }
    ]
  },
  {
    title: 'Premium',
    subtitle: 'For luxury and complex projects',
    price: '336,316',
    features: [
      { text: 'Unlimited room designs' },
      { text: '3D visualization' },
      { text: 'Furniture recommendations' },
      { text: 'Color palette selection' },
      { text: 'Custom furniture design' },
      { text: 'Unlimited revision rounds' },
      { text: 'On-site consultation' },
      { text: 'Project management' }
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-4 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Pricing</h2>
        <h2 className="text-xl font-normal text-center mb-12">Customizable according to the order</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}