import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import { TeamDataService } from '../../services/team-data.service';

@Component({
  selector: 'app-team-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.scss'
})
export class TeamTableComponent implements OnInit {
  @Input() produitsCountMap: { id: string,  nom: string, countProduct: number }[] = [];

  constructor(private router: Router, private teamDataService: TeamDataService) {}

  ngOnInit() {
    console.log('TeamTableComponent initialized with produitsCountMap:', this.produitsCountMap);
  }

  goToProducts(teamId: string) {
    this.router.navigate([`/${teamId}/products`]);
    console.log(`Navigating to products for team ID: ${teamId}`);
  }
}
