import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../security/login';

import { TokenService } from '../services/token.service';
import { AuthSecurityService } from '../services/auth-security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoggedFail: boolean = false;
  loginDetails!: Login;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authSecurityService: AuthSecurityService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.isLoggedFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  /**  Login(): any {
    return this.authService.login().subscribe((resp: any) => {
      console.log(resp);
      if (resp) {
        this.router.navigate(['portfolio']);
      }
    });
  }
  */

  /**  withOutLogin() {
    this.authService.logOut();
    this.router.navigate(['portfolio']);
  }

*/

  onlogin() {
    this.loginDetails = new Login(this.nombreUsuario, this.password);
    this.authSecurityService.loginSecurity(this.loginDetails).subscribe({
      next: (data: any) => {
        this.isLoggedIn = true;
        this.isLoggedFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);

        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['portfolio']);
      },
      error: (e: any) => {
        this.isLoggedIn = false;
        this.isLoggedFail = true;
        this.errMsg = e.error.mensaje;
      },
    });
  }
}
