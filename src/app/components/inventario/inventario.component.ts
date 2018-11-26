import { Component, OnInit } from '@angular/core';
import {InventarioService  } from './../../services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {
  inventarios: any[] = [];
  constructor(private _inventarioService: InventarioService) {
    this._inventarioService.getInventarios().subscribe((data: any) => {
      this.inventarios = data;
    });
  }

  ngOnInit() {
  }

}
