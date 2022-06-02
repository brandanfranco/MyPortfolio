import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { CardProjectsComponent } from './components/projects/card-projects/card-projects.component';
import { ImagesPipe } from './pipes/imagesPipe/images.pipe';
import { AboutMeComponent } from './pages/aboutMe/about-me/about-me.component';
import { FormsModule } from '@angular/forms';
import { CardExperienceComponent } from './components/experiences/card-experience/card-experience.component';
import { CardEducationComponent } from './components/education/card-education/card-education.component';
import { CardSkillComponent } from './components/skill/card-skill/card-skill.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ExperiencesComponent,
    SkillsComponent,
    EducationComponent,
    HomeComponent,
    CardProjectsComponent,
    ImagesPipe,
    AboutMeComponent,
    CardExperienceComponent,
    CardEducationComponent,
    CardSkillComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
})
export class PortfolioModule {}
