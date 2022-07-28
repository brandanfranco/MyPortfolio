import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TokenService } from '../../../auth/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: any = [];

  rol: any;
  isAdmin: any;

  newEducation: any = {
    id: '',
    certificacion: '',
    instituto: '',
    duracion: '',
  };

  constructor(
    private services: PortfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.services.getInfoEducations().subscribe((resp: any) => {
      this.educations = resp;
    });
    this.rol = this.tokenService.getAuthorities();
    this.rol.forEach((role: any) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  saveEducation() {
    if (this.newEducation.id) {
      this.services
        .updateEducation(this.newEducation)
        .subscribe((resp) => location.reload());
    } else {
      this.services
        .postEducation(this.newEducation)
        .subscribe((resp) => location.reload());
    }
  }
}
