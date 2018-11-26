import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Cliente } from './../components/interfaces/cliente.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API_URL = environment.apiURL;
  constructor(private _httpClient: HttpClient) { }

  getQuery(consulta: string) {
    const url = `${this.API_URL}${consulta}`;
    return this._httpClient.get(url);
  }
  getClientes() {
    return this.getQuery('cliente');
  }
  agregarCliente(nuevo: Cliente) {
    const body = JSON.stringify(nuevo);
    const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
    return this._httpClient.post(`${this.API_URL}cliente`, body, httpOptions);
 }

}
