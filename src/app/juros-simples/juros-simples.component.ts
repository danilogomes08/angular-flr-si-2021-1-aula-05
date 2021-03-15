import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {

  valor: number;
  juros: number;
  periodo: number;
  total: number;

  jurosSimples() {
    return this.total = this.valor * (1 + (this.juros / 100) * this.periodo);
  }

  constructor() { }

  ngOnInit() {
  }

}