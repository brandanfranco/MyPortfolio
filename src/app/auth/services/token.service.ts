import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const Authorities_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];

  constructor() {}

  setToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  setUserName(userName: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, userName);
  }

  getUserName() {
    return localStorage.getItem(USERNAME_KEY);
  }

  setAuthorities(authorities: string[]) {
    window.localStorage.removeItem(Authorities_KEY);
    window.localStorage.setItem(Authorities_KEY, JSON.stringify(authorities));
  }

  getAuthorities() {
    this.roles = [];

    if (localStorage.getItem(Authorities_KEY)) {
      JSON.parse(localStorage.getItem(Authorities_KEY)!).forEach(
        (authority: any) => {
          this.roles.push(authority.authority);
        }
      );
    }

    return this.roles;
  }

  logOutSecurity() {
    window.localStorage.clear();
  }
}
