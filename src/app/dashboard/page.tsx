'use client';

import { Download, Music, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
    // Mock data for purchased notes
    const purchasedNotes = [
        {
            id: '1',
            title: 'Morning Raga (Bhopali)',
            purchaseDate: '2026-03-01',
            difficulty: 'Beginner',
            thumbnail: '',
        },
        {
            id: '2',
            title: 'Krishna Flute Theme',
            purchaseDate: '2026-02-15',
            difficulty: 'Intermediate',
            thumbnail: '',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-white mb-2">My Purchased Notes</h1>
                <p className="text-brand-muted">You have lifetime access to all your purchases.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {purchasedNotes.map((note, idx) => (
                    <motion.div
                        key={note.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card group border-white/5 hover:border-brand-gold/20 transition-all"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="w-20 h-20 bg-brand-dark/50 rounded-xl flex items-center justify-center border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                                <Music className="w-8 h-8 text-brand-gold/40" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">{note.difficulty}</span>
                                    <div className="flex items-center text-brand-muted text-[10px]">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {note.purchaseDate}
                                    </div>
                                </div>
                                <h3 className="text-white font-bold group-hover:text-brand-gold transition-colors mb-4 line-clamp-1">
                                    {note.title}
                                </h3>

                                <div className="flex items-center space-x-3">
                                    <button className="flex-1 btn-gold !py-2 !text-xs flex items-center justify-center space-x-2">
                                        <Download className="w-4 h-4" />
                                        <span>Download PDF</span>
                                    </button>
                                    <button className="p-2 bg-brand-light text-brand-muted hover:text-white rounded-lg border border-white/10 transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {purchasedNotes.length === 0 && (
                <div className="py-20 text-center glass-card border-dashed border-white/10">
                    <Music className="w-16 h-16 text-brand-muted/20 mx-auto mb-6" />
                    <h3 className="text-xl font-serif font-bold text-white mb-2">No notes purchased yet</h3>
                    <p className="text-brand-muted mb-8">Start your musical journey by exploring the marketplace.</p>
                    <a href="/shop" className="btn-gold">Browse Marketplace</a>
                </div>
            )}
        </div>
    );
}
