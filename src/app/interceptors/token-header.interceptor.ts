import { HttpInterceptorFn } from '@angular/common/http';

export const tokenHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Requesting url ' + req.url);
  
  const token = sessionStorage.getItem("token")
  console.log(token);
  
  if (token) {
    // Clone the request and set the Authorization header
    const authReq = req.clone({
      // setHeaders: {
      //   Authorization: `Bearer ${token}`
      // }
      headers : req.headers.set('Authorization', `Bearer ${token}`)
    });
    
    console.log(authReq.headers.get('Authorization'));
    
    // Pass the cloned request with updated headers to the next handler
    return next(authReq);
  } else {
    // If token doesn't exist, just pass the original request
    return next(req);
  }
}
