import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './services/server-resolver.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  /**
   * We kind of have some duplication here.
   * All these routes here start with 'servers'.
   * and all these routes with 'users'.
   * 
   * So it would be nice to nest them and to have some child routes which all start with 'servers' or 'users'.
   */
  /*
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id', component: ServerComponent },
  { path: 'servers/:id/edit', component: EditServerComponent },
  */
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found bro!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
