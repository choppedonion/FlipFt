import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-team-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.scss'
})
export class TeamTableComponent {
  @Input() teams: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Teams data:', this.teams);
    if (!this.teams || this.teams.length === 0) {
      console.warn('No teams data available');
    }
  }

  goToProducts(teamId: number) {
    this.router.navigate([`/${teamId}/products`]);
    console.log(`Navigating to products for team ID: ${teamId}`);
  }
}
