import FeaturedImage from '../gallery/FeaturedImage';

const featuredImages = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    title: 'Modern Living Room',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
    title: 'Contemporary Kitchen',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80',
    title: 'Elegant Bedroom',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    title: 'Modern Living Room',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
    title: 'Contemporary Kitchen',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  }
 
];

export default function FeaturedSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12">All Featured Interiors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {featuredImages.map((image, index) => (
            <FeaturedImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}