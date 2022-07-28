import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../interfaces/auth.interface';
import { TokenService } from '../../../auth/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  infoPersonal!: any;
  nombreUsuario!: any;

  get auth(): any {
    return this.authService.auth;
  }
  constructor(
    private service: PortfolioService,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.service
      .getInfoPersonal()
      .subscribe((data) => (this.infoPersonal = data));
    if (this.tokenService.getToken()) {
      this.nombreUsuario = this.tokenService.getUserName();
    }
  }

  logout() {
    this.router.navigate(['/auth/login']);
    localStorage.clear();
  }
}
