import { AfterViewInit, Component, OnInit, ViewChild, Injectable, Input, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() holdings:any;
  displayedColumns: string[] = ['_id', 'symbol', 'averagePrice', 'totalQuantity'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
    console.log('constructor of portfolio component');
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    console.log(`~ this.holdings in constructor of portfolio component`, this.holdings);
    this.dataSource = new MatTableDataSource(this.holdings);
    console.log(`~ this.dataSource at first in constructor: `, this.dataSource);
  }

  ngOnInit() {
    console.log('inside ngOnInit of portfolio component');
    console.log(`thi.holdings in ngOnInit of portfolioCompoennt: `, this.holdings);
    // this.http.get<any>('http://localhost:3000/portfolio/myUserId').subscribe(data => {
    //   console.log(`got this data from backend: `, data);
    //   this.dataSource = new MatTableDataSource(data.holdings);
    //   console.log(`~ this.dataSource in ngOnInit`, this.dataSource);
    // })
  }

  ngAfterViewInit() {
    console.log('inside ngAfterViewInit of portfolio component');
    console.log(`thi.holdings in ngAfterViewInit of portfolio component: `, this.holdings);
    
  }

  ngOnChanges() {
    console.log('inside ngOnChanges of portfolio component');
    console.log(`thi.holdings in ngOnChanges of portfolio component: `, this.holdings);
    this.dataSource = new MatTableDataSource(this.holdings);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(`~ this.dataSource in ngOnChanges`, this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };
}