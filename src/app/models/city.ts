import { Workshop } from './workshop';
import { Camp } from './camp';
import { Pin } from './pin';
import { Training } from './training';

export interface City {
  parent: Pin;
  workshops: Workshop[];
  camps: Camp[];
  trainings: Training[];
}
