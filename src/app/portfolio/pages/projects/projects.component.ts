import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../../services/portfolio.service';
import { TokenService } from '../../../auth/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  rol: any;
  isAdmin!: boolean;

  projects: any = [];
  constructor(
    private services: PortfolioService,
    private tokenService: TokenService
  ) {}

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

    this.rol = this.tokenService.getAuthorities();
    this.rol.forEach((role: any) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
