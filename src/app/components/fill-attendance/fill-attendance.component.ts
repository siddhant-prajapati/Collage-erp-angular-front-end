import { Component, OnInit, inject } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fill-attendance',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule ,MatButtonModule, RouterOutlet],
  templateUrl: './fill-attendance.component.html',
  styleUrl: './fill-attendance.component.css'
})
export class FillAttendanceComponent implements OnInit {

  apiRequestService = inject(ApiRequestService)
  studentAttendance:any[] = []
  
  students: any;
  async ngOnInit(): Promise<void> {
    this.students = (await this.apiRequestService.findUserByDepartment('student', this.apiRequestService.department)).toPromise()
  }

  fillAttendance(studentId: any) {
    this.studentAttendance.push(studentId);
    console.log(this.studentAttendance)
  }

  searchUser(studentId : any){
    
  }
}
