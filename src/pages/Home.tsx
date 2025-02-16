"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollCards from "../components/Carousel";
import PricingSection from "../components/sections/PricingSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import Howwework from "../components/Howwework";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(true); // Add state for maintenance

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsUnderMaintenance(false); // Set to false when the site is ready
    }, 3000); // This simulates the loading time (set accordingly)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isUnderMaintenance ? (
        <MaintenancePopup />
      ) : (
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
      )}
    </div>
  );
}

// Maintenance popup component
function MaintenancePopup() {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">Site Under Maintenance</h2>
        <p className="text-gray-600 mt-2">We're working hard to get things ready. you can explore site!</p>
      </div>
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
