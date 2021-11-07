import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  @Input() public holdings:any;
  @ViewChild("dashboard") dashboard: DashboardComponent;

  constructor() { }

  ngOnInit(): void {
    // console.log('inside ngOnInit of dashboard component');
    // console.log(`this.holding in onInit of dashboardComponent: `, this.holdings);
  }

  ngOnChanges(): void {
    // console.log('inside ngOnChanges of dashboard component');
    // console.log(`this.holding in onChanges of dashboardComponent: `, this.holdings);
  }

}
