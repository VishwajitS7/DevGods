import { NextResponse } from "next/server";
import { calculateMatchScore } from "@/lib/utils/matchScore";
import { currentUser, interests, users } from "@/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city")?.trim().toLowerCase() ?? "";
  const gender = searchParams.get("gender") ?? "All";
  const ageMin = Number(searchParams.get("ageMin") ?? 18);
  const ageMax = Number(searchParams.get("ageMax") ?? 60);

  const filtered = users.filter((user) => {
    const cityMatch =
      city.length === 0 || user.city.trim().toLowerCase().includes(city);
    const genderMatch = gender === "All" || user.gender === gender;
    const ageMatch = user.age >= ageMin && user.age <= ageMax;
    return cityMatch && genderMatch && ageMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    const aSameCity =
      a.city.trim().toLowerCase() === currentUser.city.trim().toLowerCase();
    const bSameCity =
      b.city.trim().toLowerCase() === currentUser.city.trim().toLowerCase();
    if (aSameCity && !bSameCity) return -1;
    if (!aSameCity && bSameCity) return 1;
    return a.name.localeCompare(b.name);
  });

  const profiles = sorted.map((user) => {
    const matchScore = calculateMatchScore(currentUser, user);
    const relation = interests.find(
      (item) => item.fromUserId === currentUser.id && item.toUserId === user.id
    );
    const canViewPhoto = relation?.status === "accepted";

    return {
      ...user,
      matchScore,
      isPhotoBlurred: !canViewPhoto,
    };
  });

  return NextResponse.json({ currentUser, profiles });
}
