import { JsonPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent{

  httpService = inject(StudentApiService)

}
