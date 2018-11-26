import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  API_URL = environment.apiURL;
  constructor(private _httpClient: HttpClient) { }

  getQuery(consulta: string) {
    const url = `${this.API_URL}${consulta}`;
    return this._httpClient.get(url);
  }
  getInventarios() {
    return this.getQuery('inventario');
  }
}
