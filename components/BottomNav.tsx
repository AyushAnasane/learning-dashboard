'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart3, Settings } from 'lucide-react';
import { useSidebar } from './providers/SidebarProvider';
import { cn } from '@/lib/utils';

const navItems = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'analytics', label: 'Stats', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
];

export function BottomNav() {
    const { isMobile } = useSidebar();
    const [activeItem, setActiveItem] = useState('dashboard');

    if (!isMobile) return null;

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-40"
        >
            <div className="flex justify-around items-center py-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className="relative flex flex-col items-center gap-1 py-2 px-4"
                        >
                            <Icon
                                size={22}
                                className={cn(
                                    'transition-colors',
                                    isActive ? 'text-purple-400' : 'text-gray-400'
                                )}
                            />
                            <span
                                className={cn(
                                    'text-xs transition-colors',
                                    isActive ? 'text-purple-400' : 'text-gray-400'
                                )}
                            >
                                {item.label}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="mobileActiveIndicator"
                                    className="absolute -top-2 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
}