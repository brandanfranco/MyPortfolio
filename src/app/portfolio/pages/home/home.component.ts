import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  infoPersonal: any = [];
  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.service
      .getInfoPersonal()
      .subscribe((data) => (this.infoPersonal = data));
  }
}
