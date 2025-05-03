import { image } from "framer-motion/client";

export type Doctor = {
  id: string;
  name: string;
  specialization: 'general' | 'pediatric' | 'womens' | 'cosmetic';
  qualifications: string[];
  experience: number;
  clinic: {
    name: string;
    location: string;
    timing: string;
  };
  image: string;
  languages: string[];
};

export const doctors: Doctor[] = [
  {
    id: 'dr-smith',
    name: 'Dr. Sarah Smith',
    specialization: 'womens',
    qualifications: ['BDS', 'MDS - Periodontics'],
    experience: 12,
    clinic: {
      name: 'DentCare Women\'s Clinic',
      location: '123 Medical Center, New York',
      timing: 'Mon-Fri: 9AM-5PM'
    },
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    languages: ['English', 'Spanish']
  },
  {
    id: 'dr-johnson',
    name: 'Dr. Mike Johnson',
    specialization: 'pediatric',
    qualifications: ['BDS', 'MDS - Pediatric Dentistry'],
    experience: 8,
    clinic: {
      name: 'Kids Dental Care',
      location: '456 Children\'s Ave, Boston',
      timing: 'Mon-Sat: 10AM-6PM'
    },
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    languages: ['English']
  },
  {
    id: '1',
    name: 'Dr. Sarooj Hannan',
    specialization: 'general',
    experience: 12,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,male',
    qualifications: []
  },
  {
    id: '2',
    name: 'Dr. Shahab Rafiq',
    specialization: 'general',
    experience: 10,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,male',
    qualifications: []
  },
  {
    id: '3',
    name: 'Dr. Ali Farooq',
    specialization: 'general',
    experience: 17,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,male',
    qualifications: [],
  },
  {
    id: '4',
    name: 'Dr. Farhan Zaib',
    specialization: 'general',
    experience: 17,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,male',
    qualifications: [],
  },
  {
    id: '5',
    name: 'Dr. Muhammad Moazzam',
    specialization: 'general',
    experience: 16,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,male',
    qualifications: [],
  },
  {
    id: '6',
    name: 'Dr. Summaya Ibrahim',
    specialization: 'general',
    experience: 10,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,female',
    qualifications: [],
  },
  {
    id: '7',
    name: 'Dr. Hania Khan',
    specialization: 'general',
    experience: 6,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,female',
    qualifications: [],
  },
  {
    id: '8',
    name: 'Dr. Rida Naqoosh',
    specialization: 'general',
    experience: 6,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,female',
    qualifications: [],
  },
  {
    id: '9',
    name: 'Dr. Abdul Rehman',
    specialization: 'general',
    experience: 4,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,male',
    qualifications: [],
  },
  {
    id: '10',
    name: 'Dr. Gull Fizza Shahzaib',
    specialization: 'general',
    experience: 8,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,female',
    qualifications: [],
  },
  {
    id: '11',
    name: 'Dr. Maheen Elahi',
    specialization: 'general',
    experience: 4,
    languages: ['English', 'Urdu'],
    clinic: {
      name: 'DentCare Clinic',
      location: 'Lahore',
      timing: '11:00 AM - 9:00 PM',
    },
    image: 'https://source.unsplash.com/random/150x150/?doctor,female',
    qualifications: [],
  },
];
