import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-user-attendance',
  standalone: true,
  imports: [],
  templateUrl: './user-attendance.component.html',
  styleUrl: './user-attendance.component.css'
})
export class UserAttendanceComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['attendance'] && changes['attendance'].currentValue ){
      console.log(this.attendance)
    }
    this.createChart()
  }

  chart: any;

  @Input()
  attendance : any;

  createChart(){

    this.chart = new Chart("MyChart2", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Present', 'Absent' ],
	       datasets: [{
    label: 'Attendance History',
    data: [this.attendance, 150 - this.attendance],
    backgroundColor: [
      'green',
      'red',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:1.3
      }

    });
  }
}
