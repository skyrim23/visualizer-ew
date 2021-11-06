import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule, NgApexchartsModule, BrowserAnimationsModule, MatTableModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
