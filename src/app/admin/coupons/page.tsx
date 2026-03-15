'use client';

import { Plus, Ticket, Calendar, Trash2 } from 'lucide-react';

export default function AdminCouponsPage() {
    const coupons = [
        { id: '1', code: 'FLUTE10', discount: '10%', type: 'Percentage', used: 124, limit: 500 },
        { id: '2', code: 'RAGA50', discount: '₹50', type: 'Fixed', used: 45, limit: 100 },
        { id: '3', code: 'MUSIC20', discount: '20%', type: 'Percentage', used: 89, limit: 200 },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">Manage Coupons</h1>
                    <p className="text-brand-muted">Create and manage discount codes for your customers.</p>
                </div>
                <button className="btn-gold flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Create Coupon</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coupons.map((coupon) => (
                    <div key={coupon.id} className="glass-card relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Ticket className="w-12 h-12 text-brand-gold rotate-12" />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="px-3 py-1 bg-brand-gold text-brand-dark rounded text-xs font-black tracking-widest">
                                {coupon.code}
                            </div>
                            <button className="p-2 text-brand-muted hover:text-red-400 hover:bg-red-400/5 rounded-lg transition-all">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-white">{coupon.discount} OFF</h4>
                            <p className="text-brand-muted text-sm">{coupon.type} Discount</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-brand-muted">Usage</span>
                                <span className="text-white font-bold">{coupon.used} / {coupon.limit}</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-gold"
                                    style={{ width: `${(coupon.used / coupon.limit) * 100}%` }}
                                />
                            </div>
                            <div className="flex items-center text-[10px] text-brand-muted font-bold uppercase tracking-widest pt-2">
                                <Calendar className="w-3 h-3 mr-1.5" />
                                Expires: Dec 31, 2026
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
