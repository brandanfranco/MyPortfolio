import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable, of, map } from 'rxjs';
import { Auth } from 'src/app/portfolio/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth!: any;

  get auth() {
    return this._auth;
  }
  constructor(private http: HttpClient) {}

  autentication(): Observable<boolean> {
    if (!localStorage.getItem('AuthToken')) {
      return of(false);
    }
    return this.http
      .get('https://portfoliofrancobrandan.herokuapp.com/api/person/all')
      .pipe(
        map((response) => {
          return true;
        })
      );
  }
}
