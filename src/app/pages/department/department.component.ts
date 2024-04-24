import { encapsulateStyle } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { AllDepartmentInfoComponent } from './all-department-info/all-department-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { OperationListComponent } from './operation-list/operation-list.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    AllDepartmentInfoComponent, 
    MatExpansionModule, 
    OperationListComponent
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
  encapsulation : ViewEncapsulation.ShadowDom
})
export class DepartmentComponent implements OnInit{

  apiRequestService = inject(ApiRequestService)

  panelOpenState = false;

  router = inject(Router)
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        this.apiRequestService.department = currentUrl.split("/")[3]
        //console.log(this.apiRequestService.department)
        this.setDepartment(this.apiRequestService.department)
      }
    });
  }

  department:string=this.apiRequestService.department

  setDepartment(depart : string){
    this.department = depart
    //console.log(this.department);
    
  }

}
