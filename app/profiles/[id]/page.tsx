'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { users } from '@/lib/mockData';
import type { MatchUser as Profile } from '@/lib/types/user';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProfileDetailPage({ params }: Props) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      const profileId = resolvedParams.id;
      setId(profileId);

      const foundProfile = users.find(u => u.id === profileId);
      
      if (foundProfile) {
        setProfile(foundProfile);
      }
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Skeleton Loader */}
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-32 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="h-96 bg-slate-200 rounded-2xl"></div>
              </div>
              <div className="md:col-span-2 space-y-5">
                <div className="h-10 bg-slate-200 rounded w-2/3"></div>
                <div className="h-6 bg-slate-200 rounded w-1/3"></div>
                <div className="space-y-3 mt-8 pt-8">
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Profile Not Found</h1>
        <p className="text-slate-600 mb-8">The profile you are looking for does not exist or has been removed.</p>
        <Link href="/profiles" className="px-6 py-3 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition">
          Back to Matches
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/profiles"
          className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold mb-8 transition-colors duration-200 group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Profiles
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg-enhanced overflow-hidden border border-slate-200 hover:shadow-xl-enhanced transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Image Section */}
            <div className="md:col-span-1">
              <div className="relative w-full h-96 bg-slate-200 overflow-hidden">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="md:col-span-2 p-8 sm:p-10 border-l border-slate-200">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-200">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                      {profile.name}
                    </h1>
                    <p className="text-lg text-slate-600 mt-2">
                      {profile.age} years old
                    </p>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-3.5 py-1.5 rounded-full text-sm font-semibold shadow-md">
                    {profile.gender}
                  </span>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 pb-8 border-b border-slate-200">
                {/* City */}
                <div>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">
                    📍 City
                  </p>
                  <p className="text-lg text-slate-900 font-medium">{profile.city}</p>
                </div>

                {/* Profession */}
                <div>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">
                    💼 Profession
                  </p>
                  <p className="text-lg text-slate-900 font-medium">{profile.profession}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:shadow-lg active:scale-95 shadow-md btn-smooth">
                  Send Interest
                </button>
                <button className="flex-1 py-3 px-6 border-2 border-slate-300 text-slate-900 rounded-full font-semibold hover:border-rose-500 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md btn-smooth">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
