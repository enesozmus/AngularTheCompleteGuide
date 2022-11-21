import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // To make Angular aware of these routes we have to add our AppRoutingModule to providers.
    // We have to import a special helper function provided by Angular @angular/core.
    importProvidersFrom(AppRoutingModule)
  ]
});
/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  */
