interface Product {
  id: number | string;
  name: string;
  features?: { key: string; value: boolean }[];
  environnement?: string;
}

interface Team {
  id: string;
  name: string;
  produits: Product[];
}

import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TeamDataService} from "../../services/team-data.service";
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  teamId: string | null;
  products: Product[] = [];
  selectedEnv: string = 'VA';

  constructor(
    private route: ActivatedRoute,
    private teamDataService: TeamDataService
  ) {
    this.teamId = this.route.snapshot.paramMap.get('idTeam');
  }

  ngOnInit() {
    console.log('Team ID:', this.teamId);
    this.teamDataService.getTeams().subscribe((data: Team[]) => {
      const team = data.find(t => t.id === String(this.teamId));
      if (team) {
        this.products = team.produits || [];
      } else {
        console.warn('Team not found for ID:', this.teamId);
      }
    });
  }

  filteredProducts(): Product[] {
    if (this.selectedEnv === 'ALL') {
      return this.products;
    }
    return this.products.filter(p => p.environnement === this.selectedEnv);
  }
}
