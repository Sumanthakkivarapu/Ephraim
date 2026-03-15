'use client';

import { Plus, Search, MoreVertical, Edit2, Trash2 } from 'lucide-react';


export default function AdminProductsPage() {

    const products = [
        { id: '1', title: 'Morning Raga (Bhopali)', price: '₹249', difficulty: 'Beginner', sales: 420 },
        { id: '2', title: 'Krishna Flute Theme', price: '₹399', difficulty: 'Intermediate', sales: 280 },
        { id: '3', title: 'Classical Monsoon Raag', price: '₹499', difficulty: 'Advanced', sales: 150 },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">Manage Products</h1>
                    <p className="text-brand-muted">Upload and manage your flute sheet music collection.</p>
                </div>
                <button className="btn-gold flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Add New Product</span>
                </button>
            </div>

            <div className="glass-card !p-0 overflow-hidden border-white/5">
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-brand-muted text-sm">Sort by:</span>
                        <select className="bg-transparent text-white text-sm font-bold focus:outline-none">
                            <option>Newest First</option>
                            <option>Price: Low to High</option>
                            <option>Best Selling</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/2">
                                <th className="px-6 py-4 text-brand-muted text-xs font-bold uppercase tracking-widest">Product</th>
                                <th className="px-6 py-4 text-brand-muted text-xs font-bold uppercase tracking-widest">Difficulty</th>
                                <th className="px-6 py-4 text-brand-muted text-xs font-bold uppercase tracking-widest">Price</th>
                                <th className="px-6 py-4 text-brand-muted text-xs font-bold uppercase tracking-widest">Sales</th>
                                <th className="px-6 py-4 text-brand-muted text-xs font-bold uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {products.map((p) => (
                                <tr key={p.id} className="hover:bg-white/2 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold border border-brand-gold/10">
                                                <Plus className="w-5 h-5" />
                                            </div>
                                            <span className="text-white font-medium">{p.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2 py-1 bg-white/5 rounded-lg text-xs font-bold text-brand-muted">{p.difficulty}</span>
                                    </td>
                                    <td className="px-6 py-5 text-white font-bold">{p.price}</td>
                                    <td className="px-6 py-5 text-brand-muted">{p.sales}</td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-brand-muted hover:text-brand-gold hover:bg-white/5 rounded-lg transition-all">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-brand-muted hover:text-red-400 hover:bg-red-400/5 rounded-lg transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-brand-muted hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
