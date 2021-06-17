import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Horario} from './horario.model'

@Injectable()
export class HorarioService {

  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getHorarios(): Observable<Horario[]> {
      return this.http.get<Horario[]>(`${this.API_URL}/horarios`);
  }
  getHorarioId(id: number): Observable<Horario[]> {
      return this.http.get<Horario[]>(`${this.API_URL}/horarios/${id}`);
  }

  addHorario(horario: Horario): Observable<any> {
      return this.http.post(`${this.API_URL}/horarios`, horario);
  }
  updateHorario(id: number, nome:string): Observable<any> {
      const horario = {id:id, nome:nome};
      return this.http.patch(`${this.API_URL}/horarios/${id}`, horario)
          .map(
              f => {
                  console.log(f);
              }
          );
  }
  deleteHorario(id: number): Observable <any> {
      return this.http.delete(`${this.API_URL}/horarios/${id}`);
  }

}
