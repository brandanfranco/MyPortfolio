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
    return this.http.get('http://localhost:8080/api/proyecto/all');
  }
}
