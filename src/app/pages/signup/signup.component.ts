import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { Router } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { CommonModule } from '@angular/common';
import { SignUp } from '../../models/signup.model';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, FormHeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private fb : FormBuilder){}

  httpService =inject(AuthApiService)
  router = inject(Router)

  signUpGroup : FormGroup = this.fb.group({
    username : ['', [Validators.required]],
    email : ['', [Validators.required]],
    password : ['', [Validators.required, this.passwordValidator]],
    rePassword : ['', [Validators.required]],
    role : ['student'],
    acceptTerm : [false, [Validators.required]]
  })

  passwordValidator(control : AbstractControl){
    const password : string = control.value
    if(!password) return;

    const hasNumber = /[0-9]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const valid = hasLowerCase && hasNumber && hasUpperCase
    console.log(valid);
    return valid ? null : {passwordStrength : true}
  }

  async signupUser(){
    console.log(this.signUpGroup.value);
    const formValue = this.signUpGroup.value 
    if(this.signUpGroup.valid && (formValue.password === formValue.rePassword)){
      const formValue = this.signUpGroup.value
      const signUp : SignUp = {
        username: formValue.username,
        email: formValue.email,
        password: formValue.password,
        role: formValue.role
      }
      const data = await this.httpService.signUpUser(signUp).toPromise()
      console.log(data);
      alert("SignUp successfully!")
      this.router.navigate(['/login'])
    } else{
      alert("Enter valid credentials")
    }
    console.log(this.signUpGroup.valid)
  }

  hideRole:boolean = false;
  keyrole(event:any){
    console.log("Key "+ event.key + " , KeyCode : "+ event.keyCode)
    if(event.keyCode === 65){
      this.hideRole = !this.hideRole
    }
  }
}
