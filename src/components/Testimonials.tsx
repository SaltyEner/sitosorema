"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Sara has an exceptional ability to translate complex business requirements into technical solutions. Her leadership in the Payment Hub migration was impeccable.",
        author: "Marco Rossi", // Placeholder
        role: "Head of IT, Vodafone", // Placeholder
        initials: "MR"
    },
    {
        quote: "A data-driven visionary. She transformed our CRM strategy at Ariston, directly impacting our retention metrics. Highly recommended for any PO role.",
        author: "Giulia Bianchi", // Placeholder
        role: "Digital Director, Ariston Group", // Placeholder
        initials: "GB"
    },
    {
        quote: "Proactive, precise, and strategic. Sara manages stakeholders with ease and always keeps the delivery team focused on value.",
        author: "Technical Lead",
        role: "Development Team",
        initials: "TL"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-navy-blue text-white relative overflow-hidden" id="testimonials">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-vodafone-red rounded-full opacity-5 blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-[80px] -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">What Colleagues Say</h2>
                    <div className="h-1 w-20 bg-vodafone-red mx-auto mb-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm relative"
                        >
                            <Quote className="w-10 h-10 text-vodafone-red/20 absolute top-6 right-6" />

                            <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-vodafone-red to-pink-600 flex items-center justify-center font-bold text-white text-sm">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{t.author}</div>
                                    <div className="text-xs text-slate-400">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
