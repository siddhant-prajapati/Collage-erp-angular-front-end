import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormHeaderComponent } from '../../form-header/form-header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiRequestService } from '../../../services/api-request.service';
import { Student } from '../../../models/student.model';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-update-student-form',
  standalone: true,
  imports: [FormHeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update-student-form.component.html',
  styleUrl: './update-student-form.component.css'
})
export class UpdateStudentFormComponent {

  

  fb = inject(FormBuilder)
  httpService = inject(StudentApiService)

  studentUpdateGroup : FormGroup = this.fb.group({
    studentName : [this.httpService.studentProfile.studentName, Validators.required],
    birthDate : [this.httpService.studentProfile.birthDate, Validators.required],
    password : [''],
    address : [this.httpService.studentProfile.address, Validators.required],
    mobileNo : [this.httpService.studentProfile.mobileNo],
    email : [this.httpService.studentProfile.email , [Validators.required, Validators.email]]
  })

  isFormValid =this.studentUpdateGroup.valid;

  async submitForm() {
    const form = this.studentUpdateGroup
    this.isFormValid = form.invalid;
    if(form.valid){
      let formValue = form.value
      let student : Student = {
        studentName: formValue.studentName,
        profilePic: this.httpService.studentProfile.profilePic,
        department: this.httpService.studentProfile.department,
        semester: this.httpService.studentProfile.semester,
        mobileNo: formValue.mobileNo,
        address: formValue.address,
        email: formValue.email,
        password: formValue.password,
        attendance: this.httpService.studentProfile.attendance,
        birthDate: formValue.birthDate,
        gender: this.httpService.studentProfile.gender
      }
      try {
        const id :any = sessionStorage.getItem("userId")
        let data = this.httpService.updateStudent(id , student).subscribe(
          res => {
            console.log(res)
          },
          error => {
            console.error(error)
          }
        )
        alert('Admission successfull !')
        console.log(data)
        this.studentUpdateGroup.reset()
      } catch {
        alert('Something went wrong , Try again')
        this.studentUpdateGroup.reset()
      }
    }
  }
}
