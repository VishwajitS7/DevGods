'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [lookingFor, setLookingFor] = useState('bride');
  const [ageMin, setAgeMin] = useState('25');
  const [ageMax, setAgeMax] = useState('35');
  const [religion, setReligion] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = () => {
    console.log({ lookingFor, ageMin, ageMax, religion, city });
  };

  return (
    <main className="min-h-screen">
        {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Title and Subtitle */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Find Your Perfect <br /> Life Partner
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join millions of happy couples who found their soulmate on SoulBind. Premium matrimonial platform for meaningful connections.
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 border border-white/40">
              {/* Search Filters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-6">
                {/* Looking For Dropdown */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Looking for</label>
                  <select
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors"
                  >
                    <option value="bride">Bride</option>
                    <option value="groom">Groom</option>
                  </select>
                </div>

                {/* Age Range From */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Age from</label>
                  <select
                    value={ageMin}
                    onChange={(e) => setAgeMin(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors"
                  >
                    {[...Array(40)].map((_, i) => (
                      <option key={i} value={String(18 + i)}>
                        {18 + i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Age Range To */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Age to</label>
                  <select
                    value={ageMax}
                    onChange={(e) => setAgeMax(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors"
                  >
                    {[...Array(40)].map((_, i) => (
                      <option key={i} value={String(18 + i)}>
                        {18 + i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Religion Dropdown */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Religion</label>
                  <select
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors"
                  >
                    <option value="">All</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* City Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSearch}
                  className="px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/50"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Link href="/register">
              <button className="w-full sm:w-auto px-10 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/50 text-lg">
                Register Free
              </button>
            </Link>
            <Link href="/profiles">
              <button className="w-full sm:w-auto px-10 py-3 sm:py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300 text-lg">
                Browse Profiles
              </button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-rose-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-rose-100/50 text-center">
            <div className="flex justify-center mb-4 -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-rose-400 to-emerald-400 border-2 border-white flex items-center justify-center font-bold text-white text-sm"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-lg sm:text-2xl font-bold text-gray-900 heading-serif">
              5M+ Success Stories
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Join our community and find your soulmate today
            </p>
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <button className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold shadow-xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center text-xl sm:text-2xl">
        💬
      </button>
    </main>
  );
}