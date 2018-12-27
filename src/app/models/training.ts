import { Pin } from './pin';

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
}
