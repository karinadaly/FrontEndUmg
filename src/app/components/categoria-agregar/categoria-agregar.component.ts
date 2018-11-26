import { Component, OnInit } from '@angular/core';
import { Categoria } from './../interfaces/categoria.interface';
import {NgForm} from '@angular/forms';
import { CategoriaService } from './../../services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-agregar',
  templateUrl: './categoria-agregar.component.html',
  styles: []
})
export class CategoriaAgregarComponent implements OnInit {

  categoria: Categoria = {
    codigoCategoria: 0,
    descripcion: ''
  };
  constructor(private _categoriaService: CategoriaService, private _router: Router) { }

  ngOnInit() {
  }

  agregar() {
    this._categoriaService.agregarCategoria(this.categoria).subscribe((data: any) => {
      this._router.navigate(['/categorias']);
    });
  }
}
