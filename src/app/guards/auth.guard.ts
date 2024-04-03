import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let IsLoggedIn = sessionStorage.getItem("IsLoggedIn")
  if(IsLoggedIn ==="true"){
    return true;  
  }
  alert("Please Login , Redirecting to Login Page !!")
  router.navigate(['login'])
  return false;
};
