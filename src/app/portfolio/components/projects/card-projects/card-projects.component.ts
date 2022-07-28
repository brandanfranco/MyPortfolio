import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';
import { TokenService } from '../../../../auth/services/token.service';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
})
export class CardProjectsComponent implements OnInit {
  @Input() project!: any;
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

  deleteItem(id: any) {
    return this.services
      .deleteProyect(id)
      .subscribe((res) => location.reload());
  }
}
