import {Feature} from "./Feature.model";

export interface Product {
  id: number | string;
  name: string;
  features?: Feature[];
  environnement?: string;
}
