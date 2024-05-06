import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { devEnvironment } from '../../environment/dev-environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

  
  adminProfile : any;

  createAdmin(admin : Admin){
    return this.http.post(devEnvironment.backEndUrl + "/admin/new" , admin).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
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

  updateAdmin(id : number , admin : Admin){
    const token = sessionStorage.getItem("token")
    return this.http.put(devEnvironment.backEndUrl+ '/admin/update/'+id, admin).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
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


  findAdminById(id : number){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/admin/get/'+id).pipe(
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
}
