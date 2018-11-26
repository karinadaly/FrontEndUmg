import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
  categorias: any[] = [];
  constructor(private _categoriaService: CategoriaService) {
    this._categoriaService.getCategorias().subscribe((data: any) => {
      this.categorias = data;
    });
  }

  ngOnInit() {
  }

}
