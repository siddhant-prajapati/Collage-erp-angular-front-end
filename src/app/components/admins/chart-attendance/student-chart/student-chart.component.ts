import { Component, OnInit, inject } from '@angular/core';
import Chart from 'chart.js/auto';
import { StudentApiService } from '../../../../services/student-api.service';

@Component({
  selector: 'app-student-chart',
  standalone: true,
  imports: [],
  templateUrl: './student-chart.component.html',
  styleUrl: './student-chart.component.css'
})
export class StudentChartComponent implements OnInit {
  apiRequestService = inject(StudentApiService)

  async ngOnInit(): Promise<void> {
    (await this.apiRequestService.findAllStudentsData()).subscribe(res => {
      this.apiRequestService.studentList = res
    })
    this.createChart()
  }

  createChart() {
  
    this.chart = new Chart("MyChart", {
      
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.apiRequestService.studentList.map((student: { studentName: any; }) => student.studentName), 
         datasets: [
          // {
          //   label: "Sales",
          //   data: ['467','576', '572', '79', '92',
          //        '574', '573', '576'],
          //   backgroundColor: 'blue'
          // },
          {
            label: "Attendance",
            data: this.apiRequestService.studentList.map((student: { attendance: any; }) => student.attendance),
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


  public chart:any;

}
