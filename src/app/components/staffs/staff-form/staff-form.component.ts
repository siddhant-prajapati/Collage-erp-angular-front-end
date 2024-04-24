import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ApiRequestService } from '../../../services/api-request.service';
import { Staff } from '../../../models/staff.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-form',
  standalone: true,
  imports: [
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatRadioModule, 
    MatDividerModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './staff-form.component.html',
  styleUrl: './staff-form.component.css'
})
export class StaffFormComponent {
  httpService = inject(ApiRequestService)

  val: any;

  // @Output()
  // newStudentEmit = new EventEmitter<FormGroup>();

  constructor(private fb : FormBuilder){}

  staffGroup : FormGroup = this.fb.group({
    staffName : ['', [Validators.required]],
    department : [ this.httpService.department, [Validators.required]],
    email : ['',[Validators.required, Validators.email]],
    mobileNo : ['', Validators.required, Validators.minLength, Validators.maxLength],
    address : ['',[Validators.required]],
    password : [''],
    attendance : [''],
    degree : [''],
    experiance : [''],
    specialization  : this.fb.array(['']),
    isValid : ['',[Validators.required]]
  })

  isFormValid : boolean = false;
  //formValid = this.studentGroup.valid
  async submitForm(){
    
    this.staffGroup.value.specialization =this.specilize
    console.log(this.staffGroup.value);
    console.log(this.httpService.operation);
    
    if(this.staffGroup.valid){
      let formData = this.staffGroup.value
      const staff : Staff = {
        staffName: formData.staffName,
        profilePic: '',
        department: formData.department,
        mobileNo: formData.mobileNo,
        address: formData.address,
        email: formData.email,
        password: formData.password,
        degree: formData.degree,
        specialization: formData.specialization,
        experience: formData.experiance,
        attendance: formData.attendance
      }
      try {
        if(this.httpService.operation === 'add'){

          const data = (await this.httpService.createStaff(staff)).toPromise()
          console.log(data)
          alert('Successfully new staff added')
        } else if(this.httpService.operation === 'update'){
          staff.profilePic = this.httpService.staff.profilePic
          const data = await this.httpService.updateStaff(this.httpService.staffId, staff)
          console.log(data);
          alert('Staff successfully updated')
        } else {
          alert('invalid operation')
        }
        
        //this.staffGroup.reset()
      } catch (e){
        alert(e)
      }
    }

  }

  get specialization(){
    return this.staffGroup.get('specialization') as FormArray;
  }

  addSpecialization(){
    this.specialization.push([''])
  }

  deleteSpecialization(i:number){
    this.specialization.removeAt(i)
  }
  specilize : string[] = []

  addValue(val:any){
    console.log(val);
    val.style = 'border-color : green;'
    this.specilize.push(val.value)
    console.log(this.specilize)
  }

  
}
