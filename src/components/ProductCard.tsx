'use client';

import { Play, Pause, Download, ShoppingCart, Star, Music } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
    id: string;
    title: string;
    price: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    preview_audio_url?: string;
    thumbnail_url?: string;
    is_free?: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const difficultyColor = {
        Beginner: 'text-green-400 bg-green-400/10 border-green-400/20',
        Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
        Advanced: 'text-red-400 bg-red-400/10 border-red-400/20',
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-card group overflow-hidden flex flex-col h-full"
        >
            {/* Thumbnail Area */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-brand-dark/40 border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-500">
                    <Music className="w-20 h-20 text-brand-gold" />
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${difficultyColor[product.difficulty]}`}>
                        {product.difficulty}
                    </span>
                </div>

                {/* Floating Play Button */}
                {product.preview_audio_url && (
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute inset-0 m-auto w-14 h-14 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        {isPlaying ? <Pause className="w-6 h-6 fill-brand-dark" /> : <Play className="w-6 h-6 fill-brand-dark ml-1" />}
                    </button>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-dark to-transparent">
                    <span className="text-xl font-bold font-serif text-white">
                        ₹{product.price}
                    </span>
                </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-serif font-bold text-white mb-2 line-clamp-1 group-hover:text-brand-gold transition-colors">
                {product.title}
            </h3>

            <div className="flex items-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-brand-gold fill-brand-gold opacity-80" />
                ))}
                <span className="text-xs text-brand-muted ml-2">(24 reviews)</span>
            </div>

            <div className="mt-auto flex items-center space-x-3">
                <button className="flex-1 btn-gold !py-2.5 !text-sm flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy Now</span>
                </button>
                {product.is_free && (
                    <button className="p-2.5 bg-brand-light text-brand-gold rounded-xl hover:bg-brand-light/70 transition-colors border border-brand-gold/20">
                        <Download className="w-5 h-5" />
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default ProductCard;
