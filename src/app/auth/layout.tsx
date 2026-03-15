'use client';

import { Music } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-brand-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link href="/" className="inline-flex items-center space-x-2 mb-8">
                    <div className="p-2 bg-brand-gold rounded-xl">
                        <Music className="w-8 h-8 text-brand-dark" />
                    </div>
                    <span className="text-3xl font-serif font-bold text-white tracking-tight">
                        Flute<span className="text-brand-gold">Notes</span>
                    </span>
                </Link>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="glass-card !bg-brand-light/40 border-white/5 shadow-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
