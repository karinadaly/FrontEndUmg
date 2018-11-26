import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { TipoEmpaque } from './../components/interfaces/tipoempaque.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoempaqueService {
  API_URL = environment.apiURL;

  constructor(private _httpClient: HttpClient) { }
  getQuery(consulta: string) {
    const url = `${this.API_URL}${consulta}`;
    return this._httpClient.get(url);
  }
  getTipoEmpaque() {
    return this.getQuery('tipoempaque');
  }
  agregarTipoEmpaque(nuevo: TipoEmpaque) {
    const body = JSON.stringify(nuevo);
    const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
    return this._httpClient.post(`${this.API_URL}tipoempaque`, body, httpOptions);
 }


}
