import { Component } from '@angular/core';
import { StudentFormComponent } from '../student-erp/student-form/student-form.component';
import { StudentDetailsComponent } from '../student-erp/student-details/student-details.component';
import { FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [StudentFormComponent, StudentDetailsComponent, JsonPipe],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
}
