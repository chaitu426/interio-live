import { useState } from "react";
import Button from "../ui/Button";

interface FeaturedImageProps {
  imageUrl: string;
  title: string;
  description: string;
  additionalImages: string[];
  features: string[];
  policies: string[];
}

export default function FeaturedImage({
  imageUrl,
  title,
  description,
  additionalImages,
  features,
  policies,
}: FeaturedImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContactClick = () => {
    const message = `Hello, I am interested in your product: ${title}. \n\nDescription: ${description} \n\nImage: ${selectedImage}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/7020769985?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Card Component */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-100 hover:shadow-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transform transition duration-300 hover:scale-110 cursor-pointer"
          loading="lazy" // Lazy loading added here
          onClick={handleOpenModal}
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
          <Button fullWidth className="mt-4" onClick={handleContactClick}>
            Contact us
          </Button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl mx-4 overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {/* Image Section */}
              <div className="mb-6">
                <img
                  src={selectedImage}
                  alt={title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  loading="lazy" // Lazy loading added here
                />
                <div className="flex space-x-2 overflow-x-auto mt-4">
                  {[imageUrl, ...additionalImages].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setSelectedImage(image)}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                        selectedImage === image ? "border-blue-500" : "border-gray-300"
                      }`}
                      loading="lazy" // Lazy loading added here for thumbnails
                    />
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
                <p className="text-gray-700 mb-6">{description}</p>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Policies:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {policies.map((policy, index) => (
                    <li key={index}>{policy}</li>
                  ))}
                </ul>

                <Button fullWidth className="mt-4" onClick={handleContactClick}>
                  Contact us via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
