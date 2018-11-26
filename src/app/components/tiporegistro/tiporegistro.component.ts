import { Component, OnInit } from '@angular/core';
import { TiporegistroService } from './../../services/tiporegistro.service';

@Component({
  selector: 'app-tiporegistro',
  templateUrl: './tiporegistro.component.html'
})
export class TiporegistroComponent implements OnInit {
  tiporegistros: any[] = [];
  constructor(private _tiporegistroService: TiporegistroService) {
    this._tiporegistroService.getTipoResgistro().subscribe((data: any) => {
      this.tiporegistros = data;
    });
  }

  ngOnInit() {
  }

}
