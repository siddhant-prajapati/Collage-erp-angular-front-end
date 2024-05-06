import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SubmitExam } from '../../../models/submitExam.model';
import { ExamApiService } from '../../../services/exam-api.service';
import { ButtonStyleDirective } from '../../../directives/button-style.directive';

@Component({
  selector: 'app-submit-exam-form',
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
    FormsModule,
    ButtonStyleDirective
  ],
  templateUrl: './submit-exam-form.component.html',
  styleUrl: './submit-exam-form.component.css'
})
export class SubmitExamFormComponent {
  constructor(private fb : FormBuilder){}

  httpService = inject(ExamApiService)
  examGroup : FormGroup = this.fb.group({
    studentId : ['', [Validators.required]],
    sem : ['', [Validators.required]],
    department : ['', [Validators.required]],
    exams : this.fb.array([
      this.fb.group({
        date : ['',[Validators.required]],
        mark : ['',[Validators.required]],
        subject : ['',[Validators.required]],
      })
    ])
  })

  get exams(){
    return this.examGroup.get('exams') as FormArray;
  }

  addExams(){
    this.exams.push(
      this.fb.group({
        date : [''],
        mark : [''],
        subject : [''],
      })
    )
  }

  deleteMarks(i : any){
    this.exams.removeAt(i)
  }

  isFormValid : boolean = false;

  
  subjects : string[] = [];
  marks : number[] = [];
  dates : string[] = [];

  async onSubmit(){
    this.isFormValid = true;  
    if(this.examGroup.valid){
      const formValue = this.examGroup.value;
      for(let exam of formValue.exams){
        this.subjects.push(exam.subject)
        this.marks.push(exam.mark)
        this.dates.push(exam.date)
      }
      
      const submitExam :SubmitExam ={
        dates: this.dates,
        subjects: this.subjects,
        marks: this.marks,
        sem: formValue.sem,
        department: formValue.department,
        studentId: formValue.studentId
      }
      console.log(submitExam);
      
      const data = await this.httpService.submitExam(submitExam).toPromise()
      console.log(data);
      alert('Data add successfully')
    } else {
      alert('Enter valid Data')
    }
    
  }
}