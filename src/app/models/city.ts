import { Workshop } from './workshop';
import { Camp } from './camp';

export interface City {
  name: string;
  workshops: Workshop[];
  camps: Camp[];
}
