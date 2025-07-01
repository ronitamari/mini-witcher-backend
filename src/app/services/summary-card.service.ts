import { HttpClient } from '@angular/common/http';
import { appEnv } from '../../environment/app.environment';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
class SummaryCardService {
  constructor(private http: HttpClient) {}

  getAmountOfUsers = (): number => {
    let totalUsers = 0;
    this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-amount`)
      .subscribe((buffer) => {
        totalUsers = Number(buffer);
      });

    return totalUsers;
  };

  getAmountOfDisabledUsers = (): number => {
    let disabledUsers = 0;
    this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-disabled-users-amount`)
      .subscribe((buffer) => {
        disabledUsers = Number(buffer);
      });
    return disabledUsers;
  };

  getAmountOfAactiveUsers = (): number => {
    let activeUsers = 0;

    this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-active-users-amount`)
      .subscribe((buffer) => {
        activeUsers = Number(buffer);
      });
    return activeUsers;
  };

  getAmountOfInactiveUsers = () => {
    // let inactiveUsers = 0;
    return this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-inctive-users-amount`).pipe(
        map((item)=> Number(item))
      )
    //   .subscribe((buffer) => {
    //     inactiveUsers = Number(buffer);
    //   });
    // return inactiveUsers;
  };

  getAmountOfEnforcedUsers = (): number => {
    let enforcedUsers = 0;
    this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-enforced-users-amount`)
      .subscribe((buffer) => {
        enforcedUsers = Number(buffer);
      });
    return enforcedUsers;
  };

  getAmountOfNotEnforcedUsers = (): number => {
    let notEnforcedUsers = 0;
    this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-not-enforced-users-amount`)
      .subscribe((buffer) => {
        notEnforcedUsers = Number(buffer);
      });
    return notEnforcedUsers;
  };
}

export default SummaryCardService;
