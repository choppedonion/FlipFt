import {AddProductModalComponent} from "../../shared/add-product-modal/add-product-modal.component";
import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TeamDataService} from "../../services/team-data.service";
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {Product} from "../../models/Product.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    AddProductModalComponent,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  teamId: string | null;
  products: Product[] = [];
  selectedEnv: string = 'VA';
  showModal = false;

  constructor(
    private route: ActivatedRoute,
    private teamDataService: TeamDataService
  ) {
    this.teamId = this.route.snapshot.paramMap.get('idTeam');
  }

  ngOnInit() {
    console.log('Team ID:', this.teamId);
    this.teamDataService.getProduitsByEquipeId(String(this.teamId)).subscribe((data: Product[]) => {
      this.products = data;
      console.log('Products loaded:', this.products);
    });
  }

  filteredProducts(): Product[] {

    return this.products.filter(p => p.environnement === this.selectedEnv);
  }

  onAddProduct(data: { name: string, env: string, url: string }) {
    const newProduct: Product = {
      id: `p${Date.now()}`,
      nom: data.name,
      equipeId: String(this.teamId),
      environnement: this.selectedEnv,
      backendUrl: data.url
    };

    this.teamDataService.addProductToTeam(String(this.teamId), newProduct)
    this.products.push(newProduct);
    this.showModal = false;
  }
}
