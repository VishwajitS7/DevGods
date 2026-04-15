"use client";

import { useEffect, useMemo, useState } from "react";
import ProfileCard from "../components/ProfileCard";

interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  profession: string;
  gender: "Male" | "Female" | "Other";
  image: string;
  matchScore: number;
  isPhotoBlurred: boolean;
}

export default function ProfilesPage() {
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 60]);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    async function loadProfiles() {
      const params = new URLSearchParams({
        gender: selectedGender,
        city: selectedCity,
        ageMin: String(ageRange[0]),
        ageMax: String(ageRange[1]),
      });
      const res = await fetch(`/api/users?${params.toString()}`);
      const data = (await res.json()) as { profiles: Profile[] };
      setProfiles(data.profiles ?? []);
    }
    void loadProfiles();
  }, [selectedGender, selectedCity, ageRange]);

  const cities = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.city))).sort(),
    [profiles]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-3 heading-serif">
          Find Your Perfect Match
        </h1>
        <p className="text-center text-slate-600 text-lg">
          Discover compatible profiles and start your journey
        </p>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gender Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Gender
              </label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white text-slate-900 transition-all"
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white text-slate-900 transition-all"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Range Filter - Min */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Min Age: {ageRange[0]}
              </label>
              <input
                type="range"
                min="18"
                max="60"
                value={ageRange[0]}
                onChange={(e) => {
                  const newMin = parseInt(e.target.value);
                  if (newMin <= ageRange[1]) {
                    setAgeRange([newMin, ageRange[1]]);
                  }
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="text-xs text-slate-500 mt-2">18 - 60 years</div>
            </div>

            {/* Age Range Filter - Max */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Max Age: {ageRange[1]}
              </label>
              <input
                type="range"
                min="18"
                max="60"
                value={ageRange[1]}
                onChange={(e) => {
                  const newMax = parseInt(e.target.value);
                  if (newMax >= ageRange[0]) {
                    setAgeRange([ageRange[0], newMax]);
                  }
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                {profiles.length}
              </span>{" "}
              profiles found
            </p>
          </div>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="max-w-7xl mx-auto">
        {profiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-slate-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No profiles found
            </h3>
            <p className="text-slate-600">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
