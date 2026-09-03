export type Screen =
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'home'
  | 'explore'
  | 'destination'
  | 'planner'
  | 'itinerary'
  | 'price'
  | 'tracker'
  
  | 'trips'
  | 'profile'
  | 'settings';

export type Navigate = (screen: Screen, params?: Record<string, unknown>) => void;

export interface ScreenProps {
  navigate: Navigate;
  params?: Record<string, unknown>;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  category: string;
  description: string;
  bestTime: string;
  cost: string;
  saved?: boolean;
}

export interface Trip {
  id: string;
  destination: string;
  image: string;
  startDate: string;
  endDate: string;
  days: number;
  progress: number;
  budget: string;
  spent: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}
