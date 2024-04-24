import { Component, inject } from '@angular/core';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { ApiRequestService } from '../../services/api-request.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StudentApiService } from '../../services/student-api.service';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admission-form',
  standalone: true,
  imports: [FormHeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './admission-form.component.html',
  styleUrl: './admission-form.component.css'
})
export class AdmissionFormComponent {
  fb = inject(FormBuilder)
  httpService = inject(StudentApiService)


  admissionGroup : FormGroup = this.fb.group({
    firstName : ['', Validators.required],
    middleName : ['', Validators.required],
    lastName : ['', Validators.required],
    birthDate : ['', Validators.required],
    gender : [''],
    address : ['', Validators.required],
    mobileNo : [''],
    department : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]]
  })

  isFormValid =this.admissionGroup.valid;

  async submitForm() {
    const form = this.admissionGroup
    
    this.isFormValid = form.invalid;
    if(form.valid){
      let formValue = form.value
      let student : Student = {
        studentName: formValue.firstName + " " + formValue.middleName + " " + formValue.lastName ,
        profilePic: '',
        department: formValue.department,
        semester: 1,
        mobileNo: formValue.mobileNo,
        address: formValue.address,
        email: formValue.email,
        password: '',
        attendance: 0,
        birthDate: formValue.birthDate,
        gender: formValue.gender
      }
      try {
        let data =await (await this.httpService.createStudent(student)).toPromise()
        alert('Admission successfull !')
        console.log(data)
        this.admissionGroup.reset()
      } catch {
        alert('Something went wrong , Try again')
        this.admissionGroup.reset()
      }
      
    }
    
    
    
  }
}
