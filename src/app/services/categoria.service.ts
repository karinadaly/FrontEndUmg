import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Categoria } from './../components/interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  API_URL = environment.apiURL;
  constructor(private _httpClient: HttpClient) { }

  getQuery(consulta: string) {
    const url = `${this.API_URL}${consulta}`;
    return this._httpClient.get(url);
  }
  getCategorias() {
    return this.getQuery('categoria');
  }
  agregarCategoria(nuevo: Categoria) {
     const body = JSON.stringify(nuevo);
     const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
     return this._httpClient.post(`${this.API_URL}categoria`, body, httpOptions);
  }
}
