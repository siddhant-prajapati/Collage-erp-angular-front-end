import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { ApiRequestService } from '../../services/api-request.service';
import { CommonModule } from '@angular/common';
import { JwtDecoderService } from '../../services/jwt-decoder.service';
import { StudentApiService } from '../../services/student-api.service';
import { StaffApiService } from '../../services/staff-api.service';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, FormHeaderComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  httpService= inject(AuthApiService)
  studentService = inject(StudentApiService)
  jwtService = inject(JwtDecoderService)
  staffService = inject(StaffApiService)

  router = inject(Router)
  
  selectedValue:string = "student";

  async loginUser(form: NgForm) {
    console.log(form.value)

    try{
      const data = await this.httpService.attemptLogin(form.value).toPromise()
      console.log(data)
      sessionStorage.setItem("token", data.accessToken)
      sessionStorage.setItem("userId", data.userId)
      alert("Login Successfull!")
      const decoded = await this.jwtService.decodeToken(data.accessToken)

      sessionStorage.setItem("role", decoded.a[0])
      const role = sessionStorage.getItem("role")
      if(role==='staff'){
        const staff = await this.staffService.findStaffByEmail(decoded.e).toPromise()
        sessionStorage.setItem("loginDepartment", staff.department)
        sessionStorage.setItem("profilePic", staff.profilePic)
      }
      if(role==='student'){
        const student = await (await this.studentService.findStudentByEmail(decoded.e)).toPromise()
        console.log(student);
        
        sessionStorage.setItem("profilePic", student.profilePic)
      }
      this.router.navigate(['/layout'])
    } catch(e) {
      console.log(e)
    }

  }
  hideRole:string = "none";


  keyrole(event:any){
    console.log("Key "+ event.key + " , KeyCode : "+ event.keyCode)
    if(event.keyCode === 65){
      this.hideRole = "block";
    }
  }
}
