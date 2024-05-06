import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { devEnvironment } from '../../environment/dev-environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

  student: any;
  studentProfile : any;
  studentId : any;

  studentList : any;

  async findStudentByEmail(email : any) {
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl + "/student/get-by-email/"+ email).pipe(
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

  async findAllStudentsData(){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl + "/student/all").pipe(
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


  findStudentByDepartment(department : string){
    const token = sessionStorage.getItem("token")
    return this.http.get(devEnvironment.backEndUrl + "/student/get-by-department/"+department).pipe(
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
   * Use to create new Student
   * @param student 
   * @returns 
   */
  async createStudent(student : Student){
    return this.http.post(devEnvironment.backEndUrl + "/student/new" , student).pipe(
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

  /**
   * Use for update student
   * @param id : studentId from sessionStorage or form request
   * @param student : student data from form
   * @returns 
   */
  updateStudent(id : number, student: Student) {
    const token = sessionStorage.getItem("token")
    return this.http.put(devEnvironment.backEndUrl+ '/student/update/'+id, student).pipe(
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

  /**
   * Find student using Id
   * @param id : studentId from input element
   * @returns 
   */
  findStudentById(id : number){
    return this.http.get(devEnvironment.backEndUrl+ '/student/get/'+id).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        //console.error("Error occur" + error)
        if(error.status === 404){
          alert('Student not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
  }

  deleteStudentById(id : number){
    return this.http.delete(devEnvironment.backEndUrl+ '/student/delete/'+id).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error)=> {
        //console.error("Error occur" + error)
        if(error.status === 204){
          alert('Student successfully deleted')
        }
        if(error.status === 404){
          alert('Student not found')
        }
        if(error.status === 500){
          alert('Internal server error')
        }
        return throwError(error)
      })
    )
}

}
