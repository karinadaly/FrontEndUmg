import { Component, OnInit } from '@angular/core';
import {ProductoService  } from './../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {
  productos: any[] = [];
  constructor(private _productoService: ProductoService) {
    this._productoService.getProductos().subscribe((data: any) => {
      this.productos = data;
    });
  }

  ngOnInit() {
  }

}
