import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RightSideItemComponent } from '../right-side-item/right-side-item.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet, 
    RightSideItemComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {

}
