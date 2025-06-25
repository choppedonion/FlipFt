import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feature-flipping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-flipping.component.html',
  styleUrls: ['./feature-flipping.component.scss'],
})
export class FeatureFlippingComponent {
  features = [
    { name: 'Feature A', active: true, activationDate: '2025-06-25' },
    { name: 'Feature B', active: false, activationDate: '' },
  ];
}
