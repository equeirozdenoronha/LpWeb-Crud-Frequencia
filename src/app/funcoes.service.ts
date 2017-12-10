 import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 import {Observable} from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

 @Injectable()
 export class FuncoesService {

     API_URL = 'http://localhost:3000';
     constructor(private http: HttpClient) {
     }
     getFuncoes(): Observable <any[]> {
         return this.http.get<any[]>(`${this.API_URL}/funcoes`);
     }

     getFuncoesId(id: number): Observable <any> {
         return this.http.get(`${this.API_URL}/funcoes/${id}`);
     }
     addFuncoes(nome: string): Observable <any> {
         const funcoes = {nome: nome};
         return this.http.post(`${this.API_URL}/funcoes`, funcoes)
             .map(
                 f => {
                     console.log(f);
                 }
             );
     }
     updateFuncoes(id: number, nome: string): Observable <any> {
         const funcoes = {id: id, nome: nome};
         return this.http.patch(`${this.API_URL}/funcoes/${id}`, funcoes)
             .map(
                 f => {
                     console.log(f);
                 }
             );
     }
     deleteFuncoes(id: number): Observable<any> {
         return this.http.delete(`${this.API_URL}/funcoes/${id}`);
     }
 }
