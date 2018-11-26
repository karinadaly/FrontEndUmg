import { Component, OnInit } from '@angular/core';
import { FacturaService } from './../../services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
  facturas: any[] = [];
  constructor(private _facturaService: FacturaService) {
    this._facturaService.getFacturas().subscribe((data: any) => {
      this.facturas = data;
    });
  }
  ngOnInit() {
  }

}
