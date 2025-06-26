import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Feature} from "../../models/Feature.model";

@Component({
  selector: 'app-feature-table',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './feature-table.component.html',
  styleUrl: './feature-table.component.scss'
})
export class FeatureTableComponent {
  @Input() features: Feature[] = [];

  constructor(private router: Router) {}

  ngOnInit() {

  }

}
