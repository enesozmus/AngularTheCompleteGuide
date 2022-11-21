import { Component } from '@angular/core';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent {

  showParagraph: boolean = false;
  logs = [];

  constructor() {
    console.dir(ErrorEvent);
  }

  onToggleDisplay() {
    this.showParagraph = !this.showParagraph;
    this.logs.push(this.logs.length + 1);
  }

}
