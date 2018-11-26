import { Component, OnInit } from '@angular/core';
import { ProveedorService } from './../../services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html'
})
export class ProveedorComponent implements OnInit {
  proveedores: any[] = [];
  constructor(private _proveedorServices: ProveedorService ) {
    this._proveedorServices.getProveedores().subscribe((data: any) => {
      this.proveedores = data;
    });
  }

  ngOnInit() {
  }

}
