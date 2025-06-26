import {Product} from "./Product.model";

export interface Team {
  id: string;
  name: string;
  produits: Product[];
}
