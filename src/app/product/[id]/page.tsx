'use client';

import { useState, use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Music, Star, ShoppingCart, CheckCircle2, Volume2, ShieldCheck, Download, Tag, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRazorpay } from '@/hooks/useRazorpay';

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = use(params);
    const [coupon, setCoupon] = useState('');
    const [isApplied, setIsApplied] = useState(false);
    const { initiatePayment, loading } = useRazorpay();

    // Mock product data
    const product = {
        id: resolvedParams.id,
        title: 'Morning Raga (Bhopali) - Complete Flute Masterclass',
        description: 'A comprehensive transcription of the beautiful Raag Bhopali, perfect for morning practice. This set includes the main bandish, alaap sequences, and fast tans specifically arranged for flute. You will also get a practice guide explaining the meend (glides) and nuances of the raga.',
        price: 249,
        difficulty: 'Beginner' as const,
        features: [
            'Authentic Raga Transcription',
            'Both Western & Indian Notations',
            'High-quality PDF Download',
            'MP3 Backing Track Included',
            'Blowing & Fingering Tips',
        ],
    };

    const handleApplyCoupon = () => {
        if (coupon.length > 0) {
            setIsApplied(true);
        }
    };

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Product Image & Preview */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-card !p-0 overflow-hidden relative"
                            >
                                <div className="aspect-square flex items-center justify-center bg-brand-light/30 border border-white/5">
                                    <Music className="w-40 h-40 text-brand-gold opacity-20" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                        <Music className="w-24 h-24 text-brand-gold mb-6" />
                                        <span className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                                            {product.difficulty} Level
                                        </span>
                                        <h2 className="text-3xl font-serif font-bold text-white max-w-md">{product.title}</h2>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Audio Preview Player */}
                            <div className="glass-card">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark">
                                        <Volume2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Audio Preview</h4>
                                        <p className="text-brand-muted text-sm">Listen before you buy</p>
                                    </div>
                                </div>

                                <div className="bg-brand-dark/50 rounded-2xl p-4 border border-white/5 flex items-center space-x-4">
                                    <button className="w-10 h-10 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center shrink-0">
                                        <Music className="w-5 h-5" />
                                    </button>
                                    <div className="flex-grow">
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-gold w-1/3" />
                                        </div>
                                    </div>
                                    <span className="text-xs text-brand-muted">0:15 / 0:45</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Details & Purchase */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-10"
                        >
                            <div>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                    {product.title}
                                </h1>

                                <div className="flex items-center space-x-6 mb-8">
                                    <div className="flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                                        ))}
                                        <span className="text-brand-muted ml-2 font-medium">(48 global ratings)</span>
                                    </div>
                                    <div className="h-4 w-px bg-white/10" />
                                    <div className="flex items-center space-x-2 text-brand-gold font-bold">
                                        <ShieldCheck className="w-5 h-5" />
                                        <span>Verified Notes</span>
                                    </div>
                                </div>

                                <p className="text-lg text-brand-muted leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-6 flex items-center space-x-2">
                                    <Music className="w-5 h-5 text-brand-gold" />
                                    <span>What&apos;s inside the pack?</span>
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 text-white/80">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold/60" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-white/5" />

                            {/* Purchase Box */}
                            <div className="glass-card border-brand-gold/20 bg-brand-gold/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <Tag className="w-8 h-8 text-brand-gold opacity-10 rotate-12" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <p className="text-brand-muted text-sm font-bold uppercase tracking-widest mb-1">Price</p>
                                        <div className="flex items-baseline space-x-2">
                                            <span className="text-4xl font-serif font-bold text-white">₹{product.price}</span>
                                            <span className="text-brand-muted line-through text-lg">₹499</span>
                                        </div>
                                    </div>
                                    <div className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-lg text-xs font-bold border border-brand-gold/20">
                                        50% OFF TODAY
                                    </div>
                                </div>

                                {/* Coupon */}
                                <div className="mb-8">
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Enter coupon code (FLUTE10)"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                                            className="flex-grow bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold/50"
                                        />
                                        <button
                                            onClick={handleApplyCoupon}
                                            className="px-6 bg-brand-light text-brand-gold font-bold rounded-xl border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-dark transition-all text-sm"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {isApplied && (
                                        <p className="text-green-400 text-xs font-bold mt-2 flex items-center space-x-1">
                                            <CheckCircle2 className="w-3 h-3" />
                                            <span>Coupon &quot;FLUTE10&quot; applied! You saved ₹25.</span>
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={() => initiatePayment(product.price, product.id, product.title)}
                                    disabled={loading}
                                    className="w-full btn-gold !py-4 flex items-center justify-center space-x-3 shadow-2xl shadow-brand-gold/20 disabled:opacity-50"
                                >
                                    {loading ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            <ShoppingCart className="w-6 h-6" />
                                            <span className="text-lg">Buy Now & Download PDF</span>
                                        </>
                                    )}
                                </button>

                                <div className="mt-6 flex items-center justify-center space-x-6 text-brand-muted text-xs font-medium">
                                    <div className="flex items-center space-x-1">
                                        <Download className="w-4 h-4" />
                                        <span>Instant Download</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>Secure Payment</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
