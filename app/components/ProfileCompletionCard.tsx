interface ProfileCompletionCardProps {
  completion: number;
}

export default function ProfileCompletionCard({
  completion,
}: ProfileCompletionCardProps) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold text-slate-900">
          Profile Completeness
        </h3>
        <span className="text-sm font-bold text-rose-600">{completion}%</span>
      </div>
      <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-rose-500 to-emerald-500"
          style={{ width: `${completion}%` }}
        />
      </div>
    </div>
  );
}
