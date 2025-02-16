"use client";

import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideShieldCheck } from "lucide-react"; // Trust icon
import { IKContext, IKImage } from 'imagekitio-react';

const staticImages = [

  { id: "1", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0008.jpg?updatedAt=1739701952784", alt: "Beautiful landscape with mountains and a lake",  },
  { id: "2", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0005.jpg?updatedAt=1739701926417", alt: "Busy city street at night with bright lights" },
  { id: "21", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0013.jpg?updatedAt=1739701952820", alt: "Close-up of a majestic lion" },
  { id: "22", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0023.jpg?updatedAt=1739701952940", alt: "Modern smartphone with app icons" },
  { id: "23", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0019.jpg?updatedAt=1739701952880", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0029.jpg?updatedAt=1739701957121", alt: "Aerial view of a modern cityscape" },
  { id: "4", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0028.jpg?updatedAt=1739701957034", alt: "Modern smartphone with app icons" },
  { id: "5", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0030.jpg?updatedAt=1739701957143", alt: "Serene beach scene with palm trees" },
  { id: "6", url: "https://ik.imagekit.io/81grncrg2/IMG-20250210-WA0007.jpg?updatedAt=1739701926356", alt: "Aerial view of a modern cityscape" },







  { id: "1", url: "https://ik.imagekit.io/81grncrg2/image%20(29).png?updatedAt=1739685486099", alt: "Beautiful landscape with mountains and a lake",  },
  { id: "2", url: "https://ik.imagekit.io/81grncrg2/image(7).png?updatedAt=1739685486072", alt: "Busy city street at night with bright lights" },
  { id: "21", url: "https://ik.imagekit.io/81grncrg2/image%20(27).png?updatedAt=1739685485792", alt: "Close-up of a majestic lion" },
  { id: "22", url: "https://ik.imagekit.io/81grncrg2/image%20(26).png?updatedAt=1739685485231", alt: "Modern smartphone with app icons" },
  { id: "23", url: "https://ik.imagekit.io/81grncrg2/image%20(28).png?updatedAt=1739685485152", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "https://ik.imagekit.io/81grncrg2/IMG-20250127-WA0007.jpg?updatedAt=1739685484288", alt: "Aerial view of a modern cityscape" },
  { id: "4", url: "https://ik.imagekit.io/81grncrg2/IMG-20250126-WA0025.jpg?updatedAt=1739685483273", alt: "Modern smartphone with app icons" },
  { id: "5", url: "https://ik.imagekit.io/81grncrg2/image%20(25).png?updatedAt=1739685481763", alt: "Serene beach scene with palm trees" },
  { id: "6", url: "https://ik.imagekit.io/81grncrg2/image%20(30).png?updatedAt=1739685478266", alt: "Aerial view of a modern cityscape" },
  { id: "7", url: "https://ik.imagekit.io/81grncrg2/image%20(24).png?updatedAt=1739685476830", alt: "Gourmet burger with fries" },
  { id: "8", url: "https://ik.imagekit.io/81grncrg2/image%20(22).png?updatedAt=1739685471715", alt: "Close-up of a majestic lion" },
  { id: "61", url: "https://ik.imagekit.io/81grncrg2/image%20(23).png?updatedAt=1739685471194", alt: "Aerial view of a modern cityscape" },
  { id: "71", url: "https://ik.imagekit.io/81grncrg2/image%20(22)-min.png?updatedAt=1739685471005", alt: "Gourmet burger with fries" },
  { id: "8", url: "https://ik.imagekit.io/81grncrg2/image%20(21).png?updatedAt=1739685470863", alt: "Close-up of a majestic lion" },
  { id: "9", url: "https://ik.imagekit.io/81grncrg2/image%20(20).png?updatedAt=1739685465762", alt: "Modern smartphone with app icons" },
  { id: "10", url: "https://ik.imagekit.io/81grncrg2/image%20(19).png?updatedAt=1739685465507", alt: "Serene beach scene with palm trees" },
  { id: "12", url: "https://ik.imagekit.io/81grncrg2/image%20(18).png?updatedAt=1739685464819", alt: "Aerial view of a modern cityscape" },
  { id: "13", url: "https://ik.imagekit.io/81grncrg2/image%20(17).png?updatedAt=1739685464430", alt: "Gourmet burger with fries" },
  { id: "14", url: "https://ik.imagekit.io/81grncrg2/image%20(15).png?updatedAt=1739685461674", alt: "Beautiful landscape with mountains and a lake" },
  { id: "15", url: "https://ik.imagekit.io/81grncrg2/image%20(16).png?updatedAt=1739685461078", alt: "Busy city street at night with bright lights" },
  { id: "16", url: "https://ik.imagekit.io/81grncrg2/image%20(10).png?updatedAt=1739685459887", alt: "Colorful plate of fresh fruits and vegetables" },
  { id: "17", url: "https://ik.imagekit.io/81grncrg2/image%20(14).png?updatedAt=1739685458894", alt: "Modern smartphone with app icons" },
  { id: "18", url: "https://ik.imagekit.io/81grncrg2/image%20(11).png?updatedAt=1739685458129", alt: "Serene beach scene with palm trees" },
  { id: "19", url: "https://ik.imagekit.io/81grncrg2/image%20(12).png?updatedAt=1739685453829", alt: "Aerial view of a modern cityscape" },
  { id: "20", url: "https://ik.imagekit.io/81grncrg2/image%20(9).png?updatedAt=1739685437629", alt: "Gourmet burger with fries" },
  { id: "21", url: "https://ik.imagekit.io/81grncrg2/image%20(8).png?updatedAt=1739685434246", alt: "Close-up of a majestic lion" },
  { id: "22", url: "https://ik.imagekit.io/81grncrg2/image%20(6).png?updatedAt=1739685432522", alt: "Modern smartphone with app icons" },
  { id: "23", url: "https://ik.imagekit.io/81grncrg2/image%20(5).png?updatedAt=1739685428078", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "https://ik.imagekit.io/81grncrg2/image%20(4).png?updatedAt=1739685425617", alt: "Aerial view of a modern cityscape" },
  { id: "21", url: "https://ik.imagekit.io/81grncrg2/image%20(2).png?updatedAt=1739685420962", alt: "Close-up of a majestic lion" },
  { id: "22", url: "https://ik.imagekit.io/81grncrg2/image.png?updatedAt=1739685420336", alt: "Modern smartphone with app icons" },
  
  { id: "24", url: "https://ik.imagekit.io/81grncrg2/degine2.png?updatedAt=1739685419800", alt: "Aerial view of a modern cityscape" },
  { id: "21", url: "https://ik.imagekit.io/81grncrg2/image%20(3).png?updatedAt=1739685419768", alt: "Close-up of a majestic lion" },
  { id: "22", url: "https://ik.imagekit.io/81grncrg2/bathroom.png?updatedAt=1739685419279", alt: "Modern smartphone with app icons" },
  { id: "23", url: "https://ik.imagekit.io/81grncrg2/badroom.webp?updatedAt=1739685402654", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "https://ik.imagekit.io/81grncrg2/degine1.webp?updatedAt=1739685411136", alt: "Aerial view of a modern cityscape" },
  
];

const urlEndpoint = 'https://ik.imagekit.io/81grncrg2';

export default function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState<{ id: string; url: string; alt: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (image: { id: string; url: string; alt: string }) => setSelectedImage(image);

  const closeModal = () => setSelectedImage(null);

  const similarImages = useMemo(
    () => staticImages.filter((img) => selectedImage && img.id !== selectedImage.id).slice(0, 3),
    [selectedImage]
  );

  return (
    <>
      <div className="mb-8 text-center">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Creative Works
        </motion.h1>
        <motion.p className="text-gray-600 max-w-2xl mx-auto">
          Explore a collection of design inspirations, photography, and creative concepts.
        </motion.p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <motion.div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {staticImages.map((image) => (
            <LazyImageCard key={image.id} image={image} onClick={() => handleImageClick(image)} />
          ))}
        </motion.div>
      )}

      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="flex flex-col items-center">
              <IKContext urlEndpoint={urlEndpoint}>
              <IKImage
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="rounded-lg mb-4 max-w-full"
                loading="lazy"
              />
              <p className="text-center text-sm text-gray-600 mb-4">{selectedImage.alt}</p>
              <h2 className="text-xl font-semibold mb-4">Similar Images</h2>
              <div className="grid grid-cols-3 gap-4">
                {similarImages.map((image: { id: string; url: string; alt: string }) => (
                  <div
                    key={image.id}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                    onClick={() => handleImageClick(image)}
                  >
                    <IKImage
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      className="rounded-lg object-cover w-full h-full"
                      loading="lazy"
                      lqip={{ active: true ,quality: 10 }}
                    />
                  </div>
                ))}
              </div>
              </IKContext>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function LazyImageCard({ image, onClick }: { image: { id: string; url: string; alt: string }; onClick: () => void }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative mb-4 cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform shadow-lg"
      onClick={onClick}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="absolute top-2 right-2 z-10">
        <LucideShieldCheck className="text-blue-600 bg-white p-1 rounded-full shadow-md" size={24} />
      </div>
      {inView ? (
        <img
          src={image.url }
          alt={image.alt}
          className="rounded-lg object-cover w-full h-auto"
          loading="lazy"
        />
      ) : (
        <div className="bg-gray-200 rounded-lg w-full h-56 animate-pulse"></div>
      )}
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md animate-pulse">
      <div className="h-40 bg-gray-100 rounded-md mb-3"></div>
      <div className="h-4 bg-gray-100 rounded-md mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
    </div>
  );
}