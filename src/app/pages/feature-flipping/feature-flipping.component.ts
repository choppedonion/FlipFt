import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamDataService } from '../../services/team-data.service';

import { Team } from '../../models/team.model';
import { Product } from '../../models/Product.model';
import { Feature } from '../../models/Feature.model';
import { TeamTableComponent } from '../../components/team-table/team-table.component';
import { FeatureTableComponent } from '../../components/feature-table/feature-table.component';
import {FeatureFlippingApiService} from "../../services/feature-flipping-api.service";

@Component({
  selector: 'app-feature-flipping',
  standalone: true,
  imports: [CommonModule, FormsModule, TeamTableComponent, FeatureTableComponent],
  templateUrl: './feature-flipping.component.html',
  styleUrls: ['./feature-flipping.component.scss'],
})
export class FeatureFlippingComponent implements OnInit {
  teamId: string | null;
  productId: string | null;
  product: Product | undefined;
  features: Feature[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private teamDataService: TeamDataService,
    private featureApiService: FeatureFlippingApiService
  ) {
    this.teamId = this.route.snapshot.paramMap.get('idTeam');
    this.productId = this.route.snapshot.paramMap.get('idProduct');
  }

  ngOnInit(): void {
    console.log('Team ID:', this.teamId, 'Product ID:', this.productId);
    this.teamDataService.getProduitsById(String(this.productId)).subscribe({
      next: (product: Product) => {
        if(product) {
          this.product = product;
          console.log('Product found:', this.product);
          this.loadFeaturesFromBackend(this.product.backendUrl);
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement des équipes :', error);
        this.errorMessage = 'Erreur de chargement des données.';
      }
    });
  }

  loadFeaturesFromBackend(backendUrl: string): void {
    this.loading = true;
    this.featureApiService.getFeaturesForProduct(backendUrl).subscribe({
      next: (response) => {
        console.log(response)
        this.features = Object.entries(response).map(([name, active]) => ({
          name,
          active
        }));
        console.log('Features chargés depuis backend:', this.features);
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des features:', error);
        this.errorMessage = 'Erreur lors de la récupération des features.';
        this.loading = false;
      }
    });
  }
}
