import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { devEnvironment } from '../../environment/dev-environment';
import { catchError, map, throwError } from 'rxjs';
import { SubmitExam } from '../models/submitExam.model';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamApiService {

  constructor(private http : HttpClient) { }

  studentExams : any[] = []
  updatebleExam : any;

  studentBySem : Array<Array<Exam>> = []

  findExamByStudentId(studentId : number){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl+ '/exam/get-by-studentId/'+studentId, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        if(error.status === 404){
          alert('Exam not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  submitExam(submitExam : SubmitExam){
    const token = sessionStorage.getItem("token")
    return this.http.post(devEnvironment.backEndUrl+ '/exam/submit-data', submitExam, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        if(error.status === 404){
          alert('Exam not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  updateExamMark(id : number, mark : number){
    const token = sessionStorage.getItem("token")
    console.log(token);
    
    return this.http.get(devEnvironment.backEndUrl+ '/exam/update-mark/'+ id + "?mark=" + mark, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        if(error.status === 404){
          alert('Exam not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  deleteExamDataById(id : number){
    const token = sessionStorage.getItem("token")
    return this.http.delete(devEnvironment.backEndUrl+ '/exam/delete/'+ id, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        if(error.status === 204){
          alert('Exam data deleted successfully')
        }
        if(error.status === 404){
          alert('Exam not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }
}
