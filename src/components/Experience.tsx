"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "Vodafone",
        location: "Malaga, Spagna",
        role: "IT Delivery Manager",
        period: "Dic 2025 - Presente",
        description: "Leading delivery of critical IT initiatives."
    },
    {
        company: "Vodafone",
        location: "Malaga, Spagna",
        role: "IT Product Owner - Campaign Management",
        period: "Ott 2023 - Nov 2025",
        description: "Automated 60% of campaign processes, managed global stakeholder relationships, and drove Operational Excellence initiatives.",
        highlight: true
    },
    {
        company: "Ariston Group",
        location: "Italia",
        role: "ICT Senior Digital Solutions Specialist",
        period: "Apr 2021 - Ott 2023",
        description: "Reduced Churn Rate by 8% through strategic CRM implementation (Microsoft Dynamics). Managed international rollouts.",
        prevRoles: ["Specialist", "CRM Specialist"]
    },
    {
        company: "INNSAI",
        location: "Valencia, Spagna",
        role: "Future Trends Analyst",
        period: "2019",
        description: "Analyzed market trends and future scenarios to guide business strategy."
    }
];

export default function Experience() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-1 w-12 bg-brand-teal" />
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-blue">Experience</h2>
                    </div>
                    <p className="text-slate-500 ml-16">A proven track record of delivery and leadership.</p>
                </motion.div>

                <div className="relative border-l-2 border-slate-200 ml-4 lg:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="relative pl-8 lg:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${index === 0 ? 'bg-brand-teal border-brand-teal' : 'bg-white border-slate-400'}`} />

                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-navy-blue">{exp.role}</h3>
                                    <div className="text-lg font-semibold text-slate-700">{exp.company}</div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-500 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed max-w-3xl">
                                {exp.description}
                            </p>

                            {exp.prevRoles && (
                                <div className="mt-2 text-sm text-slate-400 italic">
                                    Previously: {exp.prevRoles.join(", ")}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
