"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollCards from "../components/Carousel";
import PricingSection from "../components/sections/PricingSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import Howwework from "../components/Howwework";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // This simulates the loading time (set accordingly)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {isLoading ? (
            <div className="flex flex-col gap-6 p-4">
              <SkeletonBox width="100%" height="400px" />
              <SkeletonBox width="100%" height="350px" />
              <SkeletonBox width="100%" height="350px" />
            </div>
          ) : (
            <>
              <ScrollCards />
              <FeaturedSection />
              <Howwework />
              <PricingSection />
            </>
          )}
        </motion.div>
    </div>
  );
}
function SkeletonBox({ width, height }: { width: string; height: string }) {
  return (
    <motion.div
      className="bg-gray-200 rounded-lg animate-pulse"
      style={{ width, height }}
    />
  );
}
