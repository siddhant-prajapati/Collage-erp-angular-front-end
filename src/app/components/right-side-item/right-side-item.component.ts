import { Component } from '@angular/core';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-right-side-item',
  standalone: true,
  imports: [NgbScrollSpyModule, FormsModule, RouterLink],
  templateUrl: './right-side-item.component.html',
  styleUrl: './right-side-item.component.css'
})
export class RightSideItemComponent {

}
