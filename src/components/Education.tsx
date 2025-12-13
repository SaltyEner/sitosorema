"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
    {
        degree: "Master in Data Science per l'Impresa",
        institution: "ISTAO - Istituto Adriano Olivetti",
        period: "2020 - 2021",
        score: null,
        icon: Award
    },
    {
        degree: "Laurea Magistrale in International Economics and Commerce",
        institution: "Univ. Politecnica delle Marche",
        period: "2018 - 2020",
        score: "110 cum laude",
        highlight: true,
        icon: GraduationCap
    },
    {
        degree: "Master en Management (Erasmus)",
        institution: "Universitat Jaume I",
        period: "2019",
        score: null,
        icon: GraduationCap
    },
    {
        degree: "Laurea Triennale in Economia e Commercio",
        institution: "Univ. Politecnica delle Marche",
        period: "2015 - 2018",
        score: "110 cum laude",
        highlight: true,
        icon: GraduationCap
    }
];

export default function Education() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-blue mb-4">Education</h2>
                    <div className="h-1 w-20 bg-vodafone-red mx-auto" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                            }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group ${edu.highlight ? 'border-l-4 border-l-vodafone-red' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg ${edu.highlight ? 'bg-vodafone-red/10 text-vodafone-red' : 'bg-slate-100 text-slate-500'}`}>
                                    <edu.icon className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                                    {edu.period}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-navy-blue mb-2 group-hover:text-vodafone-red transition-colors">
                                {edu.degree}
                            </h3>
                            <div className="text-slate-600 font-medium mb-4">
                                {edu.institution}
                            </div>

                            {edu.score && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 text-sm font-bold rounded-full border border-yellow-200">
                                    <span>🏆</span> {edu.score}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
