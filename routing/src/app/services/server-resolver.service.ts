import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from './servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

/**
 * Now let's say we have some dynamic data we have to fetch before a route can be displayed or can be rendered.
 * The resolver will always render the component in the end but it will do some preloading.
 * It will fetch some data the component will then need later on.
 * Of course, the alternative is to render the component or the target page instantly
 *    → and in the OnInit method of this page you could then fetch the data and display some spinner whilst you're doing so.
 */


@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  constructor(private serversService: ServersService) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Server> | Promise<Server> | Server
  {
    return this.serversService.getServer(+route.params['id']);
  }

}
