import { Feature } from './Feature.model';

export interface Product {
  id: number | string;
  nom: string;
  backendUrl: string;
  equipeId: string;
  environnement?: string;
}
