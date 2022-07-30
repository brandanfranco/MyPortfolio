import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: any = `http://localhost:8080`;
  constructor(private http: HttpClient) {}

  getInfoPersonal() {
    return this.http.get(`${this.url}/api/person/all`);
  }

  // Proyects Services(get,put,delete,post)

  getInfoProyect() {
    return this.http.get(`${this.url}/api/proyecto/all`);
  }

  postProject(nuevoProject: any) {
    return this.http.post(`${this.url}/api/proyecto`, nuevoProject);
  }

  UpdateProject(nuevoProject: any) {
    return this.http.put(`${this.url}/api/proyecto/edit`, nuevoProject, {
      responseType: 'text',
    });
  }

  deleteProyect(id: number) {
    return this.http.delete(`${this.url}/api/proyecto/${id}`, {
      responseType: 'text',
    });
  }

  // // Experiences Services(get,put,delete,post)

  getInfoExperience() {
    return this.http.get('${this.url}/api/experiencia/all');
  }

  postExperience(newExperience: any) {
    return this.http.post('${this.url}/api/experiencia', newExperience);
  }

  updateExperience(newExperience: any) {
    return this.http.put(`${this.url}/api/experiencia/edit`, newExperience, {
      responseType: 'text',
    });
  }

  deleteExperience(id: number) {
    return this.http.delete(`${this.url}/api/experiencia/${id}`, {
      responseType: 'text',
    });
  }

  // // Educations Services(get,put,delete,post)

  getInfoEducations() {
    return this.http.get(`${this.url}/api/educacion/all`);
  }

  postEducation(newEducation: any) {
    return this.http.post(`${this.url}/api/educacion`, newEducation);
  }

  updateEducation(newEducation: any) {
    return this.http.put(`${this.url}/api/educacion/edit`, newEducation, {
      responseType: 'text',
    });
  }

  deleteEducation(id: number) {
    return this.http.delete(`${this.url}/api/educacion/${id}`, {
      responseType: 'text',
    });
  }

  // Skills Services(get,put,delete,post)

  getInfoSkills() {
    return this.http.get(`${this.url}/api/skill/all`);
  }

  postSkill(newSkill: any) {
    return this.http.post(`${this.url}/api/skill`, newSkill);
  }

  updateSkill(newSkill: any) {
    return this.http.put(`${this.url}/api/skill/edit`, newSkill, {
      responseType: 'text',
    });
  }

  deleteSkill(id: number) {
    return this.http.delete(`${this.url}/api/skill/${id}`, {
      responseType: 'text',
    });
  }
}
