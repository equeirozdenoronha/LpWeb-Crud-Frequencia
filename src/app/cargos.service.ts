import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class CargosService {
    API_URL = 'http://localhost:3000';
    constructor(private http: HttpClient) {
    }

    getCargos(): Observable<any[]> {
        return this.http.get<any[]>(`${this.API_URL}/cargos`);
    }
    getCargoId(id: number): Observable<any> {
        return this.http.get<any>(`${this.API_URL}/cargos/${id}`);
    }
    addCargo(nome: String): Observable<any> {
        const cargo = {nome: nome};
        return this.http.post(`${this.API_URL}/cargos`, cargo);
    }
     updateCargo( id: number, nome: String): Observable<any> {
        const cargo = {id: id, nome: nome};
        return this.http.patch(`${this.API_URL}/cargos/${id}`, cargo);
     }
     deleteCargo(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/cargos/${id}`);
     }

}
