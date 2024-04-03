import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reusable-items';
}
