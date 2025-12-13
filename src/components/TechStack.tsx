"use client";

import { motion } from "framer-motion";
import { Server, Brain, Layout, Languages } from "lucide-react";

const stacks = [
    {
        category: "Platforms",
        icon: Server,
        items: ["Microsoft Dynamics 365", "Salesforce", "Adobe Marketo", "HCL Unica"]
    },
    {
        category: "Data & AI",
        icon: Brain,
        items: ["Power BI", "Google Analytics", "Looker Studio", "ChatGPT", "CoPilot"]
    },
    {
        category: "Methodologies",
        icon: Layout,
        items: ["Agile", "Scrum", "SAFe®", "Kanban", "Design Thinking"]
    },
    {
        category: "Languages",
        icon: Languages,
        items: ["Italiano (C2)", "Inglese (C1/C2)", "Spagnolo (C1/C2)"]
    }
];

export default function TechStack() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Tech & Tools Stack</h2>
                    <div className="h-1 w-20 bg-vodafone-red mx-auto" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                    {stacks.map((stack, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                            }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-vodafone-red/50 hover:bg-slate-800 transition-colors backdrop-blur-sm shadow-lg hover:shadow-vodafone-red/10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-vodafone-red rounded-lg">
                                    <stack.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">{stack.category}</h3>
                            </div>

                            <ul className="space-y-3">
                                {stack.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-vodafone-red" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
