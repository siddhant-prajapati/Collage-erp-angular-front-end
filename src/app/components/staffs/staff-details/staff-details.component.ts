import { Component, inject } from '@angular/core';
import { UpdateStaffComponent } from '../update-staff/update-staff.component';
import { MatButtonModule } from '@angular/material/button';
import { ApiRequestService } from '../../../services/api-request.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-staff-details',
  standalone: true,
  imports: [MatButtonModule, UpdateStaffComponent, JsonPipe],
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent {
  httpService = inject(ApiRequestService)

  showEle:boolean = false;
  toggleEle(id : number){
    this.showEle = !this.showEle
    this.httpService.staffId = id;
    this.httpService.operation = 'update'
  }

  async deleteStaff(staffId :number){
    try{
      (await this.httpService.deleteStaffById(staffId)).toPromise()
      
      alert('Staff deleted successfully')
    } catch(e){
      console.error(e);
      alert('Unable to delete staff')
    }
    
  }

  defaultImage = '../../../../assets/images/default-user.jpg'
  handleImage(ele : any){
    ele.target.src = this.defaultImage
  }
}
