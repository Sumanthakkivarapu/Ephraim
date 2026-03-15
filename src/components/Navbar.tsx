'use client';

import Link from 'next/link';
import { ShoppingBag, User, Menu, X, Music } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop Notes', href: '/shop' },
        { name: 'Learning', href: '/#learning' },
        { name: 'Testimonials', href: '/#testimonials' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-brand-gold rounded-lg group-hover:rotate-12 transition-transform duration-300">
                            <Music className="w-6 h-6 text-brand-dark" />
                        </div>
                        <span className="text-2xl font-serif font-bold text-white tracking-tight">
                            Flute<span className="text-brand-gold">Notes</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-brand-muted hover:text-brand-gold transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
                            <Link href="/dashboard" className="p-2 text-brand-muted hover:text-brand-gold transition-colors">
                                <User className="w-6 h-6" />
                            </Link>
                            <Link href="/shop" className="btn-gold !px-5 !py-2.5 flex items-center space-x-2">
                                <ShoppingBag className="w-5 h-5" />
                                <span>Browse</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-light border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-brand-muted hover:text-brand-gold hover:bg-white/5 rounded-xl transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-4">
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-2 px-3 py-4 text-brand-muted"
                                >
                                    <User className="w-6 h-6" />
                                    <span>My Account</span>
                                </Link>
                                <Link
                                    href="/shop"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-gold text-center"
                                >
                                    Browse Notes
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
