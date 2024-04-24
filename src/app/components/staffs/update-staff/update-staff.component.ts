import { Component, inject } from '@angular/core';
import { ApiRequestService } from '../../../services/api-request.service';
import { StaffFormComponent } from '../staff-form/staff-form.component';

@Component({
  selector: 'app-update-staff',
  standalone: true,
  imports: [StaffFormComponent],
  templateUrl: './update-staff.component.html',
  styleUrl: './update-staff.component.css'
})
export class UpdateStaffComponent {
  httpService = inject(ApiRequestService)
}
