"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, TrendingUp } from "lucide-react";

const caseStudies = [
    {
        title: "Vodafone Campaign Automation",
        role: "Product Owner",
        problem: "Manual campaign execution was slow (4+ weeks) and error-prone, limiting market responsiveness.",
        solution: "Implemented an automated Campaign Management System with Pega & Adobe Marketo integration.",
        impact: "60% Process Automation",
        result: "Reduced time-to-market by 70%, identifying new revenue streams via real-time analytics.",
        icon: Zap,
        color: "text-vodafone-red",
        bg: "bg-vodafone-red/10"
    },
    {
        title: "Ariston Group CRM",
        role: "Digital Solutions Specialist",
        problem: "Fragmented customer data across 5+ legacy systems led to poor support and high churn.",
        solution: "Unified data into Microsoft Dynamics 365, creating a single source of truth for 20+ markets.",
        impact: "8% Churn Reduction",
        result: "Improved customer retention and streamlined support ticket resolution by 25%.",
        icon: TrendingUp,
        color: "text-blue-600",
        bg: "bg-blue-50"
    }
];

export default function CaseStudies() {
    return (
        <section className="py-24 bg-corporate-white" id="case-studies">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-blue mb-4">Impact Stories</h2>
                    <div className="h-1 w-20 bg-vodafone-red mx-auto mb-6" />
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A closer look at strategic initiatives where technology met business goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-vodafone-red/20 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl ${study.bg} ${study.color} group-hover:scale-110 transition-transform`}>
                                    <study.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy-blue">{study.title}</h3>
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{study.role}</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-4 h-4 text-vodafone-red" />
                                        <h4 className="font-bold text-slate-800">The Challenge</h4>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{study.problem}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-4 h-4 text-amber-500" />
                                        <h4 className="font-bold text-slate-800">The Solution</h4>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                                </div>

                                <div className="pt-6 border-t border-slate-100">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <div className="text-xs text-slate-400 uppercase font-semibold">Key Impact</div>
                                            <div className="text-2xl font-bold text-navy-blue">{study.impact}</div>
                                        </div>
                                        <div className="text-sm text-slate-500 italic max-w-xs">
                                            "{study.result}"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
