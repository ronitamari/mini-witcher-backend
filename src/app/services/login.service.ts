import { HttpClient, HttpParams } from "@angular/common/http";
import { appEnv } from "../../environment/app.environment";
import { inject, Injectable } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { HomeLayoutComponent } from "../home-layout/home-layout.component";
import { UsersComponent } from "../pages/users/users.component";
import { UserValidation } from "../models/resUser.model";
import { map } from "rxjs";

@Injectable()
class LoginService {

    // routes: Routes = [
    //     { path: 'users',
    //         component: HomeLayoutComponent,
    //         children: [
    //             {
    //                 path: '',
    //                 component: UsersComponent
    //             }
    //         ]
    //     },
    // ];
      
    constructor(private http: HttpClient) {}

    // private readonly router = inject(Router);
    login = (params: HttpParams): void => {
        
        this.http
        .get<UserValidation>(`${appEnv.baseUrl}login/`, {
            params: params,
        })
        // .pipe(
        //     map((isAknownUser) => {

        //         return isAknownUser
        //     })
        // )
        .subscribe((isAknownUser) => {
            console.log("isAknownUser:");
            console.log(`hi: ${isAknownUser}`);
            window.localStorage.setItem('jwt', `${isAknownUser.token}`);
            isAknownUser
            ? window.location.href = '/users'
            : window.location.href = '/login'
        });
    }


}

export default LoginService;