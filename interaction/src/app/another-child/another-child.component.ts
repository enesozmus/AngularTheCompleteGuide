import { Component, Input } from '@angular/core';
import { Hero } from '../contracts/hero';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.scss']
})
export class AnotherChildComponent {

  // Dışarıdan gelecek değeri karşılar.
  // {{pokemon}} olarak template'e basar.
  // kendimizce özel bir isim vermek istedik ('falanca')
  @Input('falanca') pokemon: string;
}
