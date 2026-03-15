'use client';

import { useState } from 'react';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
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
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-brand-muted">Sign in to access your flute notes.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
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
                            placeholder="Password"
                            required
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 bg-brand-dark border-white/10 rounded text-brand-gold focus:ring-brand-gold"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-muted">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-brand-gold hover:text-brand-gold-hover">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold !py-4 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                    {loading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        <>
                            <span>Sign In</span>
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>

            <div className="pt-8 border-t border-white/5 text-center">
                <p className="text-brand-muted">
                    Don&apos;t have an account?{' '}
                    <Link href="/auth/signup" className="text-brand-gold font-bold hover:underline">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}
