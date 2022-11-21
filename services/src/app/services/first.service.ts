import { Injectable } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
*/
export class FirstService {

  /**
   * We I centralized this code.
   * Now, we need to use this Service in our our Components.
   * Angular provides a much better way of getting access to our Services, and therefore, we should not create the instances manually.
   * 
   *    → the Angular ecosystem   → Angular knows how your app works.
   */
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

}

/**
 * First of all, a service is just a Typescript class.
 *      → the name of the service first
 *      → then Service {}
 *      → class FirstService { }
 * It's a normal TypeScript class nothing special about it.
 * We export this class so that we can use this file anywhere.
 *      → export class FirstService { }
 */

/**
 * I told you to not instantiate it on your own.
 * I told you that Angular offers some great tool which will give us access to our services.
 * It's Angular's dependency injector.
 *      → A dependency is something a class of ours will depend on.
 *      → For example, the NewAccountComponent depends on that FirstService because we want to call a method in FirstService.
 *      → The dependency injector simply injects this dependency, an instance of this class into our component automatically.
 *      → All we need to do is, we need to inform Angular that we require such a instance.
 *      → So how do we inform Angular that we require such a instance?
 *      → by adding a constructor to the class where we want to use our service and adding a special decorator to our service.
 * 
 *  1. constructor(private firstService: FirstService){ }       → This simple task here informs Angular that we will need an instance of this FirstService.
 * 
 *      → Now Angular knows what we want, but it doesn't know how to give us such an instance.
 *      → We need to do one additional step. We need to provide a service.
 *      → Provide simply means we tell Angular how to create it.
 *      → We can add one extra property to the component decorator.   providers: [FirstService]
 *      
 * 
 *  2. @Injectable({ })

 */


/* instance issue */


/**
 * 1. @Injectable({ providedIn: 'root' })
 * 2. The highest possible level is the AppModule.
 * 3. by adding one extra property to the component decorator   → and all its child components
 * 4.
 */

/** providedIn: 'root'
 * This will provide the same instance of the service to the entire application.
 * This is the proof that we're using one and the same instance in the entire application.
 */

/**
 * The Angular dependence injector actually is a hierarchical injector.
 * The AppModule does have a provider's array.
 * If we provide a service there, This will provide the same instance of the service to the entire application.
 * because providing in the app module has the same effect as using @Injectable({ providedIn: 'root' })

    providers: [
        FirstService
      ],
*/

/**
 * AppModule providers: [] and same time another Module providers: []
 *    → let's now also provide it in the DemoModule.
 *    → same
 */

/** different
 * I'm providing it in a lazy loaded module and in an eagerly loaded module, AppModule.
 * now the output is different, because we're now using two different objects,
 * two different instances of that same service.
 */