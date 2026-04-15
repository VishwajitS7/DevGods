'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FindMatchPage() {
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
      {/* Hero Section WITH SMOOTH CSS PARALLAX */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Match</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Use our advanced search filters to discover your ideal partner
            </p>
          </div>

          {/* Advanced Search Filters */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Looking For */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">Looking for</label>
                <select
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors font-medium"
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
                  className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors font-medium"
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
                  className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors font-medium"
                >
                  {[...Array(40)].map((_, i) => (
                    <option key={i} value={String(18 + i)}>
                      {18 + i}
                    </option>
                  ))}
                </select>
              </div>

              {/* Religion */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">Religion</label>
                <select
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors font-medium"
                >
                  <option value="">Any Religion</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="sikh">Sikh</option>
                </select>
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-colors font-medium"
                >
                  <option value="">Global</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="london">London</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-8">
              <Link
                href="/profiles"
                onClick={handleSearch}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Search Matches
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Advanced Search Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Filters</h3>
              <p className="text-gray-600">
                Refine your search with detailed criteria including age, location, religion, and lifestyle preferences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Results</h3>
              <p className="text-gray-600">
                Get matched with compatible profiles instantly based on your preferences and values.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Connect Instantly</h3>
              <p className="text-gray-600">
                Message your matches and start meaningful conversations with potential partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
