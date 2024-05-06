import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { StaffApiService } from '../../services/staff-api.service';

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent implements OnInit{
  

  apiRequestService = inject(StaffApiService)

  counter:number = 52;

  image:any;

  
  // async ngOnInit(): Promise<void> {
  //   this.staffList = await this.apiRequestService.findAllStaffData();
  //   //this.image = await this.apiRequestService.findImageByUserId(52)
  // }
  async ngOnInit() {
    
    (await this.apiRequestService.findAllStaffData()).subscribe(res => {
      this.apiRequestService.staffList = res
    })
    
  }

  defaultImage = '../../../assets/images/default-user.jpg'
  handleImag(event :any){
    event.target.src = this.defaultImage
  }
}
