import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiRequestService } from '../../../services/api-request.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FillAttendanceComponent } from '../fill-attendance.component';
import { FillAttendanceModel } from '../../../models/fillAttendance.model';
import { StudentApiService } from '../../../services/student-api.service';
import { AttendanceTableComponent } from '../attendance-table/attendance-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fill-student-attendance',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatDatepickerModule, 
    ReactiveFormsModule,
    AttendanceTableComponent,
    CommonModule
  ],
  templateUrl: './fill-student-attendance.component.html',
  styleUrl: './fill-student-attendance.component.css',
  providers : [provideNativeDateAdapter()]
})
export class FillStudentAttendanceComponent implements OnInit{
  apiRequestService = inject(ApiRequestService)
  studentService = inject(StudentApiService)
  studentAttendance:any[] = []

  constructor(private fb : FormBuilder){}
  
  attendanceGroup : FormGroup = this.fb.group({
    date : ['', Validators.required],
    role : ['student'],
    userIds : this.fb.array([''])
  })

  students: any;
  async ngOnInit(): Promise<void> {
    this.students = await this.apiRequestService.findUserByDepartment(
      'student', 
      this.apiRequestService.department
    )
  }

  fillAttendance(studentId: any) {
    this.studentAttendance.push(studentId);
    console.log(this.studentAttendance)
  }


  async searchUser(studentId : any){
    this.apiRequestService.studentAttendances = await this.apiRequestService.findAttendanceByUserId(studentId).toPromise()
    console.log(this.apiRequestService.studentAttendances);
  }

  async SubmitAttendance(){
    if(this.attendanceGroup.valid){
      this.attendanceGroup.value.userIds = this.studentAttendance
      const formValue = this.attendanceGroup.value
      const dateConvert = formValue.date.toString().substring(0, 15)
      const attendance : FillAttendanceModel = {
        date: dateConvert,
        role: formValue.role,
        userIds: formValue.userIds
      }
      console.log(attendance);
      const data = await this.apiRequestService.fillAttendance(attendance).toPromise()
      alert("Attendance filled!")
    }
    
    
  }
}
