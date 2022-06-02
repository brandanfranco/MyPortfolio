import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-card-education',
  templateUrl: './card-education.component.html',
})
export class CardEducationComponent {
  @Input() education!: any;

  constructor(private services: PortfolioService) {}

  deleteEducation(id: number) {
    return this.services
      .deleteEducation(id)
      .subscribe((res) => location.reload());
  }
}
