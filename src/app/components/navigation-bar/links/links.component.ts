import { Component, OnInit, inject } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ApiRequestService } from '../../../services/api-request.service';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterLink, MatMenuModule, MatButtonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent implements OnInit{

  httpService = inject(ApiRequestService)
  studentService = inject(StudentApiService)
  profilePic : any;
  ngOnInit(): void {
    this.profilePic = sessionStorage.getItem("profilePic")

  }

  defaultImg : string = "../../../../assets/images/default-user.jpg"
  handleImg(event:any){
    event.target.src = this.defaultImg
  }

}
