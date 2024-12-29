import { Check } from 'lucide-react';
import Button from '../ui/Button';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: PricingFeature[];
}

export default function PricingCard({ title, subtitle, price, features }: PricingCardProps) {
  // Prepare the WhatsApp message with the pricing information
  const handleContactToTeamClick = () => {
    const featuresList = features.map(feature => `# ${feature.text}`).join('\n');
    const message = ` Hello, I'm interested in your pricing plan:\n\nTitle: ${title}\nSubtitle: ${subtitle}\nPrice: ₹${price}/month\n\nFeatures:\n${featuresList}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8446293227?text=${encodedMessage}`; // Replace with your WhatsApp number
    window.open(whatsappUrl, "_blank"); // Open in a new tab
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full transform transition duration-500 hover:scale-100 hover:shadow-2xl">
      {/* Card Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>

      {/* Price */}
      <div className="mt-6 mb-8 text-center">
        <span className="text-5xl font-bold text-gray-800">₹{price}</span>
        <span className="text-sm text-gray-500 block">/ month</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 opacity-0 animate-fade-in delay-[100ms]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Check className="h-6 w-6 text-green-500" />
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="mt-auto">
        <Button fullWidth className="mt-8 " onClick={handleContactToTeamClick}>
          Contact To Team
        </Button>
      </div>
    </div>
  );
}

