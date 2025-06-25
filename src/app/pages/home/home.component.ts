import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products = [
    { name: 'Produit 1', id: 101 },
    { name: 'Produit 2', id: 102 },
    { name: 'Produit 3', id: 103 },
  ];
}
