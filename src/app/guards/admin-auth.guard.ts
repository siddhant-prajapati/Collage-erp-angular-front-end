import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { JwtDecoderService } from '../services/jwt-decoder.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const token :any = sessionStorage.getItem("token")
  const jwtDecoder = inject(JwtDecoderService)
  const tokenData = jwtDecoder.decodeToken(token)
  console.log("Token data is :");
  if(tokenData.a[0] === "admin"){
    return true;
  }
  alert("Only admin can access this page")
  return false;
};
