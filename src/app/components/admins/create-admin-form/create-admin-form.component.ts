import { Component, OnInit } from '@angular/core';
import { AdminFormComponent } from '../admin-form/admin-form.component';

@Component({
  selector: 'app-create-admin-form',
  standalone: true,
  imports: [AdminFormComponent],
  templateUrl: './create-admin-form.component.html',
  styleUrl: './create-admin-form.component.css'
})
export class CreateAdminFormComponent implements OnInit{
  ngOnInit(): void {
    console.log("admin form load");
    
  }

}
