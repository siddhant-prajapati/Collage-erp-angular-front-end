import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LinksComponent } from './links/links.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    RouterLink, 
    NgbDropdownModule, 
    LinksComponent, 
    MatMenuModule, 
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
  encapsulation : ViewEncapsulation.ShadowDom
})
export class NavigationBarComponent {
  eleShow : boolean = false
  toggleDisplay(){
    this.eleShow = !this.eleShow
  }
}
