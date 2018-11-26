import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URL = environment.apiURL;
  constructor(private _httpClient: HttpClient) {}

    getQuery(consulta: string) {
      const url = `${this.API_URL}${consulta}`;
      return this._httpClient.get(url);
    }

    getProductos() {
      return this.getQuery('producto');
    }
}

