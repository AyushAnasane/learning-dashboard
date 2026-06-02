'use client';

import { motion } from 'framer-motion';
import { Flame, Calendar, Award } from 'lucide-react';

interface HeroTileProps {
    userName?: string;
    streakDays?: number;
}

export function HeroTile({ userName = "Jordan", streakDays = 12 }: HeroTileProps) {
    return (
        <motion.article
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 p-6 md:col-span-2"
            whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Welcome back, {userName}
                        </h1>
                        <p className="text-gray-400 mt-2">Ready to continue your learning journey?</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
                            <Flame className="text-orange-500" size={20} />
                            <span className="text-white font-semibold">{streakDays} day streak</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                            <Calendar size={20} className="text-gray-400" />
                            <span className="text-gray-300">Daily goal: 30 mins</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex gap-4">
                    <div className="flex items-center gap-2">
                        <Award size={18} className="text-yellow-500" />
                        <span className="text-sm text-gray-300">Top 15% this month</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}