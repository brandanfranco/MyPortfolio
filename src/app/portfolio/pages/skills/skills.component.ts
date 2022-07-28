import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { TokenService } from 'src/app/auth/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  rol: any;
  isAdmin!: boolean;

  skills: any = [];

  newSkill: any = {
    id: '',
    nombre: '',
    imagen: '',
  };
  constructor(
    private services: PortfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.services.getInfoSkills().subscribe((resp) => (this.skills = resp));

    this.rol = this.tokenService.getAuthorities();
    this.rol.forEach((role: any) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  saveSkill() {
    if (this.newSkill.id) {
      this.services
        .updateSkill(this.newSkill)
        .subscribe((resp) => location.reload());
    } else {
      this.services
        .postSkill(this.newSkill)
        .subscribe((resp) => location.reload());
    }
  }
}
