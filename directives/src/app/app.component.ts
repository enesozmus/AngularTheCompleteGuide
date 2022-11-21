import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numbers = [1, 2, 3, 4, 5];
  evenNumbers = [2, 4];
  oddNumbers = [1, 3, 5];
  onlyOdd = false;

  // *ngSwitch
  value: number = 10;
}
