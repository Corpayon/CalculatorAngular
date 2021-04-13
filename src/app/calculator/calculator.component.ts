import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {text: 'History', cols: 4, rows: 5, color: 'lightblue'},
    {text: 'Rechnung', cols: 6, rows: 1, color: 'lightgreen'},
    {text: 'result', cols: 6, rows: 1, color: 'lightpink'},
    {text: 'numbers', cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'rechnenzeichen', cols: 3, rows: 3, color: '#DDBDF1'},
  ];

  ngOnInit(): void {
  }


}
