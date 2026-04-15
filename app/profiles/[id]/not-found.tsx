import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-slate-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Profile Not Found</h1>
        <p className="text-slate-600 mb-8 text-lg">
          Sorry, the profile you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/profiles"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300"
        >
          Back to Profiles
        </Link>
      </div>
    </div>
  );
}
