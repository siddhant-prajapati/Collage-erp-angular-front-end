import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FillAttendanceModel } from '../../../models/fillAttendance.model';
import { AttendanceTableComponent } from '../attendance-table/attendance-table.component';
import { StaffAttendanceTableComponent } from '../staff-attendance-table/staff-attendance-table.component';
import { AttendanceApiService } from '../../../services/attendance-api.service';

@Component({
  selector: 'app-fill-staff-attendance',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule ,
    MatButtonModule, 
    MatDatepickerModule, 
    ReactiveFormsModule,
    AttendanceTableComponent,
    StaffAttendanceTableComponent
  ], 
  templateUrl: './fill-staff-attendance.component.html',
  styleUrl: './fill-staff-attendance.component.css',
  providers : [provideNativeDateAdapter()]
})
export class FillStaffAttendanceComponent implements OnInit{
  
  apiRequestService = inject(ApiRequestService)
  attendanceServie = inject(AttendanceApiService)
  staffAttendance:any[] = []

  constructor(private fb : FormBuilder){}
  
  staffs: any;
  async ngOnInit(): Promise<void> {
    this.staffs = (await this.apiRequestService.findUserByDepartment(
      'staff', 
      this.apiRequestService.department
    ))
  }

  fillAttendance(staffId: any) {
    this.staffAttendance.push(staffId);
    console.log(this.staffAttendance)
  }

  async searchUser(staffId : any){
    // try {
    //   const staff = await this.apiRequestService.findStaffById(staffId).toPromise();
    //   this.staffs = [staff]
    // } catch(e){
    //   alert('Can not find staff, Enter valid staffId');
    // }
    this.attendanceServie.staffAttendances = await this.attendanceServie.findAttendanceByUserId(staffId).toPromise()
    console.log(this.attendanceServie.staffAttendances);
  }

  attendanceGroup : FormGroup = this.fb.group({
    date : ['', Validators.required],
    role : ['staff'],
    userIds : this.fb.array([''])
  })

  async SubmitAttendance(){
    if(this.attendanceGroup.valid){
      this.attendanceGroup.value.userIds = this.staffAttendance
      const formValue = this.attendanceGroup.value
      const dateConvert = formValue.date.toString().substring(0, 15)
      const attendance : FillAttendanceModel = {
        date: dateConvert,
        role: formValue.role,
        userIds: formValue.userIds
      }
      console.log(attendance);
      const data = await this.attendanceServie.fillAttendance(attendance).toPromise()
      alert("Attendance filled!")
    }
  }

}
