import {Feature} from "./Feature.model";

export interface Product {
  id: number | string;
  nom: string;
  features?: Feature[];
  equipeId: string;
  environnement?: string;
}
