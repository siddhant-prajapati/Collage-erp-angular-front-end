import { Component, OnInit, inject } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent implements OnInit{

  apiRequestService = inject(ApiRequestService)

  counter:number = 52;

  staffList: any[] = [];
  async ngOnInit(): Promise<void> {
    this.staffList = await this.apiRequestService.findAllData();
  }

}
