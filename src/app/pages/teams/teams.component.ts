import { Component } from '@angular/core';
import {TeamDataService} from "../../services/team-data.service";
import {TeamTableComponent} from "../../components/team-table/team-table.component";
import {Team} from "../../models/team.model";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    TeamTableComponent
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teams: Team[] = [];
  produitsCountMap: { id: string,  nom: string, countProduct: number }[] = [];

  constructor(private teamDataService: TeamDataService) {}

  ngOnInit() {
    this.teamDataService.getEquipes().subscribe((data) => {
      this.teams = data;

      this.teams.forEach(team => {
        this.teamDataService.getNombreProduitsByEquipeId(team.id).subscribe((count: number) => {
          this.produitsCountMap.push({ id: team.id, nom: team.nom, countProduct: count });
          console.log(`Team ID: ${team.id}, Products Count: ${count}`);
        });
      });


      console.log('Teams data loaded:', this.teams);
    });
  }
}
