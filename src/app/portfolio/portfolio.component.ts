import { AfterViewInit, Component, OnInit, ViewChild, Injectable, Input, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() holdings:any;
  displayedColumns: string[] = [
    'index', 
    'symbol', 
    'totalQuantity', 
    'averagePrice', 
    'lastTradedPrice', 
    'investedAmount',
    'currentValue',
    'profitLoss',
    'profitLossPercentage'
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
    console.log('constructor of portfolio component');
    console.log(`~ this.holdings in constructor of portfolio component`, this.holdings);
    this.dataSource = new MatTableDataSource(this.holdings);
    console.log(`~ this.dataSource at first in constructor: `, this.dataSource);
  }

  ngOnInit() {
    console.log('inside ngOnInit of portfolio component');
    console.log(`this.holdings in ngOnInit of portfolioCompoennt: `, this.holdings);
  }

  ngAfterViewInit() {
    console.log('inside ngAfterViewInit of portfolio component');
    console.log(`thi.holdings in ngAfterViewInit of portfolio component: `, this.holdings);
    
  }

  ngOnChanges() {
    console.log('inside ngOnChanges of portfolio component');
    console.log(`thi.holdings in ngOnChanges of portfolio component: `, this.holdings);
    this.holdings.forEach((element:any) => {
      element.investedAmount = (element.totalQuantity * element.averagePrice).toFixed(2);
      element.currentValue = (element.totalQuantity * element.lastTradedPrice).toFixed(2);
      element.profitLoss = (element.currentValue - element.investedAmount).toFixed(2);
      element.profitLossPercentage = ((element.currentValue - element.investedAmount) / element.investedAmount * 100).toFixed(2);
    });
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