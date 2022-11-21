import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../contracts/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();

}

/**
 * import Input from @angular/core.
 * define a property named product with an @Input() decorator.
 * The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
 * Pass the current product as input to the component using property binding.
 * [product]="product"
 */

/**
 * To make the Notify Me button work, the child component needs to notify and pass the data to the parent component.
 * The ProductAlertsComponent needs to emit an event when the user clicks Notify Me and the ProductListComponent needs to respond to the event.
 * import Output and EventEmitter from @angular/core.
 * define a property named notify with an @Output() decorator and an instance of EventEmitter().
 * @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
 * (click)="notify.emit()"
 * Define the behavior that happens when the user clicks the button.
 */
