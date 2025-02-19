import FeaturedImage from '../gallery/FeaturedImage';

const featuredImages = [
  {
    imageUrl: 'https://ik.imagekit.io/81grncrg2/degine2.png?updatedAt=1739685419800',
    title: 'Modern Living Room',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['./images/degine3.webp','./images/degine1.webp','./images/degine2.webp'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  {
    imageUrl: 'https://ik.imagekit.io/81grncrg2/image%20(18).png?updatedAt=1739685464819',
    title: 'Contemporary Kitchen',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['./images/degine1.webp','./images/degine3.webp','./images/degine2.webp'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  {
    imageUrl: 'https://ik.imagekit.io/81grncrg2/image%20(9).png?updatedAt=1739685437629',
    title: 'Elegant Bedroom',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['./images/degine2.webp','./images/degine1.webp','./images/degine3.webp'],
    features: ["High-quality leather material",
    "Ergonomic design for comfort",
    "Available in multiple colors and sizes",],
    policies:["30-day return policy",
    "Free shipping for orders over $50",
    "One-year warranty included",]
  },
  
  {
    imageUrl: 'https://ik.imagekit.io/81grncrg2/bathroom.png?updatedAt=1739685419279',
    title: 'Washroom',
    description: "People are used to seeing navigation elements in headers, and we discussed this topic in a separate article. However, footers can also contain global navigation to improve the user’s experience. When pages are long, especially if we’re talking about a mobile site version, it sometimes makes sense to add navigation options in a footer. Many of your visitors will appreciate that.",
    additionalImages: ['./images/degine3.webp','./images/degine2.webp','./images/degine1.webp'],
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