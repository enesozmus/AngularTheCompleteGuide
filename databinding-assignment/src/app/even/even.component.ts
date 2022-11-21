import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

  @Input('evenNumber') number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
