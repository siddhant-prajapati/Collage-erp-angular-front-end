import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, FormHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  router = inject(Router)
  
  selectedValue:string = "student";

  async loginUser(form: NgForm) {
    console.log(form.value)
    console.log(this.selectedValue)

    this.router.navigate(['/layout'])
  }
  hideRole:string = "none";


  keyrole(event:any){
    console.log("Key "+ event.key + " , KeyCode : "+ event.keyCode)
    if(event.keyCode === 65){
      this.hideRole = "block";
    }
  }
}
