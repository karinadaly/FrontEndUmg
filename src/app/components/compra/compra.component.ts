import { Component, OnInit } from '@angular/core';
import { CompraService } from './../../services/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {
  compras: any[] = [];
  constructor(private _compraService: CompraService) {
    this._compraService.getCompras().subscribe((data: any) => {
      this.compras = data;
    });
  }

  ngOnInit() {
  }

}
