import { Component } from '@angular/core';
import { HEROES } from './contracts/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = '<ng-content>';

  // [item]="currentItem" olarak dışarıya iletir.
  currentItem = 'Television';
  // [falanca]="currentHero" olarak dışarıya iletir.
  currentHero = 'Pikachu';
  // *ngFor="let hero of heroes" [hero]="hero" olarak dışarıya iletir.
  heroes = HEROES;

  //
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  // Chapter
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  // Multiple
  cars = [
    { brand: 'Mercedes-Benz', color: 'black', year: '2022' },
    { brand: 'Toyota', color: 'red', year: '2020' },
    { brand: 'Ford', color: 'green', year: '2019' },
  ];

  onCarCreatedBlack($event: { brand: string, color: string, year: string }) {
    this.cars.push({
      brand: $event.brand,
      color: 'black',
      year: $event.year
    });
  }

  onCarCreatedRed($event: { brand: string, color: string, year: string }) {
    this.cars.push({
      brand: $event.brand,
      color: 'red',
      year: $event.year
    });
  }

  onCarCreatedGreen($event: { brand: string, color: string, year: string }) {
    this.cars.push({
      brand: $event.brand,
      color: 'green',
      year: $event.year
    });
  }
}
