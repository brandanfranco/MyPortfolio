import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TokenService } from 'src/app/auth/services/token.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  rol: any;
  isAdmin: any;

  experiences: any = [];

  newExperience: any = {
    id: '',
    empresa: '',
    posicion: '',
    desde: '',
    hasta: '',
    descripcion: '',
  };

  constructor(
    private services: PortfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.services
      .getInfoExperience()
      .subscribe((resp) => (this.experiences = resp));

    this.rol = this.tokenService.getAuthorities();

    this.rol.forEach((role: any) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  saveExperience() {
    if (this.newExperience.id) {
      this.services
        .updateExperience(this.newExperience)
        .subscribe((resp) => location.reload());
    } else {
      this.services
        .postExperience(this.newExperience)
        .subscribe((resp) => location.reload());
    }
  }
}
