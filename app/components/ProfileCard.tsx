'use client';

import Image from 'next/image';

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  city: string;
  profession: string;
  gender: 'Male' | 'Female' | 'Other';
  image: string;
  matchScore?: number;
  isPhotoBlurred?: boolean;
}

export default function ProfileCard({
  name,
  age,
  city,
  profession,
  gender,
  image,
  matchScore = 0,
  isPhotoBlurred = false,
}: ProfileCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden bg-slate-200">
        <Image
          src={image}
          alt={name}
          fill
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
            isPhotoBlurred ? "blur-md" : ""
          }`}
          priority={false}
        />
        {/* Gender Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {gender}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm font-semibold text-emerald-700 mb-2">
          Match: {matchScore}%
        </p>
        {/* Name and Age */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
          <p className="text-sm text-slate-600">{age} years old</p>
        </div>

        {/* Info */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-slate-700">
            <svg
              className="w-4 h-4 mr-2 text-rose-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {city}
          </div>
          <div className="flex items-center text-sm text-slate-700">
            <svg
              className="w-4 h-4 mr-2 text-rose-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10v4a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            {profession}
          </div>
        </div>

        {/* View Profile Button */}
        <button className="w-full py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 text-sm">
          View Profile
        </button>
      </div>
    </div>
  );
}