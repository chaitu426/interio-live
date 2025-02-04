"use client";

import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideShieldCheck } from "lucide-react"; // Trust icon

const staticImages = [
  { id: "1", url: "/images/badroom.webp", alt: "Beautiful landscape with mountains and a lake",  },
  { id: "2", url: "/images/degine1.webp", alt: "Busy city street at night with bright lights" },
  { id: "21", url: "/images/image (15).png", alt: "Close-up of a majestic lion" },
  { id: "22", url: "/images/image (16).png", alt: "Modern smartphone with app icons" },
  { id: "23", url: "/images/image (17).png", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "/images/image (28).png", alt: "Aerial view of a modern cityscape" },
  { id: "4", url: "/images/image (2).png", alt: "Modern smartphone with app icons" },
  { id: "5", url: "/images/image (3).png", alt: "Serene beach scene with palm trees" },
  { id: "6", url: "/images/image (4).png", alt: "Aerial view of a modern cityscape" },
  { id: "7", url: "/images/degine2.webp", alt: "Gourmet burger with fries" },
  { id: "8", url: "/images/image (5).png", alt: "Close-up of a majestic lion" },
  { id: "61", url: "/images/image (6).png", alt: "Aerial view of a modern cityscape" },
  { id: "71", url: "/images/degine2.webp", alt: "Gourmet burger with fries" },
  { id: "8", url: "/images/image (7).png", alt: "Close-up of a majestic lion" },
  { id: "9", url: "/images/image (8).png", alt: "Modern smartphone with app icons" },
  { id: "10", url: "/images/image (9).png", alt: "Serene beach scene with palm trees" },
  { id: "12", url: "/images/image (10).png", alt: "Aerial view of a modern cityscape" },
  { id: "13", url: "/images/degine2.webp", alt: "Gourmet burger with fries" },
  { id: "14", url: "/images/badroom.webp", alt: "Beautiful landscape with mountains and a lake" },
  { id: "15", url: "/images/degine1.webp", alt: "Busy city street at night with bright lights" },
  { id: "16", url: "/images/image (11).png", alt: "Colorful plate of fresh fruits and vegetables" },
  { id: "17", url: "/images/image (12).png", alt: "Modern smartphone with app icons" },
  { id: "18", url: "/images/image (13).png", alt: "Serene beach scene with palm trees" },
  { id: "19", url: "/images/image (14).png", alt: "Aerial view of a modern cityscape" },
  { id: "20", url: "/images/degine2.webp", alt: "Gourmet burger with fries" },
  { id: "21", url: "/images/image (15).png", alt: "Close-up of a majestic lion" },
  { id: "22", url: "/images/image (16).png", alt: "Modern smartphone with app icons" },
  { id: "23", url: "/images/image (17).png", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "/images/image (18).png", alt: "Aerial view of a modern cityscape" },
  { id: "21", url: "/images/image (19).png", alt: "Close-up of a majestic lion" },
  { id: "22", url: "/images/image (20).png", alt: "Modern smartphone with app icons" },
  
  { id: "24", url: "/images/image (22).png", alt: "Aerial view of a modern cityscape" },
  { id: "21", url: "/images/image (23).png", alt: "Close-up of a majestic lion" },
  { id: "22", url: "/images/image (24).png", alt: "Modern smartphone with app icons" },
  { id: "23", url: "/images/image (25).png", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "/images/image (26).png", alt: "Aerial view of a modern cityscape" },
  { id: "21", url: "/images/image (27).png", alt: "Close-up of a majestic lion" },
  { id: "22", url: "/images/image (28).png", alt: "Modern smartphone with app icons" },
  { id: "23", url: "/images/image (29).png", alt: "Serene beach scene with palm trees" },
  { id: "24", url: "/images/image (30).png", alt: "Aerial view of a modern cityscape" },
  { id: "25", url: "/images/degine2.webp", alt: "Gourmet burger with fries" },
];

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
              <img
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
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      className="rounded-lg object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
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
          src={image.url || "/placeholder.svg"}
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
      <div className="h-40 bg-gray-200 rounded-md mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-md mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
    </div>
  );
}