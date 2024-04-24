import { Component, EventEmitter, Output, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ApiRequestService } from '../../../../services/api-request.service';
import { Student } from '../../../../models/student.model';
import { StudentApiService } from '../../../../services/student-api.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatRadioModule, 
    MatDividerModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  httpService = inject(StudentApiService)

  // @Output()
  // newStudentEmit = new EventEmitter<FormGroup>();

  constructor(private fb : FormBuilder){}

  studentGroup : FormGroup = this.fb.group({
    studentName : ['', [Validators.required]],
    department : [this.httpService.department, [Validators.required]],
    semester : ['', [Validators.required]],
    email : ['',[Validators.required, Validators.email]],
    mobileNo : ['', Validators.required],
    address : [''],
    password : [''],
    attendance : [''],
    gender : [''],
    birthDate : [''],
    isValid : ['',[Validators.required]]
  })

  //formValid = this.studentGroup.valid
  async submitForm(){
    
    if(this.studentGroup.valid){
      let formData = this.studentGroup.value
      const student : Student = {
        studentName: formData.studentName,
        profilePic: '',
        department: formData.department,
        semester: formData.semester,
        mobileNo: formData.mobileNo,
        address: formData.address,
        email: formData.email,
        password: formData.password,
        attendance: formData.attendance,
        birthDate: formData.birthDate,
        gender: formData.gender
      }
      try {
        if(this.httpService.operation === 'add'){
          const data = (await this.httpService.createStudent(student)).toPromise()
          alert("Successfully created")
        } else if(this.httpService.operation === 'update'){
          const data = await this.httpService.updateStudent(this.httpService.studentId, student).toPromise()
          alert('Successfully updated')
        } else {
          alert('invalid operation')
        }
        
        this.studentGroup.reset()
      } catch (e){
        alert(e)
      }
    }

  }

}
