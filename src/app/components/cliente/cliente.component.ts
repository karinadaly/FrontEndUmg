import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  constructor(private _clienteServices: ClienteService) {
    this._clienteServices.getClientes().subscribe((data: any) => {
      this.clientes = data;
    });
  }

  ngOnInit() {
  }

}
