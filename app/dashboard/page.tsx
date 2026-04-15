import ProfileCompletionCard from "@/app/components/ProfileCompletionCard";
import { currentUser } from "@/lib/mockData";
import { calculateProfileCompletion } from "@/lib/utils/profileCompletion";

export default function DashboardPage() {
  const completion = calculateProfileCompletion(currentUser);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <ProfileCompletionCard completion={completion} />
      </div>
    </main>
  );
}
