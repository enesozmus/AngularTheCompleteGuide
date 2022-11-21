import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscribe: Subscription;

  ngOnInit(): void {
    /*
        I want to build a new observable with the 'interval' function.
        I called the interval function and passed a number in milliseconds.
        This function will emit an event every x milliseconds.
        Since this is an "observable" we can subscribe to it.
    */
    this.customObs();
    // hala hazı bir observable ile çalışıyoruz
    // This is a hot observables.
    this.firstObservableSubscribe = interval(1000).subscribe(
      {
        // I pass this, the value that is emitted as an argument, in.
        // It's the handler for all the data values that are emitted.
        // next: (count) => { console.log(count); }
      }
    );
  }

  ngOnDestroy(): void {
    /*
        This is a hot observables.
        Hot observables don't necessarily stop emitting values just because you're not interested in them anymore.
        To stop that and to prevent memory leaks you should unsubscribe from observable.
    */
    this.firstObservableSubscribe.unsubscribe();
  }


  customObs() {
    /**
      * Custom Observable
    */
    const customObservable = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() =>
      {
        observer.next(count); count++;
        if(count > 3)
        {
          observer.error(new Error('yakaladın mı?'));
        }
      },
        1000);
    });

    customObservable.subscribe({
      next: (data) => console.log(data),
      //error: (err) => console.log(err)
    });
  }
}
