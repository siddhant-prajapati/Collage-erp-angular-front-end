import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { JwtDecoderService } from '../services/jwt-decoder.service';
import { ApiRequestService } from '../services/api-request.service';

export const staffAuthGuard: CanActivateFn = (route, state) => {
  const token :any = sessionStorage.getItem("token")

  const jwtDecoder = inject(JwtDecoderService)
  const httpService = inject(ApiRequestService)
  const tokenData = jwtDecoder.decodeToken(token)
  console.log("Token data is :");
  console.log(tokenData.a[0])
  if(tokenData.a[0] === "staff" || tokenData.a[0] === "admin"){
    return true;
  }
  alert("Only staff and admin can access this page")
  return false;
};
