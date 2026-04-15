import type { MatchUser } from "@/lib/types/user";

export function calculateMatchScore(
  currentUser: MatchUser,
  targetUser: MatchUser
): number {
  let score = 0;

  const ageMin = currentUser.preferences?.ageMin;
  const ageMax = currentUser.preferences?.ageMax;
  if (
    typeof ageMin === "number" &&
    typeof ageMax === "number" &&
    targetUser.age >= ageMin &&
    targetUser.age <= ageMax
  ) {
    score += 30;
  }

  if (
    currentUser.city.trim().toLowerCase() ===
    targetUser.city.trim().toLowerCase()
  ) {
    score += 25;
  }

  if (
    currentUser.profession.trim().toLowerCase() ===
    targetUser.profession.trim().toLowerCase()
  ) {
    score += 20;
  }

  if (
    currentUser.religion &&
    targetUser.religion &&
    currentUser.religion.trim().toLowerCase() ===
      targetUser.religion.trim().toLowerCase()
  ) {
    score += 25;
  }

  return score;
}
