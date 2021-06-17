import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PessoasService {
    API_URL = 'http://localhost:3000';
    constructor(private http: HttpClient) {
    }

    getPessoas(): Observable<any[]> {
        return this.http.get<any[]>(`${this.API_URL}/pessoas`);
    }
    getPessoasId(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/pessoas/${id}`);
    }

    addPssoa(nome: string, dataNascimento: string, CPF: string ): Observable<any> {
        const pessoa = {nome: nome, dataNascimento: dataNascimento, CPF: CPF };
        return this.http.post(`${this.API_URL}/pessoas`, pessoa)
            .map(retorno => {
                console.log(retorno);
            });
    }
    updatePessoa(id: number, nome: string, dataNascimento: string, CPF: string ): Observable <any> {
        const pessoa = {id: id, nome: nome, dataNascimento: dataNascimento, CPF: CPF };
        return this.http.patch(`${this.API_URL}/pessoa/${id}`, pessoa)
            .map(retorno => {
                console.log(retorno);
            });
    }

    deletePessoa(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/pessoa/${id}`)
            .map(retorno => {
                console.log(retorno);
            });
    }
}
