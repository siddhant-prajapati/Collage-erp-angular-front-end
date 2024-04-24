import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormHeaderComponent } from '../../../components/form-header/form-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiRequestService } from '../../../services/api-request.service';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormHeaderComponent, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private fb : FormBuilder){}

  httpService = inject(ApiRequestService)
  router = inject(Router)

  forgetPasswordGroup : FormGroup = this.fb.group({
    email : ['', Validators.required],
    password : ['', Validators.required],
    rePassword : ['', Validators.required],
    role : ['student']
  })

  changePassword(){
    if(this.forgetPasswordGroup.valid){
      // console.log(this.forgetPasswordGroup.value);
      const formValue = this.forgetPasswordGroup.value

      this.httpService.forgetPassword(formValue.email, formValue).subscribe(res => {
        console.log(res)
        alert("Password successfully updated")
        this.router.navigate(['login'])
      })
      
    }
  }
}
