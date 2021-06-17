import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Frequencia} from './frequencia.model'
import 'rxjs/add/operator/map';

@Injectable()
export class FrequenciaService {

  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getFrequencias(): Observable<Frequencia[]> {
      return this.http.get<Frequencia[]>(`${this.API_URL}/frequencias?_expand=turma&_expand=aluno&_expand=disciplina&_expand=professor&_expand=horario`);
  }
  getFrequenciaId(id: number): Observable<Frequencia[]> {
      return this.http.get<Frequencia[]>(`${this.API_URL}/frequencias/${id}`);
  }

  addFrequencia(frequencia: Frequencia): Observable<any> {
      return this.http.post(`${this.API_URL}/frequencias`, frequencia);
  }
  updatefrequencia(id: number, turmaId: number, alunoId: number, disciplinaId: number, professorId: number,
     horarioId:number, data: string, status:string): Observable<any> {
      const frequencia = {id: id, turmaId: turmaId, alunoId: alunoId, disciplinaId: disciplinaId, 
        professorId: professorId, horarioId:horarioId, data: data, status:status};
      return this.http.patch(`${this.API_URL}/frequencias/${id}`, frequencia)
          .map(
              f => {
                  console.log(f);
              }
          );
  }
  deleteFrequencia(id: number): Observable <any> {
      return this.http.delete(`${this.API_URL}/frequencias/${id}`);
  }

}
