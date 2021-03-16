import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {

  valor: number;
  juros: number;
  periodo: number;


  jurosComposto(valor, juros, periodo) {
      return valor * Math.pow((1 + (juros / 100)), periodo);
  }

  getPeriodo() {
    return this.periodo;
  }

  getJuros() {
    let list: number[] = [];
    for(let i = 1; i <= this.periodo; i++)
      list.push(this.getPeriodo());
      return list;
  }

  constructor() { }

  ngOnInit() {
  }

}