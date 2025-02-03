"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import Button from "../ui/Button";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { className?: string }
>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto",
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </motion.div>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader: React.FC<{ className?: string }> = ({ className, ...props }) => (
  <div className={cn("text-center mb-4", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

interface DialogBodyProps {
  imageUrl: string;
  additionalImages: string[];
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  title: string;
  description: string;
  features: string[];
  policies: string[];
  handleContactClick: () => void;
}

const DialogBody: React.FC<DialogBodyProps> = ({
  imageUrl,
  additionalImages,
  selectedImage,
  setSelectedImage,
  title,
  description,
  features,
  policies,
  handleContactClick,
}) => (
  <div className="p-6 max-h-[80vh] overflow-y-auto">
    {/* Image Section */}
    <div className="mb-6">
      <motion.img
        src={selectedImage}
        alt={title}
        className="w-full h-64 md:h-80 object-cover rounded-lg"
        loading="lazy"
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      <div className="flex space-x-2 overflow-x-auto mt-4">
        {[imageUrl, ...additionalImages].map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border transition-transform hover:scale-105 ${
              selectedImage === image ? "border-blue-500" : "border-gray-300"
            }`}
            loading="lazy"
            whileHover={{ scale: 1.1 }}
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
);

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
};