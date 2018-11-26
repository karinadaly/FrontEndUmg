import { Component, OnInit } from '@angular/core';
import {TipoEmpaque  } from './../interfaces/tipoempaque.interface';
import {NgForm  } from '@angular/forms';
import {TipoempaqueService} from './../../services/tipoempaque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipoempaque-agregar',
  templateUrl: './tipoempaque-agregar.component.html',
  styleUrls: []
})
export class TipoempaqueAgregarComponent implements OnInit {
  tipoempaque: TipoEmpaque = {
    codigoTipoEmpaque: 0,
    descripcion: ''
  };
  constructor(private _tipoempaqueService: TipoempaqueService, private _router: Router) { }

  ngOnInit() {
  }

  agregar() {
    this._tipoempaqueService.agregarTipoEmpaque(this.tipoempaque).subscribe((data: any) => {
      this._router.navigate(['/tipoempaque']);
    });
  }

}
