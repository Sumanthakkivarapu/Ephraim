'use client';

import { CheckCircle2, Music, BookOpen, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const LearningSection = () => {
    const features = [
        {
            icon: <Music className="w-6 h-6" />,
            title: 'Precise Transcription',
            description: 'Every note is verified for accuracy with traditional and western notations.',
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: 'Practice Guide',
            description: 'Each piece comes with technical tips and practice suggestions.',
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: 'Video Lessons',
            description: 'Access exclusive video tutorials for our most popular notes.',
        },
    ];

    return (
        <section id="learning" className="py-24 bg-[#050c18] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-8 border-white/5 hover:border-brand-gold/20 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                    <p className="text-brand-muted text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            Why Learn With <span className="text-brand-gold">Our Notes?</span>
                        </h2>
                        <p className="text-lg text-brand-muted leading-relaxed mb-10">
                            We don&apos;t just sell sheet music; we provide a complete learning ecosystem for flutists of all levels. Our materials are designed to bridge the gap between passion and performance.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Standardized Notation format',
                                'Historical context for ragas',
                                'Technical fingering charts',
                                'Lifetime access to downloads'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-3 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <button className="btn-gold !bg-white/5 !text-brand-gold border border-brand-gold/30 hover:!bg-brand-gold hover:!text-brand-dark">
                                Learn More About Our Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningSection;
