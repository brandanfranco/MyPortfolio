export class Login {
  nombreUsuario!: string;

  password!: string;
  constructor(nombreUsuario: string, password: string) {
    this.nombreUsuario = nombreUsuario;
    this.password = password;
  }
}
