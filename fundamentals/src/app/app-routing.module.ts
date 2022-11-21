import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // We have to export the RouterModule with our route configurations.
  exports: [RouterModule]
})
// We have to import the AppRoutingModule in AppModule.
export class AppRoutingModule { }
