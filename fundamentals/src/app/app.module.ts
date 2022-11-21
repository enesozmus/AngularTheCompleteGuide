import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
/**
 * Decorators are a TypeScript feature which allow you to enhance your classes for example.
 * Decorators are always attached by adding an @ sign in front of them.
 * @NgModule({}) → It's the module decorator.
 * Now this module decorator is not something TypeScript knows from the start, so we have to import it.
 * We have to add an import and this import now needs to give us access to module decorator.
 */
import { NgModule } from '@angular/core';
// These has been added so TypeScript can know where to find this components and modules.
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UnknownComponent } from './unknown/unknown.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShortenPipe } from './pipes/pipes/shorten.pipe';
import { FilterPipe } from './pipes/pipes/filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { DemoService } from './services/demo.service';
import { DemoModule } from './demo/demo.module';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';


/**
 * Now we need to pass a Javascript object which will be stored as metadata to this module decorator to configure it
 * because without any configuration, it's still not that valuable to Angular.
 * The NgModule decorator takes an object which you pass in to configure that module.
 */
@NgModule({
  // metadatas → declarations, imports, providers and bootstrap.
  /**
   * declarations: [],
   *  → We have a long list of declarations.
   *  → That's an array of all the components, directives and custom pipes you're using in your application.
   *  → All these things have to go into declarations, otherwise you can't use them in your templates or in your routes.
   */
  /**
   * imports: [],
   *  → The imports array allows you to import other modules into this module.
   *  → So the imports array is important to split your app into multiple modules.
   */
  /**
   * providers: [],
   *  → We define all the services we want to provide here.
   *  → For now it's important to know any service you plan on injecting needs to be provided.
   *  → and typically, you do this by adding that providedIn: 'root'.
   */
  /*
    When we add a new component to our app
    this new component now has to be registered here in the module
    So Angular will know that this component exists.
    We do register new components in this declarations array [].
    We already registered the app component here
    Now we also need to register the server component here.
  */
  declarations: [
    AppComponent,
    /*
      Now Angular know that this is part of the app but TypeScript can't know where to find this ServerComponent.
      TypeScript doesn't know where this file is, where to find this class.
      So we need to add an import.
      Now, Angular when it runs knows that we have a ServerComponent and that it is part of our app.
      [] If we don't declare it, the component can't be part of any NgModule.
    */
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserComponent,
    HomeComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    UnknownComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpRequestsComponent,
    AuthGuardComponent,
    LazyLoadingComponent,
    ViewEncapsulationComponent
  ],
  /*
      When we add a new module to our app
      this new module now has to be registered here in the module
      So Angular will know that this module exists.
      We do register new modules in this imports array [].
      imports simply allows us to add some other modules to this module
      Yes, you can split up your app into multiple modules.
      and also Angular itself is split up into modules
      so the BrowserModule for example gives us all the base functionality we need to start our app
  */
  imports: [
    BrowserModule,
    /** CommonModule
     * Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
     */
    /**
     * TheAppRoutingModule is simply there to hold our route configuration.
     * We could absolutely add this into our app module.
     * We outsourced it because it keeps our app module a bit leaner
     * and that is already one reason for why you might want to split your application into multiple modules.
     * It can make your existing modules leaner and more focused and easier to edit and to maintain.
     */
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoModule
  ],
  providers: [
    DemoService
  ],
  /*
    # the most important part
    * The bootstrap array is important for starting your app.
    * It defines which component is available right in that index.html file.
    This is responsible for telling Angular via the AppModule the root component when the app starts running.
  */
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
    First of all, a module is just a Typescript class.
    So let's export this class so that we can use it outside of the this file too.
      the name of the module first
      then module {}
    It's a normal TypeScript class nothing special about it.
    So we should add something to it which tells Angular that this is not only a normal TypeScript class but instead something special, a module.
    We do this by adding a special decorator.
*/

/*
    # Understanding the Role of AppModule and Component Declaration

        . Angular uses components to build web pages and uses modules to basically bundle different pieces,
        . bundle of functionalities of our app and it basically gives Angular the information which features does my app have and use

*/
