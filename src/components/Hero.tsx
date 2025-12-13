import { ArrowRight, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-corporate-white px-4 sm:px-6 lg:px-8">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 transform translate-x-1/4" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="order-2 lg:order-1 text-center lg:text-left"
                >
                    <div className="inline-block mb-4 px-3 py-1 bg-vodafone-red/10 text-vodafone-red font-semibold text-sm rounded-full tracking-wider uppercase">
                        IT Delivery Manager & Product Owner
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-navy-blue mb-6 leading-tight">
                        Sara <span className="text-vodafone-red">Prosperi</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Driving Digital Transformation & Operational Excellence through Data-Driven Strategies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.a
                            href="/cv.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="group flex items-center justify-center gap-2 px-8 py-4 bg-vodafone-red text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/25"
                        >
                            <FileText className="w-5 h-5" />
                            Download CV
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/sara-prosperi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="group flex items-center justify-center gap-2 px-8 py-4 bg-navy-blue text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-slate-500/25"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn Profile
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Content - Real Headshot */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                        {/* Animated Rings */}
                        <div className="absolute inset-0 rounded-full border border-vodafone-red/20 scale-110 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-0 rounded-full border border-navy-blue/10 scale-125 animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/sara-profile.jpg"
                                alt="Sara Prosperi"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* Professional Badges/Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [0, -10, 0] }}
                            transition={{
                                opacity: { delay: 1, duration: 0.5 },
                                y: { repeat: Infinity, duration: 4, ease: "easeInOut", times: [0, 0.5, 1] }
                            }}
                            className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border-l-4 border-vodafone-red z-20"
                        >
                            <div className="text-sm font-bold text-navy-blue">Senior IT Manager</div>
                            <div className="text-xs text-slate-500">5+ Years Experience</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: [0, 10, 0] }}
                            transition={{
                                opacity: { delay: 1.2, duration: 0.5 },
                                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5, times: [0, 0.5, 1] }
                            }}
                            className="absolute top-4 -right-8 bg-white p-3 rounded-xl shadow-xl border-r-4 border-navy-blue z-20 hidden lg:block"
                        >
                            <div className="text-sm font-bold text-navy-blue">Certified SAFe® PO</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
