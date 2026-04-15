import Image from "next/image";
import ProfileCompletionCard from "@/app/components/ProfileCompletionCard";
import { currentUser } from "@/lib/mockData";
import { calculateProfileCompletion } from "@/lib/utils/profileCompletion";

export default function ProfilePage() {
  const completion = calculateProfileCompletion(currentUser);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>

        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 flex items-center gap-5">
          {currentUser.image && (
            <Image
              src={currentUser.image}
              alt={currentUser.name}
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          )}
          <div>
            <p className="text-xl font-bold text-slate-900">{currentUser.name}</p>
            <p className="text-slate-600">
              {currentUser.age} years • {currentUser.city}
            </p>
            <p className="text-slate-600">{currentUser.profession}</p>
          </div>
        </div>

        <ProfileCompletionCard completion={completion} />
      </div>
    </main>
  );
}
