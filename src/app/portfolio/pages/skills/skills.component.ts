import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any = [];

  newSkill: any = {
    id: '',
    nombre: '',
    imagen: '',
  };
  constructor(private services: PortfolioService) {}

  ngOnInit(): void {
    this.services.getInfoSkills().subscribe((resp) => (this.skills = resp));
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
