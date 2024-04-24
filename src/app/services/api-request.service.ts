import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { devEnvironment } from '../../environment/dev-environment';
import { Student } from '../models/student.model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Staff } from '../models/staff.model';
import { SignUp } from '../models/signup.model';
import { Attendance } from '../models/attendance.model';
import { FillAttendanceModel } from '../models/fillAttendance.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

  staff: any;
  staffList:any;
  staffProfile : any;
  staffId : any;

  adminProfile : any;

  studentAttendances :any;
  staffAttendances : any;

  role: string = "";
  loginDepartment : string = ""
  /**
   * Use to create new Staff
   * @param staff : Request from form
   * @returns 
   */
  async createStaff(staff : Staff){
    const token = sessionStorage.getItem("token")
    console.log(staff);
    console.log(token)
    
    return this.http.post(devEnvironment.backEndUrl + "/staff/new" , staff, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        //console.error("Error occur" + error)
        if(error.status === 400){
          alert("Enter valid information")
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  

  /**
   * Use for update staff using staffId
   * @param id : from session storage or form request
   * @param staff : requst from form
   * @returns 
   */
  async updateStaff(id : number, staff: Staff) {
    const token = sessionStorage.getItem("token")

    const updatedStaff = await axios.put(devEnvironment.backEndUrl+ '/staff/update/'+id, staff, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      })
      console.log(updatedStaff);
      return updatedStaff
  }

  
  /**
   * Find staff using staffId
   * @param id : staffId from input element
   * @returns 
   */
  findStaffById(id : number){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/staff/get/'+id, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        //console.error("Error occur" + error)
        if(error.status === 404){
          alert('Staff not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  findStaffByEmail(email : string){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/staff/get-by-mail/'+email, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        //console.error("Error occur" + error)
        if(error.status === 404){
          alert('Staff not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  findAdminById(id : number){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/admin/get/'+id, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        //console.error("Error occur" + error)
        if(error.status === 404){
          alert('Admin not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  /**
   * get all staff data
   * @returns 
   */
  async findAllStaffData(){
    return this.http.get(devEnvironment.backEndUrl + "/staff/all").pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        //console.error("Error occur" + error)
        if(error.status === 204){
          alert('Not any staff available')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  /**
   * 
   * @param id 
   */
  async deleteStaffById(id : any){
    const token = sessionStorage.getItem("token")
    return this.http.delete(devEnvironment.backEndUrl+ '/staff/delete/'+id, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        console.error("Error occur" + error)
        if(error.status === 404){
          alert('Staff not found')
        }
        if(error.status === 204){
          alert('Staff successfully deleted')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  /**
   * this method is use to find by userId
   * @param id : id from input element or sessionStorage
   * @returns 
   */
  async findImageByUserId(id : any){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl+"/image/fileById/"+id);
      if(responce){
        console.log(responce.data)
        return responce.data;
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * get all user based on role and department
   * @param role : role of the user
   * @param department : name of department
   * @returns 
   */
  async findUserByDepartment(role : string,department: String){
    try {
      const responce = await axios.get(
          devEnvironment.backEndUrl + "/" + role + "/get-by-department/" + department
        )
        if(responce){
          console.log(responce.data)
          return responce.data
        }
    } catch (e) {
      console.log(e)
    }
  }


  /**
   * Use for logging
   * @param credentials : username or email and password
   * @returns 
   */
   attemptLogin(credentials:any) : Observable<any>{
      return this.http.post(devEnvironment.backEndUrl + "/auth/login", credentials).pipe(
        map((res: any)=> {
          return res;
        }),
        catchError((error)=>{
          if(error.status === 401){
            alert("Please! enter valid email and password")
          }
          if(error.status === 500){
            alert('Internal server error')
          }
          return throwError(error);
        })
      )
  }

  /**
   * Use to upload profile image
   * @param role : role of user
   * @param userId : userId of user
   * @param image : multipart image data
   * @returns 
   */
  uploadImage(role : string, userId : number, image : any){
    const token = sessionStorage.getItem("token");
    //return this.http.post(devEnvironment.backEndUrl + "/image/fileSystem/" + role + "/" + userId, image);
    return axios.post(devEnvironment.backEndUrl + "/image/fileSystem/" + role + "/" + userId, image);
  }

  showImageById(){
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token");
    return axios.get(devEnvironment.backEndUrl + "/image/fileById/"+userId, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    })
  }

  /**
   * Request for signUp user
   * @param signUpRequest : request from client
   * @returns : data of signed user
   */
  signUpUser(signUpRequest : SignUp){
    return this.http.post(devEnvironment.backEndUrl + "/auth/signup", signUpRequest).pipe(
      map((res: any)=> {
        return res;
      }),
      catchError((error)=>{
        if(error.status=== 404){
          alert('Only user belong to collage are allowed')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error);
      })
    ) 
  }

  forgetPassword(email : string, form : any){
    return this.http.patch(devEnvironment.backEndUrl + "/"+ form.role + "/update-password/"+ email, {password : form.password} ).pipe(
      map((res: any)=> {
        return res;
      }),
      catchError((error)=>{
        if(error.status=== 404){
          alert('Please recheck credentials')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error);
      })
    )
  }

  fillAttendance(attendance: FillAttendanceModel){
    return this.http.post(devEnvironment.backEndUrl + "/attendance/fill", attendance).pipe(
      map((res: any)=> {
        return res;
      }),
      catchError((error)=>{
        if(error.status=== 404){
          alert('Only user belong to collage are allowed')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error);
      })
    )
  }


  findAttendanceByUserId(id : number){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/attendance/get-by-user/'+id, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        if(error.status === 204){
          alert('Attendance not exist')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  deleteAttendanceById(attendanceId : number){
    const token = sessionStorage.getItem("token")
    return this.http.delete(devEnvironment.backEndUrl+ '/attendance/delete/'+attendanceId, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        console.error("Error occur" + error)
        if(error.status === 404){
          alert('Staff not found')
        }
        if(error.status === 204){
          alert('Staff successfully deleted')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

}
