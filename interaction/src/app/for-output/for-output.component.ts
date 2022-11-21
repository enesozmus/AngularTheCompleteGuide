import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-for-output',
  templateUrl: './for-output.component.html',
  styleUrls: ['./for-output.component.scss']
})
export class ForOutputComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
}
