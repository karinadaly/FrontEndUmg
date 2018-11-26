import { Component, OnInit } from '@angular/core';
import {ClienteComponent  } from './../cliente/cliente.component';
import { NgForm} from '@angular/forms';
import { ClienteService } from './../../services/cliente.service';
import { Router,  } from '@angular/router';
import { Cliente } from '../interfaces/cliente.interfaces';


@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styles: []
})
export class ClienteAgregarComponent implements OnInit {
  cliente: Cliente = {
    codigocliente: 0,
    nit: '',
    dpi: '',
    nombre: ''
  };
  constructor( private _clienteService: ClienteService, private _router: Router ) { }

  ngOnInit() {
  }

  agregar() {
    this._clienteService.agregarCliente(this.cliente).subscribe((data: any) => {
      this._router.navigate(['/cliente']);
    });
  }
}
