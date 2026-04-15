interface ProfileLike {
  name?: string;
  age?: number | string;
  gender?: string;
  bio?: string;
  image?: string;
  preferences?: unknown;
}

export function calculateProfileCompletion(profile: ProfileLike): number {
  let score = 0;

  if (profile.name && profile.age && profile.gender) {
    score += 40;
  }

  if (profile.bio && profile.bio.trim().length > 0) {
    score += 20;
  }

  if (profile.image && profile.image.trim().length > 0) {
    score += 20;
  }

  if (profile.preferences) {
    score += 20;
  }

  return Math.min(score, 100);
}
