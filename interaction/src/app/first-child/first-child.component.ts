import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent {

  // Dışarıdan gelecek değeri karşılar.
  // {{item}} olarak template'e basar.
  @Input() item: string;

}
