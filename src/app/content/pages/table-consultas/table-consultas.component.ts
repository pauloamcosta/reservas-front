import { Component, OnInit } from '@angular/core';
interface Checkins {
  nome: string;
  documento: string;
  valorGasto: string;
}

const CHECKINS: Checkins[] = [
  {
    nome: 'Eduardo Silva',
    documento: '34234234',
    valorGasto: '2500,00'
  },
  {
    nome: 'Larissa Silva',
    documento: '32323234',
    valorGasto: '1000,00'
  },
  {
    nome: 'Jose Silva',
    documento: '34234333',
    valorGasto: '2000,00'
  },
  {
    nome: 'Paulo Melo',
    documento: '34234445',
    valorGasto: '120,00'
  },
  {
    nome: 'João Costa',
    documento: '02002344',
    valorGasto: '240,00'
  },
  {
    nome: 'Mario Melo',
    documento: '232311414',
    valorGasto: '500,00'
  },
 
];
@Component({
  selector: 'app-table-consultas',
  templateUrl: './table-consultas.component.html',
  styleUrls: ['./table-consultas.component.scss']
})
export class TableConsultasComponent implements OnInit {

  constructor() { }
  checkins = CHECKINS;

  ngOnInit() {
  }

}
