import { Injectable } from '@angular/core';

/*
@Injectable({
  // This will provide the same instance of the service to the entire application.
  // This is the proof that we're using one and the same instance in the entire application.
  providedIn: 'root'
})
*/

/**
 * This will provide the same instance of the service to the entire application.
 * because providing in the app module has the same effect as using @injectable.

providers: [
    DemoService
  ],
*/

/**
 * AppModule providers: [] and same time another Module providers: []
 *    → let's now also provide it in the DemoModule.
 *    → same
 */

/**
 * I'm providing it in a lazy loaded module and in an eagerly loaded module, AppModule.
 * now the output is different, because we're now using two different objects,
 * two different instances of that same service.
 */
export class DemoService {

  lastLog: string;

  printLog(message: string){
    console.log(message);
    console.log(this.lastLog);
    this.lastLog = message;
  }
}
