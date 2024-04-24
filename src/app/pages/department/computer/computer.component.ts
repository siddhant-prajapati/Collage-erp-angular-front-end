import { Component } from '@angular/core';
import { FacultyProfileComponent } from '../../../components/staffs/faculty-profile/faculty-profile.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [FacultyProfileComponent, RouterOutlet],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

}
