export interface Profile {
  id: number;
  name: string;
  age: number;
  city: string;
  profession: string;
  gender: 'Male' | 'Female';
  image: string;
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 26,
    city: 'Mumbai',
    profession: 'Software Engineer',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Arjun Patel',
    age: 28,
    city: 'Bangalore',
    profession: 'Product Manager',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Anjali Verma',
    age: 24,
    city: 'Delhi',
    profession: 'Doctor',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Rahul Singh',
    age: 30,
    city: 'Pune',
    profession: 'Investment Banker',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Neha Chopra',
    age: 25,
    city: 'Hyderabad',
    profession: 'Architect',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1507527173433-16170bb80787?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Vikram Gupta',
    age: 32,
    city: 'Delhi',
    profession: 'Entrepreneur',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
  {
    id: 7,
    name: 'Meera Desai',
    age: 27,
    city: 'Mumbai',
    profession: 'Lawyer',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1517746915202-e2a88721d562?w=400&h=400&fit=crop',
  },
  {
    id: 8,
    name: 'Aditya Kumar',
    age: 29,
    city: 'Bangalore',
    profession: 'Data Scientist',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 9,
    name: 'Shreya Joshi',
    age: 26,
    city: 'Pune',
    profession: 'Consultant',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1502085945348-055a06da1b72?w=400&h=400&fit=crop',
  },
  {
    id: 10,
    name: 'Rohan Mishra',
    age: 31,
    city: 'Mumbai',
    profession: 'Consultant',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 11,
    name: 'Divya Nair',
    age: 23,
    city: 'Kochi',
    profession: 'Graphic Designer',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 12,
    name: 'Nikhil Sinha',
    age: 33,
    city: 'Bangalore',
    profession: 'Senior Engineer',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
];

export const getProfileById = (id: number): Profile | undefined => {
  return profiles.find(p => p.id === id);
};
