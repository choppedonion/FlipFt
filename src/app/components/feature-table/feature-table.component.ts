import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feature } from '../../models/Feature.model';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feature-table',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './feature-table.component.html',
  styleUrl: './feature-table.component.scss'
})
export class FeatureTableComponent {
  @Input() features: Feature[] = [];
  @Output() toggleFeature = new EventEmitter<{ name: string; active: boolean }>();

  onToggle(feature: Feature): void {
    feature.active = !feature.active;
    this.toggleFeature.emit({ name: feature.name, active: feature.active });
  }
}
