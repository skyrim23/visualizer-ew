import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { headerComponent } from './header/header.component';
import { Dropdowndirective } from "./shared/dropdown.directive";
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { MatSortModule } from '@angular/material/sort';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,
    headerComponent,
    Dropdowndirective,
    ChartsComponent,
    DashboardComponent,
    UploadComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatSortModule, 
    MaterialModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
