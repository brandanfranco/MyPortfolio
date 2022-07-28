import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';
import { TokenService } from '../../../../auth/services/token.service';

@Component({
  selector: 'app-card-education',
  templateUrl: './card-education.component.html',
})
export class CardEducationComponent implements OnInit {
  @Input() education!: any;

  rol!: any;
  active: boolean = false;

  constructor(
    private services: PortfolioService,
    private tokenService: TokenService
  ) {}
  ngOnInit() {
    this.rol = this.tokenService.getAuthorities();
    this.rol.forEach((role: any) => {
      if (role === 'ROLE_ADMIN') {
        this.active = true;
      }
    });
  }

  deleteEducation(id: number) {
    return this.services
      .deleteEducation(id)
      .subscribe((res) => location.reload());
  }
}
