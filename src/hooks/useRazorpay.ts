'use client';

import { useState } from 'react';

declare global {
    interface Window {
        Razorpay: unknown;
    }
}

export const useRazorpay = () => {
    const [loading, setLoading] = useState(false);

    const initiatePayment = async (amount: number, productId: string, productTitle: string) => {
        setLoading(true);
        try {
            // 1. Create order on server
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, productId }),
            });
            const order = await res.json();

            // 2. Open Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Flute Notes Store",
                description: `Purchase for ${productTitle}`,
                order_id: order.id,
                handler: async function (response: {
                    razorpay_order_id: string;
                    razorpay_payment_id: string;
                    razorpay_signature: string;
                }) {
                    // 3. Verify payment on server
                    const verifyRes = await fetch('/api/verify', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        }),
                    });
                    const verifyData = await verifyRes.json();
                    if (verifyData.success) {
                        alert('Payment Successful! You can now download your notes.');
                        window.location.href = '/dashboard';
                    } else {
                        alert('Payment verification failed.');
                    }
                },
                prefill: {
                    name: "Sumanth",
                    email: "customer@example.com",
                },
                theme: {
                    color: "#ffd700",
                },
            };

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rzp = new (window.Razorpay as any)(options);
            rzp.open();
        } catch (error) {
            console.error('Payment initiation failed:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { initiatePayment, loading };
};
