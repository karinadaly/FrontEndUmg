import { Component, OnInit } from '@angular/core';
import { TipoempaqueService } from './../../services/tipoempaque.service';

@Component({
  selector: 'app-tipoempaque',
  templateUrl: './tipoempaque.component.html'
})
export class TipoempaqueComponent implements OnInit {
  tipoempaques: any[] = [];
  constructor(private _tipoempaquesService: TipoempaqueService) {
    this._tipoempaquesService.getTipoEmpaque().subscribe((data: any) => {
      this.tipoempaques = data;
    });

  }

  ngOnInit() {
  }

}
