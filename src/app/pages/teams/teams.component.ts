import { Component } from '@angular/core';
import {TeamDataService} from "../../services/team-data.service";
import {TeamTableComponent} from "../../components/team-table/team-table.component";

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
  teams: any[] = [];

  constructor(private teamDataService: TeamDataService) {}

  ngOnInit() {
    this.teamDataService.getTeams().subscribe((data) => {
      this.teams = data;
    });
  }
}
