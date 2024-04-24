import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestService } from '../../../services/api-request.service';
import { StaffTableComponent } from '../../../pages/user-profile/staff-table/staff-table.component';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [StaffTableComponent],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnChanges{
  constructor(private activateRoute : ActivatedRoute){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['students'] && changes['students'].currentValue){
      this.students = this.students
    }
  }

  apiRequestService = inject(ApiRequestService)

  router = inject(Router)

  students : any[]= [];
  async ngOnInit(): Promise<void> {
    this.students = await this.apiRequestService.findUserByDepartment('student', this.apiRequestService.department)
  }
  defaultImage = '../../../assets/images/default-user.jpg'

  handleImageError(ele : any){
    ele.target.src = this.defaultImage;
  }
}
