import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { map } from 'rxjs';
import { CHART_COLORS } from '../../extensions/utils';
import { types, typesAmount } from '../../models/resUser.model';
import { appEnv } from '../../../environment/app.environment';
import UserDistributionService from '../../services/user-distribution.service';

Chart.register(...registerables);

@Component({
  selector: 'app-user-distribution',
  imports: [],
  templateUrl: './user-distribution.component.html',
  styleUrl: './user-distribution.component.scss',
})
export class UserDistributionComponent {
  constructor(private http: HttpClient) {}
  AllTypesRes: { type: string }[] = [];
  typesValue: number[] = [];
  alltypes: string[] = [];
  DATA_COUNT: number = 0;
  
  async ngOnInit(): Promise<void> {
      
      const service = new UserDistributionService(this.http);
      this.AllTypesRes = service.getAllType();
        this.DATA_COUNT = this.AllTypesRes.length;
        this.alltypes = this.AllTypesRes.map((value: { type: string }) => value.type);

        service.getDistribution(this.alltypes, this.DATA_COUNT);
  }
}
