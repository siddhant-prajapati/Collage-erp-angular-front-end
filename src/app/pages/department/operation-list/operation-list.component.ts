import { Component, Input, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { ApiRequestService } from '../../../services/api-request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operation-list',
  standalone: true,
  imports: [RouterLink, MatExpansionModule, CommonModule],
  templateUrl: './operation-list.component.html',
  styleUrl: './operation-list.component.css'
})
export class OperationListComponent {
  panelOpenState = false;

  @Input()
  department : any;

  role = sessionStorage.getItem("role")
  loginDepartment = sessionStorage.getItem("loginDepartment")
  httpService = inject(ApiRequestService)
}
