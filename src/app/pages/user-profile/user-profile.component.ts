import { Component, OnInit, inject } from '@angular/core';
import { StudentTableComponent } from './student-table/student-table.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtDecoderService } from '../../services/jwt-decoder.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { ApiRequestService } from '../../services/api-request.service';
import { StaffTableComponent } from './staff-table/staff-table.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UpdateStudentFormComponent } from '../../components/students/update-student-form/update-student-form.component';
import { UpdateStaffFormComponent } from '../../components/staffs/update-staff-form/update-staff-form.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { UpdateAdminFormComponent } from '../../components/admins/update-admin-form/update-admin-form.component';
import { AdminPledgeComponent } from '../../components/admins/admin-pledge/admin-pledge.component';
import { StudentApiService } from '../../services/student-api.service';
import { CreateAdminFormComponent } from '../../components/admins/create-admin-form/create-admin-form.component';
import { ChartAttendanceComponent } from '../../components/admins/chart-attendance/chart-attendance.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    StudentTableComponent, 
    StaffTableComponent,
    UserAttendanceComponent, 
    JwtModule, 
    JsonPipe,
    CommonModule,
    RouterLink,
    RouterOutlet,
    UpdateStudentFormComponent,
    UpdateStaffFormComponent,
    AdminTableComponent,
    UpdateAdminFormComponent,
    AdminPledgeComponent,
    CreateAdminFormComponent,
    ChartAttendanceComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  router = inject(Router)
  decodedToken: any;
  async ngOnInit(): Promise<void> {

  }
  
  private jwtDecoderService = inject(JwtDecoderService)
  role:any;

  token : any = sessionStorage.getItem("token")
  constructor(){
    this.decodedToken = this.jwtDecoderService.decodeToken(this.token);
    this.role = this.decodedToken.a[0] 
    const userId = this.decodedToken.sub
    this.findUserByRoleAndId(this.role, userId);
  }
 
   studentService = inject(StudentApiService)
   httpService = inject(ApiRequestService)

  async findUserByRoleAndId(role : string, id : number){

    if (role === 'student') {
      try {
        const res = await this.studentService.findStudentById(id).toPromise();
        this.studentService.studentProfile = res;
        // console.log(res);
        console.log(this.studentService.studentProfile);
      } catch (error) {
        console.error(error);
      }
    } else if(role === 'staff') {
      try {
        const res = await this.httpService.findStaffById(id).toPromise();
        this.httpService.staffProfile = res;
        //console.log(this.staffProfile)
      } catch (error) {
        console.error(error);
      }
    } else if(role === 'admin') {
      try {
        const res = await this.httpService.findAdminById(id).toPromise();
        this.httpService.adminProfile = res;
        //console.log(this.staffProfile)
      } catch (error) {
        console.error(error);
      }
    }
    //console.log(this.staffProfile);
  }

  showForm:boolean=false;
  toggleForm(){
    this.showForm = !this.showForm
    this.httpService.operation = 'update'
  }

  showForm1:boolean=false;
  toggleForm1(){
    this.showForm1 = !this.showForm1
    console.log("works");
    
  }

  showForm2:boolean=false;
  toggleForm2(){
    this.showForm2 = !this.showForm2
    this.httpService.operation = 'add'
  }

  signOut(){
    sessionStorage.setItem("token","")
  }

  imageEvent: any;
  async changeProfilePic(event : any){
    //this.imageEvent = event
    // console.log(event);
    
    // console.log(this.imageEvent)
    const role:any = sessionStorage.getItem("role")
    const userId:any = sessionStorage.getItem("userId")

    const file = event.currentTarget.files[0]
    const formObj =new FormData();
    formObj.append('image',file);
    try{
    const data: any = await this.httpService.uploadImage(role , userId, formObj)
      alert("successfully updated")
    } catch(e){
      console.log(e)
      alert(e)
  }
}

  async submitProfilePic(){
    const role:any = sessionStorage.getItem("role")
    const userId:any = sessionStorage.getItem("userId")

    const file = this.imageEvent.currentTarget.files[0]
    const formObj =new FormData();
    formObj.append('image',file);
    try{
    const data: any = await this.httpService.uploadImage(role , userId, formObj)
      alert("successfully updated")
    } catch(e){
      console.log(e)
      alert(e)
    }    
  }

  image : any;
  showImage(){
    try{
      const data: any = this.httpService.showImageById()
      this.image = data
      } catch(e){
        console.log(e)
        alert(e)
      }
  }

  defaultImage = '../../../assets/images/default-user.jpg'
  handleImage(ele : any){
    ele.target.src = this.defaultImage
  }

  createNewAdmin(){

  }
  
}
