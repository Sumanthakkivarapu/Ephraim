'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Music, Star } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-light/50 border border-white/10 rounded-full text-brand-gold text-sm font-medium mb-6">
                            <Star className="w-4 h-4 fill-brand-gold" />
                            <span>Premium Flute Sheet Music Store</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Master the Art of <span className="text-brand-gold">Flute</span> With Every Note
                        </h1>

                        <p className="text-xl text-brand-muted mb-10 max-w-lg leading-relaxed">
                            Download professionally transcribed sheet music for classical, folk, and contemporary flute pieces. Perfect for all skill levels.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link href="/shop" className="btn-gold group flex items-center space-x-2 w-full sm:w-auto justify-center">
                                <span>Browse Notes</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/#learning" className="text-white hover:text-brand-gold transition-colors font-medium flex items-center space-x-2 w-full sm:w-auto justify-center">
                                <Music className="w-5 h-5" />
                                <span>Start Learning</span>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center space-x-8 pt-12 border-t border-white/5">
                            <div>
                                <p className="text-2xl font-bold text-white">500+</p>
                                <p className="text-brand-muted text-sm">Notes Sold</p>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div>
                                <p className="text-2xl font-bold text-white">4.9/5</p>
                                <p className="text-brand-muted text-sm">Rating</p>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div>
                                <p className="text-2xl font-bold text-white">24/7</p>
                                <p className="text-brand-muted text-sm">Support</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass-card p-4 aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent pointer-events-none" />
                            {/* Mock image container */}
                            <div className="w-full h-full bg-brand-dark/50 rounded-2xl flex flex-col items-center justify-center border border-white/5 relative">
                                <Music className="w-32 h-32 text-brand-gold opacity-20 absolute -top-10 -right-10 rotate-12" />
                                <div className="relative z-10 text-center p-8">
                                    <Music className="w-24 h-24 text-brand-gold mx-auto mb-6" />
                                    <h3 className="text-2xl font-serif text-white mb-2">Morning Raga</h3>
                                    <p className="text-brand-gold font-medium">Beginner Friendly</p>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 p-4 bg-brand-light/80 backdrop-blur-md rounded-xl border border-white/10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                                            </div>
                                            <span className="text-sm font-medium">Audio Sample Available</span>
                                        </div>
                                        <span className="text-brand-gold font-bold">₹249</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass-card p-4 border border-white/20"
                        >
                            <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 glass-card p-4 border border-white/20"
                        >
                            <Music className="w-6 h-6 text-brand-gold" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
