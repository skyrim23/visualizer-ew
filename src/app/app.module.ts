import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { headerComponent } from './header/header.component';
import { Dropdowndirective } from "./shared/dropdown.directive";
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [AppComponent,
    headerComponent,
    Dropdowndirective,
    ChartsComponent,
    DashboardComponent,
    UploadComponent,
      ],
  imports: [BrowserModule,
     ChartsModule,
     FormsModule, 
     NgApexchartsModule, 
     BrowserAnimationsModule,
     
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
