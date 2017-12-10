import {Injectable} from '@angular/core';
import {Turma} from './turma.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TurmasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getTurmas(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.API_URL}/turmas`);
  }

  getTurma(id: number): Observable<Turma> {
    return this.http.get<Turma>(this.API_URL + '/turmas/' + id);
  }

  save(codigo: string, disciplinaId: number, ano: number) {
    const turma = {'codigo': codigo, 'disciplinaId': disciplinaId, ano: ano};
    return this.http.post(this.API_URL + '/turmas', turma);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/turmas/' + id);
  }
}
