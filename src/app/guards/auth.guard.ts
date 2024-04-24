import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtDecoderService } from '../services/jwt-decoder.service';
import { ApiRequestService } from '../services/api-request.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  console.log("guard implemented");
  const token :any = sessionStorage.getItem("token")
  const jwtDecoder = inject(JwtDecoderService)
  try {
    const tokenData = jwtDecoder.decodeToken(token)
    console.log(tokenData);
    
    let IsLoggedIn = sessionStorage.getItem("token")
    console.log(IsLoggedIn)
    if(IsLoggedIn == 'null' || IsLoggedIn===undefined || IsLoggedIn ==="" || IsLoggedIn===null){
      alert("Please Login , Redirecting to Login Page !!")
      router.navigate(['login'])
      return false;  
    }
  return true;
  } catch(e){
    alert("Please Login , Redirecting to Login Page !!")
    router.navigate(['login'])
    return false;
  }
  
};
