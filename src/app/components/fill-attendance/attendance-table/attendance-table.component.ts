import { Component, Input, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AttendanceApiService } from '../../../services/attendance-api.service';

@Component({
  selector: 'app-attendance-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-table.component.html',
  styleUrl: './attendance-table.component.css'
})
export class AttendanceTableComponent {
  httpService = inject(AttendanceApiService)
  router = inject(Router)
  @Input()
  userId : any;

  @Input()
  staffId : any;

  role = sessionStorage.getItem("role")

  deleteAttendance(attendanceId : any){
    this.httpService.deleteAttendanceById(attendanceId).subscribe(res => {
      console.log(res);
      alert("Attendance successfully deleted")
    })
  }
}
