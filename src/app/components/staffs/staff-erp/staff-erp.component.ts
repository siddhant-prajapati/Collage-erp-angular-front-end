import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { StaffDetailsComponent } from '../staff-details/staff-details.component';
import { ApiRequestService } from '../../../services/api-request.service';

@Component({
  selector: 'app-staff-erp',
  standalone: true,
  imports: [
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    AddStaffComponent, 
    CommonModule,
    JsonPipe,
    StaffDetailsComponent
  ],
  templateUrl: './staff-erp.component.html',
  styleUrl: './staff-erp.component.css'
})
export class StaffErpComponent {
  httpService = inject(ApiRequestService)
  showElement:boolean = false

  toggleForm(){
    this.showElement= !this.showElement
    this.httpService.operation = 'add'
  }

  async findStaff(id : any){
    const data = await this.httpService.findStaffById(id).toPromise()
    this.httpService.staff = data
    console.log(this.httpService.staff)
  }
}
