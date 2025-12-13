"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, BarChart3, Binary } from "lucide-react";

const certifications = [
    {
        name: "SAFe® 6 Product Owner/Product Manager",
        issuer: "Scaled Agile, Inc.",
        icon: ShieldCheck,
        color: "bg-blue-50 text-blue-600"
    },
    {
        name: "Microsoft Azure AI Certified",
        issuer: "Microsoft",
        icon: Binary,
        color: "bg-sky-50 text-sky-600"
    },
    {
        name: "Google Analytics & Power BI",
        issuer: "Google & Microsoft",
        icon: BarChart3,
        color: "bg-orange-50 text-orange-600"
    },
    {
        name: "Master Data Science",
        issuer: "ISTAO",
        icon: BadgeCheck,
        color: "bg-emerald-50 text-emerald-600"
    }
];

export default function Certifications() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-blue mb-4">Certifications</h2>
                    <div className="h-1 w-20 bg-vodafone-red mx-auto" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-vodafone-red/20 hover:shadow-lg transition-colors text-center group"
                        >
                            <div className={`p-4 rounded-full mb-4 ${cert.color} group-hover:scale-110 transition-transform`}>
                                <cert.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-navy-blue mb-2 leading-tight">
                                {cert.name}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">
                                {cert.issuer}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
