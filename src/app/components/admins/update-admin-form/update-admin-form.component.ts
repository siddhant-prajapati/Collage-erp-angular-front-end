import { Component, inject } from '@angular/core';
import { FormHeaderComponent } from '../../form-header/form-header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminFormComponent } from '../admin-form/admin-form.component';
import { ApiRequestService } from '../../../services/api-request.service';
import { MatButton } from '@angular/material/button';
import { AdminApiService } from '../../../services/admin-api.service';

@Component({
  selector: 'app-update-admin-form',
  standalone: true,
  imports: [FormHeaderComponent, CommonModule, ReactiveFormsModule, AdminFormComponent, MatButton],
  templateUrl: './update-admin-form.component.html',
  styleUrl: './update-admin-form.component.css'
})
export class UpdateAdminFormComponent {
  httpService = inject(AdminApiService)
  constructor(private fb : FormBuilder){}
  adminUpdateGroup : FormGroup = this.fb.group({
    adminName : ['', Validators.required],
    email : ['', Validators.required],
    password : ['', Validators.required],
    role : ['admin']
  })

  isFormValid : boolean = false
  updateAdmin(){
    if(this.adminUpdateGroup.valid){
      const formValue = this.adminUpdateGroup.value;

    }
  }
}
