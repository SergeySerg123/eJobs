import { Component, OnInit } from '@angular/core';
import { CompetenciesService } from 'src/app/services/competencies.service';
import { Competency } from 'src/app/models/competency.model';
import { faCheck, faTimes, faEye, faEdit, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competencies-area',
  templateUrl: './competencies-area.component.html',
  styleUrls: ['./competencies-area.component.scss']
})
export class CompetenciesAreaComponent implements OnInit {
  competencies: Competency[];
  faCheck = faCheck;
  faTimes = faTimes;
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private competenciesService: CompetenciesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.competenciesService.competencies.subscribe(competencies => {
      this.competencies = competencies;
    })
  }

  checkIfInvalid (id: string): IconDefinition {
    const compenetcy: Competency = this.competencies.find(competency => competency.id === id);
    return compenetcy.confirmed ? faCheck : faTimes;
  }

  addNewCompetency(): void {
    this.router.navigateByUrl('/add-new-competency');
  }
}