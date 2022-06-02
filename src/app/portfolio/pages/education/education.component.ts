import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: any = [];

  newEducation: any = {
    id: '',
    certificacion: '',
    instituto: '',
    duracion: '',
  };

  constructor(private services: PortfolioService) {}

  ngOnInit(): void {
    this.services.getInfoEducations().subscribe((resp: any) => {
      this.educations = resp;
    });
  }

  saveEducation() {
    if (this.newEducation.id) {
      this.services
        .updateEducation(this.newEducation)
        .subscribe((resp) => location.reload());
    } else {
      this.services
        .postEducation(this.newEducation)
        .subscribe((resp) => location.reload());
    }
  }
}
