import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FillAttendanceModel } from '../models/fillAttendance.model';
import { devEnvironment } from '../../environment/dev-environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

  studentAttendances :any;
  staffAttendances : any;

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
    //const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/attendance/get-by-user/'+id).pipe(
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
    //const token = sessionStorage.getItem("token")
    return this.http.delete(devEnvironment.backEndUrl+ '/attendance/delete/'+attendanceId).pipe(
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
