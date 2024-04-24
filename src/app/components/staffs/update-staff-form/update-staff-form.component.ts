import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiRequestService } from '../../../services/api-request.service';
import { Staff } from '../../../models/staff.model';
import { FormHeaderComponent } from '../../form-header/form-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-staff-form',
  standalone: true,
  imports: [FormHeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './update-staff-form.component.html',
  styleUrl: './update-staff-form.component.css'
})
export class UpdateStaffFormComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['staff'] && changes['staff'].currentValue){
    //   console.log(this.staff);
      
    // }
  }

  // @Input()
  // staff:any;

  fb = inject(FormBuilder)
  httpService = inject(ApiRequestService)

  staffUpdateGroup : FormGroup = this.fb.group({
    staffName : [this.httpService.staffProfile.staffName , Validators.required],
    password : [''],
    address : [this.httpService.staffProfile.address , Validators.required],
    mobileNo : [this.httpService.staffProfile.mobileNo],
    email : [this.httpService.staffProfile.email, [Validators.required, Validators.email]]
  })

  isFormValid =this.staffUpdateGroup.valid;

  async submitForm() {
    
    const form = this.staffUpdateGroup
    console.log("Hello"+ form.valid);
    this.isFormValid = form.invalid;
    if(form.valid){
      let formValue = form.value

      let staff : Staff = {
        staffName: formValue.staffName,
        profilePic: this.httpService.staffProfile?.profilePic,
        department: this.httpService.staffProfile?.department,
        mobileNo: formValue.mobileNo,
        address: formValue.address,
        email: formValue.email,
        password: formValue.password,
        attendance: this.httpService.staffProfile.attendance,
        degree: this.httpService.staffProfile.degree,
        specialization: this.httpService.staffProfile.specialization,
        experience: this.httpService.staffProfile.experience
      }

      try {
        const id :any = sessionStorage.getItem("userId")
        let data = await this.httpService.updateStaff(id , staff)
        if(data){
          alert('Staff successfully created !')
          console.log(data)
          this.staffUpdateGroup.reset()
        }
      } catch {
        alert('Something went wrong , Try again')
        this.staffUpdateGroup.reset()
      }
    }
  }
}
