import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie

  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales','Download Sales', 'In-Store Sales'];
  public pieChartData:number[] = [300, 500, 100,300, 500];

  public pieChartType:string = 'pie';
  constructor() { }

  ngOnInit() {
    console.log(this.pieChartLabels)
    for (let l of this.pieChartLabels) {
      console.log (l);
    }
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
