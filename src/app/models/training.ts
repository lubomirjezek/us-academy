import { Pin } from './pin';
import { Leader } from './leader';

export interface Training {
  id: string;
  address: string;
  capacity: number;
  date: string;
  date_to: string;
  day: string;
  paid: number;
  price: number;
  season: string;
  text: string;
  time: string;
  trainer: string;
  type: number;
  city: Pin;
  leader: Leader;
  age: string;
  difficulty: string;
}
