import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-flipping-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './feature-flipping-home.component.html',
  styleUrls: ['./feature-flipping-home.component.scss']
})
export class FeatureFlippingHomeComponent implements OnInit {
  idTeam: string | null = null;
  idProduct: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idTeam = this.route.snapshot.queryParamMap.get('idTeam');
    this.idProduct = this.route.snapshot.queryParamMap.get('idProduct');
    console.log('Arrivé avec idTeam:', this.idTeam, 'et idProduct:', this.idProduct);
  }

  goToBackendManagement(): void {
    this.router.navigate(['/feature-flipping/backend'], {
      queryParams: {
        idTeam: this.idTeam,
        idProduct: this.idProduct,
        mode: 'server'
      }
    });
  }

  goToLocalOverride(): void {
    this.router.navigate(['/feature-flipping/backend'], {
      queryParams: {
        idTeam: this.idTeam,
        idProduct: this.idProduct,
        mode: 'local'
      }
    });
  }
}
