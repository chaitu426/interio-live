
'use client';

import { motion } from 'framer-motion';

const demo = "/images/demo.jpg";


export default function Contact() {


    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-black"
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
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-lg md:text-xl lg:text-2xl max-w-4xl"
                    >
                        We're Here to Help You Transform Your Space
                    </motion.p>
                </div>
            </motion.div>

            {/* Content Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                            At interio.live, we believe that interior design is not just about aesthetics—it's about creating spaces that enhance lives. As a leading interior design brand, we specialize in transforming spaces into personal expressions of style, comfort, and functionality. Our mission is to deliver exceptional design solutions that inspire, motivate, and add value to every space we touch.

                            Founded by a passionate team of experienced designers and innovators, interio.live is committed to redefining the way people experience and interact with their living and working environments. Our approach goes beyond trends—we focus on timeless design principles, sustainable solutions, and personalized spaces that reflect the unique lifestyles of our clients.<br />

                            <span className='font-semibold'>Our Expertise</span><br />
                            With years of experience in the interior design industry, interio.live offers a wide range of services tailored to meet the needs of residential, commercial, and corporate clients. We combine creativity with technical expertise to design spaces that are not only visually stunning but also functional and comfortable.

                            Residential Design: Whether it's your home, apartment, or villa, we create interiors that feel like your personal sanctuary. From luxurious living rooms to cozy bedrooms, we bring your dream home to life with attention to detail and style.<br />

                            Commercial Design: We understand the importance of creating a lasting impression in a professional setting. Our commercial designs elevate brands by reflecting their identity, culture, and values through well-planned and thoughtfully designed workspaces, retail environments, and hospitality spaces.<br />

                            Space Planning and 3D Visualization: Our team excels in maximizing the potential of any space, ensuring functionality, flow, and an aesthetically pleasing layout. With the use of advanced 3D visualization tools, we give you a glimpse of your space before the design comes to life, ensuring you are 100% confident in your choices.<br />

                            Project Management: From concept to completion, we handle every aspect of the design process. Our experienced project managers ensure that timelines, budgets, and quality standards are met, providing a seamless and stress-free experience.<br />

                            <span className='font-semibold'>Our Process</span><br />
                            We believe in a collaborative approach that keeps you at the heart of the design process. From the very first consultation to the final touches, our team works closely with you to understand your needs, preferences, and vision. Here’s how we bring your ideas to life:

                            Consultation and Conceptualization: We begin by listening to your goals, understanding your lifestyle, and evaluating your space. This helps us develop a concept that aligns with your personal style and functionality needs.<br />

                            Design Development: Our design team creates detailed plans, mood boards, and 3D renderings to give you a clear vision of your future space. We incorporate your feedback and make adjustments to ensure the design truly reflects your tastes.<br />

                            Execution and Project Management: Once the design is finalized, we manage every step of the implementation. Our network of trusted contractors and suppliers ensures quality craftsmanship and timely completion, all while sticking to the agreed budget.<br />

                            Final Reveal and Handover: The final stage is the most exciting—watching your dream space come to life. We carefully place the finishing touches, ensuring every element is perfect, and then present the completed project to you with pride.<br />

                            <span className='font-semibold'>Our Values</span><br />
                            Creativity: We are driven by innovation and a passion for creating unique, one-of-a-kind spaces. Every project is an opportunity to push the boundaries of design, creating something truly extraordinary.<br />

                            Sustainability: At interio.live, we are committed to using sustainable materials and eco-friendly design practices. We strive to reduce environmental impact while creating beautiful and durable spaces.<br />

                            Quality: We believe in delivering only the highest quality designs, materials, and workmanship. Our attention to detail ensures that every project is crafted to stand the test of time.<br />

                            Customer-Centric Approach: Your satisfaction is our priority. We work collaboratively with you throughout the process, ensuring that your vision and needs are met at every stage of the journey.<br />

                            <span className='font-semibold'>Our Vision</span><br />
                            Our vision is to make interio.live a trusted name in interior design—known for pushing boundaries, staying ahead of trends, and transforming spaces into functional works of art. We aim to build lasting relationships with our clients, becoming their go-to design partner for all their future projects.<br />

                            <span className='font-semibold'>Why Choose Us?</span><br />
                            Tailored Solutions: Every design we create is unique and customized to fit the needs and personality of our clients. We don’t believe in one-size-fits-all solutions.<br />

                            Expert Team: Our designers are highly skilled professionals who bring years of experience and a deep passion for design to every project.<br />

                            Comprehensive Services: From initial consultation to final installation, we handle all aspects of the design process, ensuring a smooth and seamless experience.<br />

                            Transparency and Integrity: We believe in clear communication and full transparency throughout the design process, keeping you informed every step of the way.</p>

                    </div>
                </div>
            </section>
        </div>
    );
}
