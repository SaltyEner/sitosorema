"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Certifications", href: "#certifications" },
        { name: "Tech Stack", href: "#tech" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#"
                            onClick={(e) => scrollToSection(e, '#hero')}
                            className="text-2xl font-serif font-bold text-navy-blue tracking-tight hover:text-vodafone-red transition-colors"
                        >
                            saraprosperi<span className="text-vodafone-red">.it</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-sm font-medium text-slate-600 hover:text-vodafone-red transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="/cv.pdf"
                                className="flex items-center gap-2 px-5 py-2.5 bg-navy-blue text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-navy-blue/20"
                            >
                                <FileText className="w-4 h-4" />
                                CV
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-navy-blue"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-30 bg-white pt-24 px-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-2xl font-serif font-bold text-navy-blue border-b border-slate-100 pb-4"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/cv.pdf"
                                className="flex items-center justify-center gap-2 px-5 py-4 bg-vodafone-red text-white rounded-xl text-lg font-semibold mt-4"
                            >
                                <FileText className="w-5 h-5" />
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
