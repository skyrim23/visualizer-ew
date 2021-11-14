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
  categories: any = {
    marketCapSection: {
      constituents: [],
      currentValueSeries: []
    },
    industry: {
      constituents: [],
      currentValueSeries: []
    },
    sector: {
      constituents: [],
      currentValueSeries: []
    }
  };
  marketCapSectionNames: any = [];
  sectorNames: any = [];
  industryNames: any = [];

  ngOnInit() {
  }

  ngOnChanges() {

    const categoryNames = ['marketCapSection', 'sector', 'industry'];
    // Please optimize this shit, commenting out some info for reference
    let loopcounter = 0;
    // Adds companyName and currentValue in this.categories[categoryName] (where categoryName is marketCapSection, sector or industry)
    // Adds the symbolName in this.categories[categoryName].constituents and increments the currentValue
    // If the categoryName has been looped through, it will add the currentValue to this.categories[categoryName].currentValueSeries
    // and add the symbolName in this.categories[categoryName].constituents

    categoryNames.forEach(categoryName => {
      for (let i = 0; i < this.holdings.length; i++) {
        loopcounter += 1;
        if (this.categories[categoryName].hasOwnProperty(this.holdings[i][categoryName])) {
          this.categories[categoryName][this.holdings[i][categoryName]].currentValue += this.holdings[i].currentValue;
          this.categories[categoryName][this.holdings[i][categoryName]].companyNames.push(this.holdings[i].symbol);
        } else {
          this.categories[categoryName][this.holdings[i][categoryName]] = {
            companyNames: [this.holdings[i].symbol],
            currentValue: this.holdings[i].currentValue
          };
        }

        if (i === this.holdings.length - 1) {
          for (const constituent in this.categories[categoryName]) {
            if (constituent !== 'constituents' && constituent !== 'currentValueSeries') {
              this.categories[categoryName].constituents.push(constituent);
              this.categories[categoryName].currentValueSeries.push(this.categories[categoryName][constituent].currentValue);
            }
          }
        }
      }
    });

    this.chartOptions = {
      chart: {
        width: 400,
        height: 400,
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
      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
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
