import { Component, OnInit, inject } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiRequestService } from '../../../../services/api-request.service';
import { StaffApiService } from '../../../../services/staff-api.service';

@Component({
  selector: 'app-staff-chart',
  standalone: true,
  imports: [],
  templateUrl: './staff-chart.component.html',
  styleUrl: './staff-chart.component.css'
})
export class StaffChartComponent implements OnInit {
  apiRequestService = inject(StaffApiService)
  async ngOnInit(): Promise<void> {
    (await this.apiRequestService.findAllStaffData()).subscribe(res => {
      this.apiRequestService.staffList = res
    })
    this.createChart()
  }

  

  createChart() {
  
    this.chart = new Chart("MyChart", {
      
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.apiRequestService.staffList.map((staff: { staffName: any; }) => staff.staffName), 
         datasets: [
          {
            label: "Attendance",
            data: this.apiRequestService.staffList.map((staff: { attendance: any; }) => staff.attendance),
            backgroundColor: 'skyblue'
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
