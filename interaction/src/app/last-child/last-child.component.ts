import { Component, Input } from '@angular/core';
import { Hero } from '../contracts/hero';

@Component({
  selector: 'app-last-child',
  templateUrl: './last-child.component.html',
  styleUrls: ['./last-child.component.scss']
})
export class LastChildComponent {

  // Dışarıdan gelecek değeri karşılar.
  // {{hero.name}} olarak template'e basar.
  @Input() hero!: Hero;

}
