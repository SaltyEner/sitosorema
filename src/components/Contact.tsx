"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-corporate-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 bg-navy-blue text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-serif font-bold mb-4">Let's Connect</h2>
                                <p className="text-slate-300 mb-8 leading-relaxed">
                                    Open to discussing new opportunities in IT Delivery, Product Management, and Digital Transformation.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:sara.prosperi@example.com"
                                    className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
                                >
                                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-vodafone-red transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>sara.prosperi@example.com</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/sara-prosperi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
                                >
                                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#0077b5] transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <span>linkedin.com/in/sara-prosperi</span>
                                </a>
                            </div>
                        </div>

                        <div className="p-12 flex flex-col justify-center bg-slate-50">
                            <h3 className="text-xl font-bold text-navy-blue mb-4">Ready to accelerate your digital strategy?</h3>
                            <p className="text-slate-600 mb-8">
                                Download my full CV to see detailed project history and achievements.
                            </p>

                            <motion.a
                                href="/cv.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="group flex items-center justify-between px-6 py-4 bg-white border border-slate-200 rounded-xl hover:border-vodafone-red hover:shadow-lg transition-all"
                            >
                                <span className="font-semibold text-navy-blue">Download Resume</span>
                                <ArrowRight className="w-5 h-5 text-vodafone-red transform group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
