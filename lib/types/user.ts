export interface UserPreference {
  ageMin: number;
  ageMax: number;
}

export interface MatchUser {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  city: string;
  profession: string;
  religion?: string;
  bio?: string;
  image?: string;
  preferences?: UserPreference;
}
