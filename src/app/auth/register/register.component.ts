import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from '../security/new-user';
import { AuthSecurityService } from '../services/auth-security.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isRegister: boolean = false;
  isRegisterFail: boolean = false;
  nuevoUsuario!: NewUser;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;

  errMsg!: string;
  isLoggedIn = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authSecurityService: AuthSecurityService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onRegister() {
    this.nuevoUsuario = new NewUser(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );
    this.authSecurityService.new(this.nuevoUsuario).subscribe({
      next: (data: any) => {
        this.isRegister = true;
        this.isRegisterFail = false;

        this.router.navigate(['auth/login']);
      },
      error: (e: any) => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsg = e.error.mensaje;
      },
    });
  }
}
