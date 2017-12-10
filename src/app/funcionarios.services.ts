import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FuncionariosServices {
    API_URL = 'http://localhost:3000';
    constructor(private http: HttpClient) {
    }

    getFuncionarios(): Observable<any[]> {
        return this.http.get<any[]>(`${this.API_URL}/funcionarios`);
    }
    getFuncionarioId(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/funcionarios/${id}`);
    }

    addFuncionario(funcionario: any): Observable<any> {
        return this.http.post(`${this.API_URL}/funcionarios`, funcionario);
    }
    updateFuncionario(id: number, tipo: string, cargoId: number, pessoadId: number, funcoes: any): Observable<any> {
        const funcioario = {id: id, tipo: tipo, cargoId: cargoId,
            pessoadId: pessoadId, funcoes: funcoes};
        return this.http.patch(`${this.API_URL}/funcionarios/${id}`, funcioario)
            .map(
                f => {
                    console.log(f);
                }
            );
    }
    deleteFucionario(id: number): Observable <any> {
        return this.http.delete(`${this.API_URL}/funcionarios/${id}`);
    }
}
