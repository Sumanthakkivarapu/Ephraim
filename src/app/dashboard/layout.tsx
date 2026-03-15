'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music, History as HistoryIcon, User, LogOut, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const sidebarLinks = [
        { name: 'My Notes', href: '/dashboard', icon: <Music className="w-5 h-5" /> },
        { name: 'Order History', href: '/dashboard/orders', icon: <HistoryIcon className="w-5 h-5" /> },
        { name: 'Account Settings', href: '/dashboard/settings', icon: <User className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-64 shrink-0">
                            <div className="glass-card !p-2 space-y-1">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${isActive
                                                ? 'bg-brand-gold text-brand-dark font-bold shadow-lg shadow-brand-gold/20'
                                                : 'text-brand-muted hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                {link.icon}
                                                <span>{link.name}</span>
                                            </div>
                                            <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                                        </Link>
                                    );
                                })}

                                <div className="h-px bg-white/5 my-2 mx-4" />

                                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/5 transition-all">
                                    <LogOut className="w-5 h-5" />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-grow">
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
