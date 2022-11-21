import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';

import { FirstService } from './services/first.service';


@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
