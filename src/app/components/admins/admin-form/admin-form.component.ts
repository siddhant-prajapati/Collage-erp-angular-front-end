import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormHeaderComponent } from '../../form-header/form-header.component';
import {MatButtonModule} from '@angular/material/button';
import { ApiRequestService } from '../../../services/api-request.service';
import { AdminApiService } from '../../../services/admin-api.service';
import { Admin } from '../../../models/admin.model';

@Component({
  selector: 'app-admin-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormHeaderComponent, MatButtonModule],
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css'
})
export class AdminFormComponent {
  adminService = inject(AdminApiService)
  httpService = inject(ApiRequestService)

  constructor(private fb : FormBuilder){}
  adminUpdateGroup : FormGroup = this.fb.group({
    adminName : ['', Validators.required],
    email : ['', Validators.required],
    password : ['', Validators.required],
    role : ['admin']
  })

  isFormValid : boolean = false
  async updateAdmin(){
    if(this.adminUpdateGroup.valid){
      //console.log('Updating admin');
      const formValue = this.adminUpdateGroup.value;
      //console.log(formValue);
      const updatableAdmin : Admin = {
        adminName: formValue.adminName,
        email: formValue.email,
        password: formValue.password,
        role: 'admin'
      }
      const adminId = this.httpService.adminProfile.adminId
      const data = await this.adminService.updateAdmin(adminId, updatableAdmin).toPromise()
      alert("admin updated successfully")
      console.log(data);
      
    }
  }
  async addAdmin(){
    if(this.adminUpdateGroup.valid){
      console.log('Adding admin');
      const formValue = this.adminUpdateGroup.value;
      console.log(formValue);
      const newAdmin : Admin = {
        adminName: formValue.adminName,
        email: formValue.email,
        password: formValue.password,
        role: 'admin'
      }
      const adminId = this.httpService.adminProfile.adminId
      const data = await this.adminService.createAdmin(newAdmin).toPromise()
      alert("New Admin created!")
      console.log(data);
    }
  }

  submitAdmin(){
    if(this.httpService.operation==='add'){
      this.addAdmin();
    }
    if(this.httpService.operation==='update'){
      this.updateAdmin();
    }
  }
}
