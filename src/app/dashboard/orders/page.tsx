'use client';

import { Calendar, CreditCard, ChevronRight, Check } from 'lucide-react';

export default function OrderHistoryPage() {
    const orders = [
        {
            id: 'ORD-12345',
            date: 'March 1, 2026',
            amount: '₹249',
            status: 'Success',
            items: ['Morning Raga (Bhopali)'],
        },
        {
            id: 'ORD-09876',
            date: 'February 15, 2026',
            amount: '₹399',
            status: 'Success',
            items: ['Krishna Flute Theme'],
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-white mb-2">Order History</h1>
                <p className="text-brand-muted">View and manage your past transactions.</p>
            </div>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="glass-card !bg-brand-light/30 border-white/5 hover:bg-brand-light/50 transition-all flex items-center justify-between p-6 cursor-pointer group">
                        <div className="flex items-center space-x-6">
                            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold border border-brand-gold/20 shrink-0">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex items-center space-x-3 mb-1">
                                    <span className="text-white font-bold">{order.id}</span>
                                    <span className="flex items-center text-[10px] text-green-400 font-bold bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full uppercase tracking-widest">
                                        <Check className="w-2 h-2 mr-1 stroke-[4]" />
                                        {order.status}
                                    </span>
                                </div>
                                <div className="flex items-center text-brand-muted text-sm space-x-4">
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1.5 opacity-60" />
                                        {order.date}
                                    </span>
                                    <span className="w-1 h-1 bg-white/10 rounded-full" />
                                    <span className="text-white font-medium">{order.items[0]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-8">
                            <div className="text-right">
                                <p className="text-lg font-bold text-white mb-0">{order.amount}</p>
                                <p className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">Paid via UPI</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-brand-muted group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
