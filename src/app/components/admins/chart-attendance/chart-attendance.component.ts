import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { StudentChartComponent } from './student-chart/student-chart.component';
import { StaffChartComponent } from './staff-chart/staff-chart.component';
import { ApiRequestService } from '../../../services/api-request.service';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-chart-attendance',
  standalone: true,
  imports: [
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatRadioModule, 
    MatDividerModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    CommonModule,
    StudentChartComponent,
    StaffChartComponent
  ],
  templateUrl: './chart-attendance.component.html',
  styleUrl: './chart-attendance.component.css'
})
export class ChartAttendanceComponent {
  staffService = inject(ApiRequestService)
  studentService = inject(StudentApiService)

  constructor(private fb : FormBuilder){}
  attendanceChartGroup : FormGroup = this.fb.group({
    department : [''],
    role : ['',[Validators.required]]
  })
  showRole : string = this.attendanceChartGroup.value.role;

  showAttendanceDetails(){
    const department = this.attendanceChartGroup.value.department
    if(this.attendanceChartGroup.value.role === 'student' && this.attendanceChartGroup.value.department !== ''){
      this.studentService.findStudentByDepartment(department).subscribe( res => {
        this.studentService.studentList = res
      })
    } else if(this.attendanceChartGroup.value.role === 'staff' && this.attendanceChartGroup.value.department !== ''){
      this.staffService.staffList = this.staffService.findUserByDepartment('staff', department) 
    }
     else{
      alert('Role is required')
    }
  }
}
