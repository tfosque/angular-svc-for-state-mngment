import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMeasurementComponent } from './components/create-measurement/create-measurement.component';
import { ReportsComponent } from './components/reports/reports.component';



@NgModule({
  declarations: [CreateMeasurementComponent, ReportsComponent],
  imports: [
    CommonModule
  ]
})
export class EagleViewModule { }
