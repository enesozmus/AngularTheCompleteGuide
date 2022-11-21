import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoService } from '../services/demo.service';
import { DemoComponent } from './demo.component';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DemoComponent
  ],
  providers: [
    DemoService
  ],
})
export class DemoModule { }
