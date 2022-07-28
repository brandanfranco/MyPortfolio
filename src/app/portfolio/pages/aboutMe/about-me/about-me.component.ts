import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  person!: any;

  constructor(private services: PortfolioService) {}

  ngOnInit() {
    this.services.getInfoPersonal().subscribe((resp) => (this.person = resp));
  }
}
