"use client";

import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "Data Science for Business",
        "Agile Leadership",
        "Customer Experience",
        "Digital Transformation",
        "Stakeholder Management",
        "Operational Excellence"
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-blue mb-8">About Me</h2>

                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        Manager con <span className="font-semibold text-vodafone-red">5+ anni di esperienza</span> nella gestione end-to-end di progetti CRM e MarTech.
                        Esperta nel trasformare strategie di business in soluzioni digitali scalabili, guidando team cross-funzionali in contesti internazionali.
                        Appassionata di dati e di come questi possano guidare decisioni strategiche per migliorare l'efficienza operativa e la customer experience.
                    </p>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white px-4 py-3 rounded-lg shadow-sm border border-slate-100 text-slate-700 font-medium hover:border-vodafone-red/30 hover:shadow-md transition-all cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
