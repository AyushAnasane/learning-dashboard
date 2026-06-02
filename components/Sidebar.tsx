'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    BookOpen,
    BarChart3,
    Settings,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { useSidebar } from './providers/SidebarProvider';
import { cn } from '@/lib/utils';

const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
    const { isCollapsed, toggleCollapse, isMobile } = useSidebar();
    const [activeItem, setActiveItem] = useState('dashboard');

    if (isMobile) return null;

    return (
        <motion.nav
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
                'fixed left-0 top-0 h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 z-30 transition-all duration-300',
                isCollapsed ? 'w-20' : 'w-64'
            )}
        >
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    {!isCollapsed && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        >
                            LearnHub
                        </motion.span>
                    )}
                    <button
                        onClick={toggleCollapse}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors ml-auto"
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                <div className="flex-1 py-6 relative">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={cn(
                                    'relative flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:text-white transition-colors group',
                                    isCollapsed ? 'justify-center' : 'justify-start'
                                )}
                            >
                                <Icon size={22} />
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="text-sm font-medium"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavHighlight"
                                        className="absolute left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-r"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                        {item.label}
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </motion.nav>
    );
}