import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent {


  /**
   * By default, NgModules are eagerly loaded.
   * This means that as soon as the application loads, so do all the NgModules, whether they are immediately necessary or not.
   * Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
   */

}
