import { Component, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { JsonPipe } from '@angular/common';
import { AdminApiService } from '../../../services/admin-api.service';

@Component({
  selector: 'app-admin-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './admin-table.component.html',
  styleUrl: './admin-table.component.css'
})
export class AdminTableComponent {
  httpService = inject(AdminApiService)
}
