import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { devEnvironment } from '../../environment/dev-environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import { SignUp } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

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

}
