import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ApiRequestService } from '../../../../services/api-request.service';
import {MatButtonModule} from '@angular/material/button';
import { UpdateStudentComponent } from '../update-student/update-student.component';
import { StudentApiService } from '../../../../services/student-api.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [MatButtonModule, UpdateStudentComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.httpService.student)
  }
  httpService = inject(StudentApiService)

  showEle:boolean = false;
  toggleEle(id : number){
    this.showEle = !this.showEle
    this.httpService.studentId = id;
    this.httpService.operation = 'update'
  }

  deleteStudent(id : any){
    this.httpService.deleteStudentById(id).subscribe(res => {
      console.log(res);
      alert("Student successfully deleted")
    })
  }

  defaultImage = '../../../../assets/images/default-user.jpg'
  handleImage(ele : any){
    ele.target.src = this.defaultImage
  }
}
