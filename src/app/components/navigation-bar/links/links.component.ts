import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterLink, MatMenuModule, MatButtonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {

}
