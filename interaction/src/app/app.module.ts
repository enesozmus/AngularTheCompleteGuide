import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstChildComponent } from './first-child/first-child.component';
import { AnotherChildComponent } from './another-child/another-child.component';
import { LastChildComponent } from './last-child/last-child.component';
import { ForOutputComponent } from './for-output/for-output.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    AnotherChildComponent,
    LastChildComponent,
    ForOutputComponent,
    DatabindingComponent,
    PartOneComponent,
    PartTwoComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
