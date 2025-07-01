import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Add the JWT as an authorization header
//     const jwt = localStorage.getItem('jwt');
//     if (jwt) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${jwt}`
//         }
//       });
//     }
//     return next.handle(request);
//   }
// }
let isLogin = true;
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    console.log("try to acssess local storage");
    console.log("if: " + !req.url.includes("login"));
    if (!req.url.includes("login")) {
        console.log("jwt is exist");
        console.log("hi: " + JSON.stringify(req));
        // isLogin = false;

        const jwt = window.localStorage.getItem('jwt');
        const newReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${jwt}`
            }
        });
        
        return next(newReq);
    }
    console.log("jwt not yet exist")
    return next(req);
}