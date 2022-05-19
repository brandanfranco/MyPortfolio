import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { AboutMeComponent } from './pages/aboutMe/about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'experiences',
        component: ExperiencesComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: '',
        component: AboutMeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
