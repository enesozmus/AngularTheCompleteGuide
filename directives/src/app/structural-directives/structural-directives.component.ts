import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  onShow: boolean = true;
  onShow2: boolean = false;
  onList: boolean = false;
  servers: string[] = ['One', 'Two', 'Three'];

  ngOnInit(): void {
  }

}
