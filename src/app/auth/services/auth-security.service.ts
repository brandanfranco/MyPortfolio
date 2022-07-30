import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtDto } from '../security/jwt-dto';
import { Observable } from 'rxjs';
import { Login } from '../security/login';

@Injectable({
  providedIn: 'root',
})
export class AuthSecurityService {
  authURL = `https://git.heroku.com/hidden-retreat-78619.git/auth/`;

  constructor(private httpClient: HttpClient) {}

  new(nuevoUsuario: any): Observable<any> {
    return this.httpClient.post(this.authURL + 'nuevo', nuevoUsuario);
  }

  loginSecurity(loginUsuario: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
