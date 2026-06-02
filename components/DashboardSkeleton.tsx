'use client';

import { motion } from 'framer-motion';

export function DashboardSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-white/10 p-5 h-48"
                >
                    <div className="animate-pulse">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-800" />
                            <div className="w-16 h-6 rounded-full bg-gray-800" />
                        </div>
                        <div className="h-6 bg-gray-800 rounded-lg w-3/4 mb-4" />
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-800 rounded-full" />
                            <div className="flex justify-between">
                                <div className="h-3 bg-gray-800 rounded w-16" />
                                <div className="h-3 bg-gray-800 rounded w-8" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}