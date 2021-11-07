import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})



export class ChartsComponent implements OnInit, OnChanges {
  @Input() holdings: any;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  totalInvested: number = 0;
  totalCurrentValue: number = 0;
  smallCapsCurrentValue: number = 0;
  midCapsCurrentValue: number = 0;
  largeCapsCurrentValue: number = 0;
  smallCaps: any = [];
  midCaps: any = [];
  largeCaps: any = [];
  ngOnInit() {
  }

  ngOnChanges() {
    console.log('inside ngOnChanges of chartComponent', this.holdings);
    this.holdings.forEach((element: any) => {
      if (element.marketCap < 5000) {
        this.smallCaps.push(element);
        this.smallCapsCurrentValue += parseFloat(element.currentValue);
      }
      else if (element.marketCap < 20000) {
        this.midCaps.push(element);
        this.midCapsCurrentValue += parseFloat(element.currentValue);
      }
      else {
        this.largeCaps.push(element);
        this.largeCapsCurrentValue += parseFloat(element.currentValue);
      }
      this.totalCurrentValue += element.currentValue;
    });

    this.chartOptions = {
      series: [this.smallCapsCurrentValue, this.midCapsCurrentValue, this.largeCapsCurrentValue],
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["black"]
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      },
      fill: {
        type: "gradient"
      },
      labels: ["Small Cap", "Mid Cap", "Large Cap"],
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  }
  pieChart() { }
  bubbleChart() { }

  constructor() {
  }
}
