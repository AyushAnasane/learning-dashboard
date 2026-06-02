'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const activityData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 4.0 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 0.8 },
];

export function ActivityTile() {
    const [animatedHeights, setAnimatedHeights] = useState<number[]>(new Array(7).fill(0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedHeights(activityData.map(d => (d.hours / 5) * 100));
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.article
            className="rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-white/10 p-5 md:col-span-2"
            whileHover={{
                scale: 1.01,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
        >
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Activity</h3>

            <div className="flex items-end justify-between gap-2 h-48">
                {activityData.map((item, idx) => (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                            className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg"
                            initial={{ height: 0 }}
                            animate={{ height: `${animatedHeights[idx]}%` }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25, delay: idx * 0.05 }}
                            style={{ maxHeight: '100%' }}
                        />
                        <span className="text-xs text-gray-400">{item.day}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="text-gray-400">Study Hours</span>
                </div>
                <span className="text-purple-400">+23% vs last week</span>
            </div>
        </motion.article>
    );
}