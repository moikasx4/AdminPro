import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Ventas Semana', 'Ventas Mes', 'Ventas Año'];
  public data = [  [350, 450, 100]  ];
}
