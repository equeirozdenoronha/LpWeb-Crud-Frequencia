import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Aluno} from './aluno.model'

@Injectable()
export class AlunoService {

  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getAlunos(): Observable<Aluno[]> {
      return this.http.get<Aluno[]>(`${this.API_URL}/alunos`);
  }
  getAlunoId(id: number): Observable<Aluno[]> {
      return this.http.get<Aluno[]>(`${this.API_URL}/alunos/${id}`);
  }

  addAluno(aluno: Aluno): Observable<any[]> {
      return this.http.post<any[]>(`${this.API_URL}/alunos`, aluno);
  }
  updateAluno(id: number, nome:string): Observable<any> {
      const aluno = {id:id, nome:nome};
      return this.http.patch(`${this.API_URL}/alunos/${id}`, aluno)
          .map(
              f => {
                  console.log(f);
              }
          );
  }
  deleteAluno(id: number): Observable <any> {
      return this.http.delete(`${this.API_URL}/alunos/${id}`);
  }

}
