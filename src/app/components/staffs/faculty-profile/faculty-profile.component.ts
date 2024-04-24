import { Component, Input, OnInit, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Staff } from '../../../models/staff.model';

@Component({
  selector: 'app-faculty-profile',
  standalone: true,
  imports: [],
  templateUrl: './faculty-profile.component.html',
  styleUrl: './faculty-profile.component.css'
})
export class FacultyProfileComponent implements OnInit{

  constructor(private activateRoute : ActivatedRoute){}

  apiRequestService = inject(ApiRequestService)

  router = inject(Router)

  staffs : any[] =[];
  async ngOnInit(): Promise<void> {
    this.staffs = await this.apiRequestService.findUserByDepartment('staff', this.apiRequestService.department)
    console.log(this.staffs);
    
  }

  defaultImage = '../../../assets/images/default-user.jpg'

  handleImageError(ele : any){
    ele.target.src = this.defaultImage;
  }
}
