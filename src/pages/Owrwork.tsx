'use client'

import { motion } from 'framer-motion'
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react'
import demo from "../assets/demo.jpg"


export default function Contact() {
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hello, I'm interested in your interior design services.")
    window.open(`https://wa.me/${import.meta.env.VITE_MOBILE_NO}?text=${message}`, '_blank')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[400px] overflow-hidden bg-black"
      >
        <motion.img
          src={demo}
          alt="Contact Us Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
          >
            Owr Work
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-center max-w-2xl"
          >
            We're Here to Help You Transform Your Space
          </motion.p>
        </div>
      </motion.div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-6">We're excited to hear about your project! Click the button below to start a conversation with us on WhatsApp.</p>
              <Button 
                onClick={handleWhatsAppRedirect}
                className="w-half"
                
              >
                
                Chat with Us on WhatsApp
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-primary" />
                  <span>+91 844 629 3227</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-primary" />
                  <span>info@yourcompany.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  <span>123 Design Street, Creativity City, 12345</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Space?</h2>
          <Button  onClick={handleWhatsAppRedirect}>
            
            Start Your Project Now
          </Button>
        </div>
      </section>
    </div>
  )
}