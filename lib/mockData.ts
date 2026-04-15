import type { MatchUser } from "@/lib/types/user";

export interface InterestRecord {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: "pending" | "accepted" | "rejected";
}

export const currentUser: MatchUser = {
  id: "u-current",
  name: "Aarav Mehta",
  age: 29,
  gender: "Male",
  city: "Mumbai",
  profession: "Software Engineer",
  religion: "hindu",
  bio: "Product-minded engineer looking for meaningful companionship.",
  image:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  preferences: {
    ageMin: 24,
    ageMax: 32,
  },
};

export const users: MatchUser[] = [
  {
    id: "u-1",
    name: "Priya Sharma",
    age: 26,
    city: "Mumbai",
    profession: "Software Engineer",
    gender: "Female",
    religion: "hindu",
    bio: "Book lover and traveler.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: "u-2",
    name: "Arjun Patel",
    age: 28,
    city: "Bangalore",
    profession: "Product Manager",
    gender: "Male",
    religion: "hindu",
    bio: "Builder of digital products.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "u-3",
    name: "Anjali Verma",
    age: 24,
    city: "Delhi",
    profession: "Doctor",
    gender: "Female",
    religion: "hindu",
    bio: "Clinician with a creative side.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: "u-4",
    name: "Rahul Singh",
    age: 30,
    city: "Pune",
    profession: "Investment Banker",
    gender: "Male",
    religion: "sikh",
    bio: "Finance professional and biker.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "u-5",
    name: "Neha Chopra",
    age: 25,
    city: "Hyderabad",
    profession: "Architect",
    gender: "Female",
    religion: "christian",
    bio: "Architecture and design enthusiast.",
    image:
      "https://images.unsplash.com/photo-1507527173433-16170bb80787?w=400&h=400&fit=crop",
  },
];

export const interests: InterestRecord[] = [
  { id: "i-1", fromUserId: "u-current", toUserId: "u-1", status: "accepted" },
  { id: "i-2", fromUserId: "u-current", toUserId: "u-3", status: "pending" },
];

export interface NotificationRecord {
  id: string;
  userId: string;
  message: string;
  type: "interest" | "match" | "view";
  isRead: boolean;
  createdAt: string;
}

export const mockNotifications: NotificationRecord[] = [
  {
    id: "n-1",
    userId: "u-current",
    message: "You have a new profile match in Mumbai.",
    type: "match",
    isRead: false,
    createdAt: new Date().toISOString(),
  },
];
