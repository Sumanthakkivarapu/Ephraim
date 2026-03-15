'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const ShopPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

    // Mock data for shop
    const allProducts = [
        { id: '1', title: 'Morning Raga (Bhopali)', price: 249, difficulty: 'Beginner' as const, preview_audio_url: '#' },
        { id: '2', title: 'Krishna Flute Theme', price: 399, difficulty: 'Intermediate' as const, preview_audio_url: '#' },
        { id: '3', title: 'Classical Monsoon Raag', price: 499, difficulty: 'Advanced' as const, preview_audio_url: '#' },
        { id: '4', title: 'Yaman Raag Basics', price: 299, difficulty: 'Beginner' as const, preview_audio_url: '#' },
        { id: '5', title: 'Bollywood Romantic Pack', price: 599, difficulty: 'Intermediate' as const, preview_audio_url: '#' },
        { id: '6', title: 'Technical Fingering Etudes', price: 449, difficulty: 'Advanced' as const, preview_audio_url: '#' },
    ];

    const filteredProducts = allProducts.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = selectedDifficulty === 'All' || product.difficulty === selectedDifficulty;
        return matchesSearch && matchesDifficulty;
    });

    const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            Marketplace
                        </h1>
                        <p className="text-brand-muted text-lg">
                            Find the perfect sheet music for your skill level.
                        </p>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                        <div className="relative flex-grow max-w-2xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
                            <input
                                type="text"
                                placeholder="Search for notes, ragas, or songs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-brand-light border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            />
                        </div>

                        <div className="flex items-center space-x-4 overflow-x-auto pb-2 lg:pb-0">
                            <div className="flex items-center space-x-2 text-brand-gold mr-4 shrink-0">
                                <Filter className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-wider text-xs">Difficulty:</span>
                            </div>
                            {difficulties.map((diff) => (
                                <button
                                    key={diff}
                                    onClick={() => setSelectedDifficulty(diff)}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${selectedDifficulty === diff
                                            ? 'bg-brand-gold text-brand-dark'
                                            : 'bg-brand-light text-brand-muted hover:text-white border border-white/5'
                                        }`}
                                >
                                    {diff}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                        <p className="text-brand-muted">
                            Showing <span className="text-white font-bold">{filteredProducts.length}</span> results
                        </p>
                        <button className="flex items-center space-x-2 text-brand-muted hover:text-brand-gold transition-colors text-sm">
                            <SlidersHorizontal className="w-4 h-4" />
                            <span>Sort by: Newest</span>
                        </button>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center text-brand-muted mx-auto mb-6">
                                <Search className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">No notes found</h3>
                            <p className="text-brand-muted">Try adjusting your filters or search terms.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedDifficulty('All'); }}
                                className="mt-6 text-brand-gold font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ShopPage;
