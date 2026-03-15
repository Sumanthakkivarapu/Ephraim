'use client';

import { TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    { name: 'Mon', sales: 4000, revenue: 2400 },
    { name: 'Tue', sales: 3000, revenue: 1398 },
    { name: 'Wed', sales: 2000, revenue: 9800 },
    { name: 'Thu', sales: 2780, revenue: 3908 },
    { name: 'Fri', sales: 1890, revenue: 4800 },
    { name: 'Sat', sales: 2390, revenue: 3800 },
    { name: 'Sun', sales: 3490, revenue: 4300 },
];

const stats = [
    { label: 'Total Revenue', value: '₹124,500', icon: <DollarSign className="w-6 h-6" />, change: '+12.5%', isUp: true },
    { label: 'Total Orders', value: '3,200', icon: <ShoppingBag className="w-6 h-6" />, change: '+8.2%', isUp: true },
    { label: 'Total Users', value: '1,420', icon: <Users className="w-6 h-6" />, change: '+2.4%', isUp: true },
    { label: 'Best Selling', value: 'Morning Raga', icon: <TrendingUp className="w-6 h-6" />, change: '24% of sales', isUp: true },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-white mb-2">Sales Overview</h1>
                <p className="text-brand-muted">Monitor your store&apos;s performance and analytics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="glass-card !bg-brand-light/30 border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-brand-gold/10 rounded-2xl text-brand-gold border border-brand-gold/20">
                                {stat.icon}
                            </div>
                            <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                                {stat.isUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                {stat.change}
                            </div>
                        </div>
                        <p className="text-brand-muted text-sm font-medium mb-1">{stat.label}</p>
                        <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Chart */}
                <div className="glass-card !p-8">
                    <h3 className="text-xl font-serif font-bold text-white mb-8">Weekly Revenue</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ffd700" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#ffd700" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#8892b0', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#8892b0', fontSize: 12 }} hide />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#112240', border: '1px solid #ffffff10', borderRadius: '12px' }}
                                    itemStyle={{ color: '#ffd700' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#ffd700" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sales Chart */}
                <div className="glass-card !p-8">
                    <h3 className="text-xl font-serif font-bold text-white mb-8">Daily Sales Units</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#8892b0', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#8892b0', fontSize: 12 }} hide />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#112240', border: '1px solid #ffffff10', borderRadius: '12px' }}
                                    itemStyle={{ color: '#ffd700' }}
                                    cursor={{ fill: '#ffffff05' }}
                                />
                                <Bar dataKey="sales" fill="#ffd700" radius={[6, 6, 0, 0]} barSize={24} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
