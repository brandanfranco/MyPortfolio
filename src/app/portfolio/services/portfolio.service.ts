import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getInfoPersonal() {
    return this.http.get('http://localhost:8080/api/person/all');
  }

  // Proyects Services(get,put,delete,post)

  getInfoProyect() {
    return this.http.get('http://localhost:8080/api/proyecto/all');
  }

  postProject(nuevoProject: any) {
    return this.http.post('http://localhost:8080/api/proyecto', nuevoProject);
  }

  UpdateProject(nuevoProject: any) {
    return this.http.put(
      `http://localhost:8080/api/proyecto/edit`,
      nuevoProject,
      {
        responseType: 'text',
      }
    );
  }

  deleteProyect(id: number) {
    return this.http.delete(`http://localhost:8080/api/proyecto/${id}`, {
      responseType: 'text',
    });
  }

  // // Experiences Services(get,put,delete,post)

  getInfoExperience() {
    return this.http.get('http://localhost:8080/api/experiencia/all');
  }

  postExperience(newExperience: any) {
    return this.http.post(
      'http://localhost:8080/api/experiencia',
      newExperience
    );
  }

  updateExperience(newExperience: any) {
    return this.http.put(
      `http://localhost:8080/api/experiencia/edit`,
      newExperience,
      {
        responseType: 'text',
      }
    );
  }

  deleteExperience(id: number) {
    return this.http.delete(`http://localhost:8080/api/experiencia/${id}`, {
      responseType: 'text',
    });
  }

  // // Educations Services(get,put,delete,post)

  getInfoEducations() {
    return this.http.get('http://localhost:8080/api/educacion/all');
  }

  postEducation(newEducation: any) {
    return this.http.post('http://localhost:8080/api/educacion', newEducation);
  }

  updateEducation(newEducation: any) {
    return this.http.put(
      `http://localhost:8080/api/educacion/edit`,
      newEducation,
      {
        responseType: 'text',
      }
    );
  }

  deleteEducation(id: number) {
    return this.http.delete(`http://localhost:8080/api/educacion/${id}`, {
      responseType: 'text',
    });
  }

  // Skills Services(get,put,delete,post)

  getInfoSkills() {
    return this.http.get('http://localhost:8080/api/skill/all');
  }

  postSkill(newSkill: any) {
    return this.http.post('http://localhost:8080/api/skill', newSkill);
  }

  updateSkill(newSkill: any) {
    return this.http.put(`http://localhost:8080/api/skill/edit`, newSkill, {
      responseType: 'text',
    });
  }

  deleteSkill(id: number) {
    return this.http.delete(`http://localhost:8080/api/skill/${id}`, {
      responseType: 'text',
    });
  }
}
