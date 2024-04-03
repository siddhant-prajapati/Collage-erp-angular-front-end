import { Component } from '@angular/core';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';

@Component({
  selector: 'app-admission-form',
  standalone: true,
  imports: [FormHeaderComponent],
  templateUrl: './admission-form.component.html',
  styleUrl: './admission-form.component.css'
})
export class AdmissionFormComponent {

}
