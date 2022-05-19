import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any = [];
  constructor(private services: PortfolioService) {}

  nuevoProject: any = {
    id: '',
    nombre: '',
    url: '',
    tecnologias: '',
    descripcion: '',
  };

  ngOnInit(): void {
    this.services
      .getInfoProyect()
      .subscribe((projects) => (this.projects = projects));
  }

  saveProject() {
    if (this.nuevoProject.id) {
      this.services
        .UpdateProject(this.nuevoProject)
        .subscribe((resp) => location.reload());
    } else {
      this.services
        .postProject(this.nuevoProject)
        .subscribe((resp) => location.reload());
    }
  }
}
