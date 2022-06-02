import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
})
export class CardSkillComponent implements OnInit {
  @Input() skill!: any;
  constructor(private services: PortfolioService) {}

  ngOnInit(): void {}

  deleteSkill(id: number) {
    return this.services.deleteSkill(id).subscribe((res) => location.reload());
  }
}
