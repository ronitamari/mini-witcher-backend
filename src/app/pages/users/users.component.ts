import { Component } from '@angular/core';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';
import { TableCardComponent } from '../../components/table-card/table-card.component';
import { UserDistributionCardComponent } from '../../components/user-distribution-card/user-distribution-card.component';

@Component({
  selector: 'app-users',
  imports: [
    SummaryCardComponent,
    TableCardComponent,
    UserDistributionCardComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
