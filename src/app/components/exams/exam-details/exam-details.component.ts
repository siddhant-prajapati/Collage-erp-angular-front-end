import { Component, inject } from '@angular/core';
import { ExamApiService } from '../../../services/exam-api.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-exam-details',
  standalone: true,
  imports: [
    JsonPipe, 
    MatButton,
    MatInputModule, 
    MatFormFieldModule,
    CommonModule 
  ],
  templateUrl: './exam-details.component.html',
  styleUrl: './exam-details.component.css'
})
export class ExamDetailsComponent {
  httpService = inject(ExamApiService)

  showElement : boolean = false;
  toggleInput(exam : any){
    this.httpService.updatebleExam = exam
    this.showElement = !this.showElement
  }

  async updateMarks(mark : any){
    if(mark){
      const data = await this.httpService.updateExamMark(this.httpService.updatebleExam.examId, mark).toPromise()
      console.log(data);
      alert("data updated successfully")
      this.showElement = !this.showElement
    } else {
      alert("Please enter mark")
    }
    
  }

  async deleteData(id :any){
    try{
      await this.httpService.deleteExamDataById(id).toPromise()
      alert("Exam deleted Successfully")
    } catch(e){
      console.log(e);
    }
  }
}
