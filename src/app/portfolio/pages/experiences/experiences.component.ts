import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  experiences: any = [];

  newExperience: any = {
    empresa: '',
    posicion: '',
    desde: '',
    hasta: '',
    descripcion: '',
  };

  constructor(private services: PortfolioService) {}

  ngOnInit(): void {
    this.services
      .getInfoExperience()
      .subscribe((resp) => (this.experiences = resp));
  }
}
