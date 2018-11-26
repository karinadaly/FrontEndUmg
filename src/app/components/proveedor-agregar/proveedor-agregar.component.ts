import { Component, OnInit } from '@angular/core';
import { Proveedor } from './../interfaces/proveedor.interface';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: []
})
export class ProveedorAgregarComponent implements OnInit {
  proveedor: Proveedor = {
    codigoProveedor: 0,
    nit: '',
    razonSocial: '',
    paginaWeb: '',
    contactoPrincipal: ''
  };
  constructor(private _proveedorService: ProveedorService, private _router: Router) { }

  ngOnInit() {
  }

  agregar() {
    this._proveedorService.agregarProveedor(this.proveedor).subscribe((data: any) => {
      this._router.navigate(['/proveedor']);
    });
  }
}
