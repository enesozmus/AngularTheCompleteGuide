import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };
    /**
     * Observables allow you to easily work with asynchronous tasks.
     * And this is an asynchronous task
     * because the parameters of your currently loaded route
     * might change at some point in the future if the user clicks this link.
     * 
     *    → But you don't know when.
     *    → But you don't know if.
     *    → But you don't know how long it will take...
     * 
     * So therefore you can't block your code and wait for this to happen here
     * because it might never happen.
     */
    /**
     * So an observable is an easy way to subscribe to some event which might happen in the future...
     */
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.user.id = params['id']
      this.user.name = params['name']
    });
  }
  
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
