import { Injectable } from '@angular/core';;
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Professor} from './professor.model'

@Injectable()
export class ProfessorService {

  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getProfessores(): Observable<Professor[]> {
      return this.http.get<Professor[]>(`${this.API_URL}/professors`);
  }
  getprofessorId(id: number): Observable<Professor[]> {
      return this.http.get<Professor[]>(`${this.API_URL}/professors/${id}`);
  }

  addprofessor(professor: Professor): Observable<any> {
      return this.http.post(`${this.API_URL}/professors`, professor);
  }
  updateprofessor(id: number, nome:string): Observable<any> {
      const professor = {id:id, nome:nome};
      return this.http.patch(`${this.API_URL}/professors/${id}`, professor)
          .map(
              f => {
                  console.log(f);
              }
          );
  }
  deleteProfessor(id: number): Observable <any> {
      return this.http.delete(`${this.API_URL}/professors/${id}`);
  }

}
