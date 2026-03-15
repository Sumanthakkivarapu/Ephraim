'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Aditi Sharma',
            role: 'Classical Student',
            text: 'The transcriptions are incredibly accurate. The Morning Raga notes helped me master the complex meends easily.',
            avatar: 'AS',
        },
        {
            name: 'Rahul Verma',
            role: 'Intermediate Player',
            text: "I love the audio previews! Being able to hear how it's supposed to sound before buying is a game-changer.",
            avatar: 'RV',
        },
        {
            name: 'Sanaya Mehta',
            role: 'Professional Flutist',
            text: 'High-quality PDFs that are easy to read on tablets. Finally, a reliable source for authentic flute notes.',
            avatar: 'SM',
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif font-bold text-white mb-6">
                        Words From Our <span className="text-brand-gold">Community</span>
                    </h2>
                    <p className="text-brand-muted">
                        Join thousands of flutists who have elevated their playing with our professional sheet music.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card flex flex-col items-center text-center relative"
                        >
                            <Quote className="absolute top-6 left-6 w-10 h-10 text-brand-gold opacity-10" />
                            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-bold text-xl mb-6 shadow-lg shadow-brand-gold/20">
                                {t.avatar}
                            </div>
                            <div className="flex space-x-1 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                ))}
                            </div>
                            <p className="text-brand-muted italic mb-8 leading-relaxed">
                                &quot;{t.text}&quot;
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-white font-bold">{t.name}</h4>
                                <p className="text-brand-gold/70 text-sm font-medium">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
