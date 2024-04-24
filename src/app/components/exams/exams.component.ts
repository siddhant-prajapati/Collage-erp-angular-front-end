import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ExamApiService } from '../../services/exam-api.service';
import { SubmitExamFormComponent } from './submit-exam-form/submit-exam-form.component';
import { CommonModule } from '@angular/common';
import { ExamDetailsComponent } from './exam-details/exam-details.component';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    SubmitExamFormComponent,
    CommonModule,
    ExamDetailsComponent
  ],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {

  httpService = inject(ExamApiService)

  showElement:boolean = false

  toggleForm(){
    this.showElement= !this.showElement
  }

  //studentBySem : Array<any> = []

  async findExamMarks(studentId :any){
    try{
      this.httpService.studentExams = await this.httpService.findExamByStudentId(studentId).toPromise()
      console.log(this.httpService.studentExams);

      const groupedBySem = this.httpService.studentExams.reduce((acc, obj) => {
        const { sem, ...rest } = obj;
        acc[sem] = acc[sem] || [];
        acc[sem].push(rest);
        return acc;
      }, {});

      this.httpService.studentBySem = Object.values(groupedBySem)
      console.log(this.httpService.studentBySem);
      
      for(let student of this.httpService.studentBySem){
        console.log("Student Id" + student[0].studentId);
        console.log("Student Sem" + student);
        
        
      }
      

    } catch(e){
      console.log(e);
    }
  }



}
