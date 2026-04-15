'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  id,
  name,
  age,
  city,
  profession,
  gender,
  image,
  matchScore = 0,
  isPhotoBlurred = false,
}: ProfileCardProps) {
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();

  if (isDeleted) return null;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden bg-slate-200 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          priority={false}
          quality={90}
        />
        {/* Gender Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-rose-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {gender}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm font-bold text-emerald-600 mb-2">
          Match: {matchScore}%
        </p>
        {/* Name and Age */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
          <p className="text-sm text-slate-500 font-medium">{age} years old</p>
        </div>

        {/* Info */}
        <div className="mb-6 space-y-2.5 flex-grow">
          <div className="flex items-center text-sm text-slate-600">
            <svg
              className="w-4 h-4 mr-2.5 text-rose-500 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">{city}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <svg
              className="w-4 h-4 mr-2.5 text-rose-500 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10v4a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span className="truncate">{profession}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-2 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/profiles/${id}`);
            }}
            className="flex-1 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-rose-700 active:scale-[0.98] transition-all duration-200 text-sm shadow-sm shadow-rose-200"
          >
            View Profile
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsDeleted(true);
            }}
            className="px-5 py-2.5 bg-slate-100 text-rose-600 rounded-xl font-semibold hover:bg-rose-100 hover:text-rose-700 active:scale-[0.98] transition-all duration-200 text-sm border border-rose-100 flex items-center justify-center shrink-0"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}