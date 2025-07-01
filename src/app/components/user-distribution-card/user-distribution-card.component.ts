import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserDistributionComponent } from '../user-distribution/user-distribution.component';

@Component({
  selector: 'app-user-distribution-card',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    UserDistributionComponent,
  ],
  templateUrl: './user-distribution-card.component.html',
  styleUrl: './user-distribution-card.component.scss',
})
export class UserDistributionCardComponent {}
