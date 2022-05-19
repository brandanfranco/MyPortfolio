import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  persona!: any;

  constructor(private services: PortfolioService) {}

  ngOnInit() {
    this.services.getInfoPersonal().subscribe((resp) => (this.persona = resp));
  }
}
