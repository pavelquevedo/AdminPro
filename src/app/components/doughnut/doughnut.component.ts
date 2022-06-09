import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

    @Input() public title: string = 'No title';

    @Input('labels')
    public doughnutChartLabels: string[] = ['Download Sales','In-Store Sales','Mail-Order Sales'];

    @Input()
    public data: number[] = [350, 450, 100];
   
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.data, 
          backgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBorderColor:['#000000','#000000','#00000003']
        },
      ]
    };

    public doughnutChartType: ChartType = 'doughnut';
    
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    };
  } 

}
