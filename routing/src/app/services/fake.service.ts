import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  loggedIn: boolean = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => { setTimeout(() => { resolve(this.loggedIn) }, 1500) });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
