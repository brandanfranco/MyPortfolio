import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';
import { TokenService } from 'src/app/auth/services/token.service';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
})
export class CardSkillComponent implements OnInit {
  rol: any;
  active: boolean = false;
  @Input() skill!: any;
  constructor(
    private services: PortfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.rol = this.tokenService.getAuthorities();
    this.rol.forEach((role: any) => {
      if (role === 'ROLE_ADMIN') {
        this.active = true;
      }
    });
  }

  deleteSkill(id: number) {
    return this.services.deleteSkill(id).subscribe((res) => location.reload());
  }
}
