import { Component, Input, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-staff-attendance-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './staff-attendance-table.component.html',
  styleUrl: './staff-attendance-table.component.css'
})
export class StaffAttendanceTableComponent {
  httpService = inject(ApiRequestService)

  @Input()
  userId : any;

  deleteAttendance(attendanceId : any){
    this.httpService.deleteAttendanceById(attendanceId).subscribe(res => {
      console.log(res);
      alert("Attendance successfully deleted")
    })
  }
}
