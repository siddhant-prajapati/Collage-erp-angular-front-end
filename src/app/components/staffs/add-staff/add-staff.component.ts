import { Component } from '@angular/core';
import { StaffFormComponent } from '../staff-form/staff-form.component';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [StaffFormComponent],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent {

}
