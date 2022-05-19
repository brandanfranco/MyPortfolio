import { Component, Input } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
})
export class CardProjectsComponent {
  @Input() project!: any;

  constructor(private services: PortfolioService) {}

  deleteItem(id: any) {
    return this.services
      .deleteProyect(id)
      .subscribe((res) => location.reload());
  }
}
