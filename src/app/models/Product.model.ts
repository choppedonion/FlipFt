import { Feature } from './Feature.model';

export interface Product {
  id: string;
  name: string;
  environnement: string;
  backendUrl: string;
  features?: Feature[];
}
