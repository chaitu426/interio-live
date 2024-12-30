'use client'

import { motion } from 'framer-motion'

const demo = "/images/demo.jpg";



export default function Contact() {

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
                        Privacy Policy
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
                            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6">

                                At interio.live, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website, interact with our services, or use any of our products. We are committed to maintaining the confidentiality and security of your personal data.<br/>

                                <span className='font-semibold'>1. Information We Collect</span><br/>
                                We may collect the following types of personal information:<br/>

                                Personal Identifiable Information (PII): This includes your name, email address, phone number, and billing address when you interact with our website or make inquiries.
                                Technical Data: We may collect non-personal information such as IP addresses, browser types, device information, and cookies to enhance user experience.
                                Transactional Data: Information related to transactions, including payment details, order history, and service preferences.
                                User-generated Content: Any content you submit, such as feedback, reviews, or messages, through our contact forms or communication channels.<br/>
                                <span className="font-semibold">2. How We Use Your Information</span><br/>
                                We use the collected information for the following purposes:<br/>

                                To Provide Services: To respond to your inquiries, process orders, and manage your interactions with our website.
                                To Improve User Experience: To personalize content, improve website functionality, and enhance our offerings.
                                Marketing and Communications: We may use your information to send promotional content, newsletters, and updates related to our services. You can opt-out of these communications at any time.
                                Legal Compliance: To comply with legal obligations, resolve disputes, and enforce agreements.<br/>
                                <span className='font-semibold'>3. How We Protect Your Information</span><br/>
                                We implement a variety of security measures to protect your personal data, including encryption, secure servers, and strict access controls. While we strive to protect your data, no method of transmission over the internet is entirely secure, so we cannot guarantee absolute security.<br/>

                                <span className='font-semibold'>4. Cookies and Tracking Technologies</span><br/>
                                We use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and personalize content. You can manage your cookie preferences through your browser settings.<br/>

                                <span className='font-semibold'>5. Third-Party Services</span><br/>
                                We may share your data with third-party services that assist with website functionality, analytics, and payment processing. These third-party providers are obligated to protect your data in accordance with our privacy policy and applicable laws.<br/>

                                <span className='font-semibold'>6. Your Rights</span><br/>
                                You have the right to:<br/>

                                Access and request copies of your personal data.
                                Correct or update any inaccurate information.
                                Request deletion of your personal data, subject to legal obligations.
                                Opt-out of marketing communications.
                                To exercise any of these rights, please contact us at [insert email/contact info].<br/>

                                <span className='font-semibold'>7. Changes to This Privacy Policy</span><br/>
                                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates.</p>
                           
                        </div>

                        
                    
                </div>
            </section>

            
        </div>
    )
}





