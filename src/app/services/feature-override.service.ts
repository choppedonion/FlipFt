import { Injectable } from '@angular/core';
import { Feature } from '../models/Feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureOverrideService {
  private storageKeyPrefix = 'featureOverrides_';

  constructor() {}

  getOverridesForProduct(productId: string): Feature[] {
    const data = localStorage.getItem(this.storageKeyPrefix + productId);
    if (!data) return [];

    try {
      const parsed = JSON.parse(data) as Record<string, boolean>;
      return Object.entries(parsed).map(([name, active]) => ({
        name,
        active
      }));
    } catch (e) {
      console.error('Erreur parsing LocalStorage pour le produit:', productId, e);
      return [];
    }
  }

  saveOverridesForProduct(productId: string, overrides: Record<string, boolean>): void {
    try {
      localStorage.setItem(this.storageKeyPrefix + productId, JSON.stringify(overrides));
      console.log('Overrides sauvegardés pour', productId, overrides);
    } catch (e) {
      console.error('Erreur sauvegarde LocalStorage:', e);
    }
  }

  clearOverridesForProduct(productId: string): void {
    localStorage.removeItem(this.storageKeyPrefix + productId);
    console.log('Overrides supprimés pour', productId);
  }

  clearAllOverrides(): void {
    Object.keys(localStorage)
      .filter(key => key.startsWith(this.storageKeyPrefix))
      .forEach(key => localStorage.removeItem(key));

    console.log('Tous les overrides LocalStorage supprimés');
  }
}
