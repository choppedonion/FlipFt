import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TeamDataService} from "../../services/team-data.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/Product.model";
import {Team} from "../../models/team.model";
import { Feature } from '../../models/Feature.model';
import {TeamTableComponent} from "../../components/team-table/team-table.component";
import {FeatureTableComponent} from "../../components/feature-table/feature-table.component";

@Component({
  selector: 'app-feature-flipping',
  standalone: true,
  imports: [CommonModule, FormsModule, TeamTableComponent, FeatureTableComponent],
  templateUrl: './feature-flipping.component.html',
  styleUrls: ['./feature-flipping.component.scss'],
})
export class FeatureFlippingComponent {
  teamId: string | null;
  productId: string | null;
  products: Product[] = [];
  features: Feature[] = [];

  constructor(
    private route: ActivatedRoute,
    private teamDataService: TeamDataService
  ) {
    this.teamId = this.route.snapshot.paramMap.get('idTeam');
    this.productId = this.route.snapshot.paramMap.get('idProduct');
  }

  ngOnInit() {
    console.log('Team ID:', this.teamId);
    this.teamDataService.getTeams().subscribe((data: Team[]) => {
      const team = data.find(t => t.id === String(this.teamId));
      if (team) {
        const product = team.produits.find(p => String(p.id) === this.productId);
        if (product) {
          this.features = product.features ?? [];
          console.log('Features for product:', this.features);
        }
      } else {
        console.warn('Team not found for ID:', this.teamId);
      }
    });
  }
}
