'use client';

import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FeaturedNotes = () => {
    // Mock data for featured notes
    const featuredProducts = [
        {
            id: '1',
            title: 'Morning Raga (Bhopali)',
            price: 249,
            difficulty: 'Beginner' as const,
            preview_audio_url: '#',
            thumbnail_url: '',
        },
        {
            id: '2',
            title: 'Krishna Flute Theme',
            price: 399,
            difficulty: 'Intermediate' as const,
            preview_audio_url: '#',
            thumbnail_url: '',
        },
        {
            id: '3',
            title: 'Classical Monsoon Raag',
            price: 499,
            difficulty: 'Advanced' as const,
            preview_audio_url: '#',
            thumbnail_url: '',
        },
    ];

    return (
        <section className="py-24 bg-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Handpicked <span className="text-brand-gold">Masterpieces</span>
                        </h2>
                        <p className="text-lg text-brand-muted leading-relaxed">
                            Explore our most popular flute notes, meticulously transcribed for authenticity and ease of learning.
                        </p>
                    </div>
                    <Link href="/shop" className="group flex items-center space-x-2 text-brand-gold font-bold mt-8 md:mt-0">
                        <span>View All Notes</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedNotes;
