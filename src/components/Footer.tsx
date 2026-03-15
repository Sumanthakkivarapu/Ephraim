import Link from 'next/link';
import { Music, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050c18] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="p-2 bg-brand-gold rounded-lg">
                                <Music className="w-5 h-5 text-brand-dark" />
                            </div>
                            <span className="text-xl font-serif font-bold text-white tracking-tight">
                                Flute<span className="text-brand-gold">Notes</span>
                            </span>
                        </Link>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            Helping flutists master their craft with premium sheet music and curated learning materials.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-brand-muted hover:text-brand-gold transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-brand-muted hover:text-brand-gold transition-all">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-brand-muted hover:text-brand-gold transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-6">Marketplace</h4>
                        <ul className="space-y-4">
                            <li><Link href="/shop" className="text-brand-muted hover:text-brand-gold transition-colors">Beginner Notes</Link></li>
                            <li><Link href="/shop" className="text-brand-muted hover:text-brand-gold transition-colors">Intermediate Notes</Link></li>
                            <li><Link href="/shop" className="text-brand-muted hover:text-brand-gold transition-colors">Advanced Pieces</Link></li>
                            <li><Link href="/shop" className="text-brand-muted hover:text-brand-gold transition-colors">Free Samples</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#learning" className="text-brand-muted hover:text-brand-gold transition-colors">Learning Guide</Link></li>
                            <li><Link href="/#faq" className="text-brand-muted hover:text-brand-gold transition-colors">FAQ</Link></li>
                            <li><Link href="/privacy" className="text-brand-muted hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-brand-muted hover:text-brand-gold transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-6">Get in Touch</h4>
                        <p className="text-brand-muted mb-6">Have questions? Reach out to us anytime.</p>
                        <a href="mailto:contact@flutenotes.store" className="flex items-center space-x-2 text-brand-gold hover:underline">
                            <Mail className="w-5 h-5" />
                            <span>contact@flutenotes.store</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-brand-muted text-sm">
                        © {new Date().getFullYear()} Flute Notes Store. All rights reserved.
                    </p>
                    <p className="text-brand-muted text-sm italic">
                        Made with love for musicians worldwide.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
