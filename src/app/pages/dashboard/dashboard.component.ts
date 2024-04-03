import { Component } from '@angular/core';
import { devEnvironment } from '../../../environment/dev-environment';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  collage = devEnvironment.collageName
}
