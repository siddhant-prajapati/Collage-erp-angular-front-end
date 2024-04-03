import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, FormHeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  router = inject(Router)
  async signupUser(form : NgForm){
    console.log(form.value)
    this.router.navigate(['/layout'])
  }
}
