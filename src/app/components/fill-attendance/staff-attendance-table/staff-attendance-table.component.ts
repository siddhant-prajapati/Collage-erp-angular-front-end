import { Component, Input, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { JsonPipe } from '@angular/common';
import { AttendanceApiService } from '../../../services/attendance-api.service';

@Component({
  selector: 'app-staff-attendance-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './staff-attendance-table.component.html',
  styleUrl: './staff-attendance-table.component.css'
})
export class StaffAttendanceTableComponent {
  httpService = inject(AttendanceApiService)

  @Input()
  userId : any;

  role = sessionStorage.getItem("role")

  deleteAttendance(attendanceId : any){
    this.httpService.deleteAttendanceById(attendanceId).subscribe(res => {
      console.log(res);
      alert("Attendance successfully deleted")
    })
  }
}
