import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamDataService } from '../../services/team-data.service';
import { FeatureFlippingApiService } from '../../services/feature-flipping-api.service';
import { FeatureOverrideService } from '../../services/feature-override.service';

import { Team } from '../../models/team.model';
import { Product } from '../../models/Product.model';
import { Feature } from '../../models/Feature.model';
import { TeamTableComponent } from '../../components/team-table/team-table.component';
import { FeatureTableComponent } from '../../components/feature-table/feature-table.component';

@Component({
  selector: 'app-feature-flipping',
  standalone: true,
  imports: [CommonModule, FormsModule, TeamTableComponent, FeatureTableComponent],
  templateUrl: './feature-flipping.component.html',
  styleUrls: ['./feature-flipping.component.scss'],
})
export class FeatureFlippingComponent implements OnInit {
  teamId: string | null = null;
  productId: string | null = null;
  mode: 'server' | 'local' = 'server';

  product?: Product;
  features: Feature[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private teamDataService: TeamDataService,
    private featureApiService: FeatureFlippingApiService,
    private overrideService: FeatureOverrideService // Service LocalStorage
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.teamId = params['idTeam'];
      this.productId = params['idProduct'];
      this.mode = params['mode'] === 'local' ? 'local' : 'server';

      console.log('Mode:', this.mode, 'Team:', this.teamId, 'Product:', this.productId);

      if (this.teamId && this.productId) {
        this.loadProductAndFeatures();
      } else {
        this.errorMessage = 'Paramètres manquants (idTeam, idProduct)';
      }
    });
  }

  loadProductAndFeatures(): void {
    this.teamDataService.getTeams().subscribe({
      next: (teams: Team[]) => {
        const team = teams.find(t => t.id === this.teamId);
        if (!team) {
          this.errorMessage = `Équipe non trouvée pour l'ID ${this.teamId}`;
          return;
        }

        this.product = team.produits.find(p => String(p.id) === this.productId);
        if (!this.product) {
          this.errorMessage = `Produit non trouvé pour l'ID ${this.productId}`;
          return;
        }

        console.log('Produit trouvé:', this.product);

        this.loadFeaturesFromBackend(this.product.backendUrl);

      },
      error: (error) => {
        console.error('Erreur chargement équipes:', error);
        this.errorMessage = 'Erreur lors du chargement des équipes.';
      }
    });
  }

  loadFeaturesFromBackend(backendUrl: string): void {
    this.loading = true;
    this.featureApiService.getFeaturesForProduct(backendUrl).subscribe({
      next: (response) => {
        this.features = Object.entries(response).map(([name, active]) => ({
          name,
          active
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur GET backend:', error);
        this.errorMessage = 'Erreur backend.';
        this.loading = false;
      }
    });
  }

  onToggleFeature(event: { name: string; active: boolean }): void {
    if (!this.product) return;

    const payload = {
      [event.name]: event.active
    };

    console.log('PUT triggered for:', payload);

    this.featureApiService.updateFeaturesForProduct(this.product.backendUrl, payload).subscribe({
      next: () => console.log(`Feature ${event.name} updated.`),
      error: (error) => console.error('PUT error:', error)
  });
  }
}
