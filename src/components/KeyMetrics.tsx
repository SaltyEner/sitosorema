"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
    { label: "Process Automation", value: 60, suffix: "%", description: "Increase in operational efficiency" },
    { label: "Churn Reduction", value: 8, suffix: "%", description: "Achieved via predictive modeling" },
    { label: "Team Leadership", value: 15, suffix: "+", description: "Cross-functional members managed" },
    { label: "Projects Delivered", value: 40, suffix: "+", description: "Across international markets" }
];

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const totalFrames = Math.round(duration * 60);
        const easeOutQuad = (t: number) => t * (2 - t);

        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            setCount(Math.round(end * progress));

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, 1000 / 60);

        return () => clearInterval(counter);
    }, [value, duration]);

    return <span>{count}</span>;
}

export default function KeyMetrics() {
    return (
        <section className="py-16 bg-navy-blue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl lg:text-5xl font-bold mb-2 text-white group-hover:text-brand-teal transition-colors font-serif">
                                <Counter value={metric.value} />{metric.suffix}
                            </div>
                            <div className="text-lg font-semibold mb-1 text-slate-200">{metric.label}</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">{metric.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
