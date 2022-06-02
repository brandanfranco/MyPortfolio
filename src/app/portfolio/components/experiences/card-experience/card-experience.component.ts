import { Component, Input } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
})
export class CardExperienceComponent {
  @Input() experience!: any;

  constructor(private services: PortfolioService) {}

  deleteExperience(id: number) {
    return this.services
      .deleteExperience(id)
      .subscribe((res) => location.reload());
  }
}
