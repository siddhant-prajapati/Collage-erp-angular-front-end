import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../models/staff.model';
import { devEnvironment } from '../../environment/dev-environment';
import { catchError, map, throwError } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

  staff: any;
  staffList:any;
  staffProfile : any;
  staffId : any;

  /**
   * Use to create new Staff
   * @param staff : Request from form
   * @returns 
   */
  async createStaff(staff : Staff){
    const token = sessionStorage.getItem("token")
    console.log(staff);
    console.log(token)
    
    return this.http.post(devEnvironment.backEndUrl + "/staff/new" , staff).pipe(
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

    const updatedStaff = await axios.put(devEnvironment.backEndUrl+ '/staff/update/'+id, staff)
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
    return this.http.get(devEnvironment.backEndUrl+ '/staff/get/'+id).pipe(
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
    return this.http.get(devEnvironment.backEndUrl+ '/staff/get-by-mail/'+email).pipe(
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
    return this.http.delete(devEnvironment.backEndUrl+ '/staff/delete/'+id).pipe(
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
