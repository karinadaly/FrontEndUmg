import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Proveedor} from './../components/interfaces/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  API_URL = environment.apiURL;
  constructor(private _httpClient: HttpClient) { }

  getQuery(consulta: string) {
    const url = `${this.API_URL}${consulta}`;
    return this._httpClient.get(url);
  }
  getProveedores() {
    return this.getQuery('proveedor');
  }
  agregarProveedor(nuevo: Proveedor) {
    const body = JSON.stringify(nuevo);
    const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
    return this._httpClient.post(`${this.API_URL}proveedor`, body, httpOptions);
 }
}
