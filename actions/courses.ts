'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';

export interface Course {
    id: string;
    title: string;
    progress: number;
    icon_name: string;
    created_at: string;
}

export async function fetchCourses(): Promise<Course[]> {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching courses:', error);
        throw new Error('Failed to fetch courses');
    }

    return data as Course[];
}