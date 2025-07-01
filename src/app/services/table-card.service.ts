import { HttpClient } from '@angular/common/http';
import { tableElements } from '../models/resUser.model';
import { appEnv } from '../../environment/app.environment';
import { firstValueFrom, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
class TableCardService {
  constructor(private http: HttpClient) {}

  getAmaountOfAllADUsers = () => {
    return this.http
    .get<string>(`${appEnv.baseUrl}ad-users/get-amount`)
    .pipe(
        map( totalItems => Number(totalItems))
    )

  }
  getTableData = (pageIndex: number, pageSize: number) => {
    return this.http
      .get<tableElements[]>(`${appEnv.baseUrl}ad-users/get-all-users`, {
        params: {
          page: pageIndex.toString(),
          limit: pageSize.toString(),
        },
      });
  };
}

export default TableCardService;
