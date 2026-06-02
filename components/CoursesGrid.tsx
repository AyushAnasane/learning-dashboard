'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types';
import { CourseCard } from './CourseCard';

interface CoursesGridProps {
    courses: Course[];
}

export function CoursesGrid({ courses }: CoursesGridProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
            {courses.map((course, idx) => (
                <CourseCard key={course.id} course={course} index={idx} />
            ))}
        </motion.div>
    );
}