import { HttpClient } from '@angular/common/http';
import { types, typesAmount } from '../models/resUser.model';
import { appEnv } from '../../environment/app.environment';
import { map } from 'rxjs';
import { CHART_COLORS } from '../extensions/utils';
import { Chart } from 'chart.js';

class UserDistributionService {
  constructor(private http: HttpClient) {}

  getAllType = (): types[] => {
    let AllTypesRes: types[] = [];

    this.http
      .get<types[]>(`${appEnv.baseUrl}users-type/get-all`)
      .subscribe((buffer) => {
        AllTypesRes = buffer;
      });
    return AllTypesRes;
  };

  getDistribution = (alltypes: string[], DATA_COUNT: number) => {
    this.http
      .get<typesAmount[]>(`${appEnv.baseUrl}ad-users/get-users-amount-by-type/`)
      .pipe(
        map((res) => {
          return res.map((obj) => Number(obj.count));
        })
      )
      .subscribe((amountOfAllTypes) => {
        const data = {
          labels: alltypes,
          datasets: [
            {
              label: 'amount in AD',
              data: amountOfAllTypes,
              backgroundColor: Object.values(CHART_COLORS),
            },
          ],
          hoverOffset: DATA_COUNT,
        };

        new Chart('PieChart', {
          type: 'pie',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'left',
              },
              title: {
                display: true,
              },
            },
          },
        });
      });
  };
}

export default UserDistributionService;
