import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = 1;
  title = 'visualizer-shub';
  public holdings = [];
  @ViewChild("chart") chart: ChartComponent;

  pieChart() { }
  bubbleChart() { }

  loadedFeature = "dashboard"
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/portfolio/myUserId').subscribe(data => {
      this.holdings = data.holdings;
    });
  }
}
