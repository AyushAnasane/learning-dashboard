'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
    course: Course;
    index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
    const [progressWidth, setProgressWidth] = useState(0);
    const IconComponent = (Icons as any)[course.icon_name] || Icons.BookOpen;

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressWidth(course.progress);
        }, 100 + index * 50);
        return () => clearTimeout(timer);
    }, [course.progress, index]);

    return (
        <motion.article
            className="relative overflow-hidden rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-white/10 p-5 group cursor-pointer"
            whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl" />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                        <IconComponent size={28} className="text-purple-400" />
                    </div>
                    <span className="text-xs text-gray-500 bg-black/40 px-2 py-1 rounded-full">
                        {course.progress}% Complete
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{course.title}</h3>

                <div className="space-y-2">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progressWidth}%` }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}