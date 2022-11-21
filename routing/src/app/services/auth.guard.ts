import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeService } from './fake.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(
    private fakeService: FakeService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
      return this.fakeService.isAuthenticated().then((authenticated: boolean) =>
      {
        if (authenticated)
        {
          return true;
        }
        else
        {
          this.router.navigate(['/']);
          return false;
        }
      });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
      return this.canActivate(childRoute, state);
    }
}

/**
 * First of all, a guard is just a Typescript class.
 *      → the name of the guard first
 *      → then Guard {}
 *      → class AuthGuard { }
 * It's a normal TypeScript class nothing special about it.
 * We export this class so that we can use this file anywhere.
 *      → export class AuthGuard { }
 * 
 * Then we implemented the CanActivate interface which has the canActivate method().
 
 */

/**
 * It's a functionality, a logic, a code, which is executed before a route is loaded, or when we want to leave a route.
 *  * Angular uygulamamızdaki bazı sayfalara kullanıcı uygulamamıza login olmadan ulaşmasını engellemek isteriz.
 * Bu şekilde sayfa erişimini yani oluşturduğumuz route’lardaki güvenliği sağlamak için route guard tanımlaması yapmak gerekmektedir.
 */

/** CanActivate
 * An interface that a class can implement to be a guard deciding if a route can be activated.
 *    → If all guards return `true`, navigation continues.
 *    → If any guard returns `false`, navigation is cancelled.
 *    → If any guard returns a `UrlTree`, the current navigation is cancelled
 *      and a new navigation begins to the UrlTree returned from the guard.
 */

/** canActivate()
 * 
 * Parameters
 *    → route   : ActivatedRouteSnapshot
 *    → state   : RouterStateSnapshot
 * 
 * Returns
 * 
 *  → Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
 * 
 */


