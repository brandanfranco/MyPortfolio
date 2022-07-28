import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';
import { TokenService } from 'src/app/auth/services/token.service';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
})
export class CardExperienceComponent implements OnInit {
  @Input() experience!: any;

  rol: any;
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

  deleteExperience(id: number) {
    return this.services
      .deleteExperience(id)
      .subscribe((res) => location.reload());
  }
}
