import { Suspense } from 'react';
import { fetchCourses } from '@/actions/courses';
import { HeroTile } from '@/components/HeroTile';
import { CoursesGrid } from '@/components/CoursesGrid';
import { ActivityTile } from '@/components/ActivityTile';
import { DashboardSkeleton } from '@/components/DashboardSkeleton';

async function CoursesSection() {
  const courses = await fetchCourses();
  return <CoursesGrid courses={courses} />;
}

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="p-4 md:p-6 lg:p-8 pb-24 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-min">
            <div className="md:col-span-2">
              <HeroTile userName="Alex" streakDays={12} />
            </div>

            <div className="md:col-span-2">
              <ActivityTile />
            </div>

            <div className="lg:col-span-4">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white mb-2">Continue Learning</h2>
                <p className="text-gray-400 text-sm">Pick up where you left off</p>
              </div>
              <Suspense fallback={<DashboardSkeleton />}>
                <CoursesSection />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}