import { JsonPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';

@Component({
  selector: 'app-staff-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './staff-table.component.html',
  styleUrl: './staff-table.component.css'
})
export class StaffTableComponent implements OnChanges{
  constructor(){
  //  console.log(this.staff);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['staff'] && changes['staff'].currentValue){
    //   console.log('current staff is :')
    //   console.log(this.staff);
      
    // }
  }
  // @Input()
  // staff : any;
  httpService = inject(ApiRequestService)
}
