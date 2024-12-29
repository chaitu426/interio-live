'use client'

import { motion } from 'framer-motion'

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
            Terms & Conditions
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
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6">Effective Date: [Insert Date]<br/>

                These Terms & Conditions (“Terms”) govern your use of the website interio.live (“the Site”) and the services provided by interio.live. By accessing or using our services, you agree to be bound by these Terms.<br/>

                <span className='font-semibold'>1. General Use of the Site</span><br/>
                Eligibility: You must be at least 18 years old to use our services.
                Account Responsibility: If you create an account on the Site, you are responsible for maintaining the confidentiality of your account details, including your password. You are also responsible for all activities that occur under your account.
                Prohibited Uses: You may not use the Site for any unlawful purpose, including but not limited to infringing on intellectual property rights, spamming, or spreading malware.<br/>
                <span className='font-semibold'>2. Services Provided</span><br/>
                interio.live offers a variety of services related to interior design, including but not limited to consultations, design services, project management, and product recommendations. We reserve the right to modify, suspend, or discontinue any service at any time.<br/>

                <span className='font-semibold'>3. Intellectual Property</span><br/>
                All content on the Site, including images, logos, graphics, and text, is owned by interio.live or our licensors and is protected by copyright and other intellectual property laws. You may not use any content from the Site without our express permission.<br/>

                <span className='font-semibold'>4. Payment and Billing</span><br/>
                Pricing: All prices for services are clearly listed on the Site. interio.live reserves the right to change prices at any time, but these changes will not affect orders already placed.
                Payments: Payment for services is due at the time of order or as specified. We accept payments through third-party payment processors such as PayPal, Credit Cards, etc.
                Refunds: Refund policies are determined based on the specific service provided. Please refer to our refund policy for more details.<br/>
                <span className='font-semibold'>5. Limitation of Liability</span><br/>
                To the fullest extent permitted by law, interio.live will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or our services. We are not responsible for any loss of data or interruptions to service.<br/>

                <span className='font-semibold'>6. Indemnification</span><br/>
                You agree to indemnify and hold interio.live, its employees, agents, and affiliates harmless from any claims, damages, or expenses arising from your violation of these Terms or misuse of our services.<br/>

                <span className='font-semibold'>7. Privacy</span><br/>
                Your use of the Site is governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.<br/>

                <span className='font-semibold'>8. Third-Party Links</span><br/>
                The Site may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites. We encourage you to review their policies before interacting with them.<br/>

                <span className='font-semibold'>9. Termination</span><br/>
                We may suspend or terminate your access to the Site if we believe you have violated these Terms. Upon termination, all rights granted to you under these Terms will cease immediately.<br/>

                <span className='font-semibold'>10. Governing Law and Dispute Resolution</span><br/>
                These Terms are governed by the laws of [Your Country]. Any disputes arising from your use of the Site or services will be resolved through binding arbitration in [Location].<br/>

                <span className='font-semibold'>11. Changes to Terms</span><br/>
                We reserve the right to update these Terms at any time. Any changes will be posted on this page with an updated effective date. Please review these Terms regularly.</p>
             
            </div>

          
        </div>
      </section>

    </div>
  )
}
