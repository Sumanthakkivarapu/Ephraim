'use client';

import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Auth logic will go here
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Join the Community</h2>
                <p className="text-brand-muted">Get access to premium flute sheet music today.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted group-focus-within:text-brand-gold transition-colors" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                        />
                    </div>

                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted group-focus-within:text-brand-gold transition-colors" />
                        <input
                            type="email"
                            placeholder="Email address"
                            required
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                        />
                    </div>

                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted group-focus-within:text-brand-gold transition-colors" />
                        <input
                            type="password"
                            placeholder="Create Password"
                            required
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                        />
                    </div>
                </div>

                <p className="text-xs text-brand-muted text-center px-4">
                    By signing up, you agree to our <a href="#" className="text-brand-gold underline">Terms of Service</a> and <a href="#" className="text-brand-gold underline">Privacy Policy</a>.
                </p>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold !py-4 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                    {loading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        <>
                            <span>Create Account</span>
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>

            <div className="pt-8 border-t border-white/5 text-center">
                <p className="text-brand-muted">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-brand-gold font-bold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
