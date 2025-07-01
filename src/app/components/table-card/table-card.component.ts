import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { tableElements } from '../../models/resUser.model';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { appEnv } from '../../../environment/app.environment';
import TableCardService from '../../services/table-card.service';
import { firstValueFrom, Observable, of } from 'rxjs';

@Component({
  selector: 'app-table-card',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    DatePipe,
    NgIf,
    CommonModule
  ],
  providers: [TableCardService],
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCardComponent {
  async ngOnInit() {
    this.totalItems$ = this.tableService.getAmaountOfAllADUsers();
    
    this.getItems();
  }
  
  constructor(private tableService: TableCardService) {}
  
  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    console.log(event)
    event.pageIndex === 0
    ? (this.pageIndex = 1)
    : (this.pageIndex = event.pageIndex + 1);
    
    this.getItems();
  }
  
  async getItems() {
    console.log(this.pageIndex, this.pageSize)
    this.allDataSource = this.tableService.getTableData(this.pageIndex, this.pageSize);
    this.dataSource$ = this.allDataSource;
  }

  async applyFilter(event: Event) {
    this.dataSource$ = of((await firstValueFrom(this.allDataSource)).filter((row) => {
      return this.filterInput === ''
        ? this.allDataSource
        : row.ad_display_name.includes(this.filterInput.trim().toLowerCase());
    }));
  }

  displayedColumns: string[] = [
    'type',
    'enabled',
    'display name',
    'last log on time',
    'created date',
    'smart card logon required',
    'password not required',
  ];
  filterInput: string = "";
  AllUsersRes!: [];
  dataSource$: Observable<tableElements[]>;
  allDataSource: Observable<tableElements[]>;
  pageSize = 10;
  pageIndex = 1;
  totalItems$: Observable<number>;
}
