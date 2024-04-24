import { Component, inject } from '@angular/core';
import { StudentFormComponent } from '../student-form/student-form.component';
import { ApiRequestService } from '../../../../services/api-request.service';
import { StudentApiService } from '../../../../services/student-api.service';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [StudentFormComponent],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
  httpService = inject(StudentApiService)
}
