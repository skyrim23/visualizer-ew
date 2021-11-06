import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartsModule ,FormsModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
