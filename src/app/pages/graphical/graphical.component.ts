import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphical',
  templateUrl: './graphical.component.html',
  styles: [
  ]
})
export class GraphicalComponent implements OnInit {

  public data1: number[] = [100, 200, 300];
  public chartLabels1: string[] = ['string2','string1','string3'];
 
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit(): void {
  }

}
