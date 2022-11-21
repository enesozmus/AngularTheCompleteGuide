import { Component, ContentChild, ElementRef, OnInit, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterContentInit  {

  @ViewChild('paragraphLeft', { static: true }) paragraphLeftV: ElementRef;
  @ContentChild('paragraphLeft', { static: true }) paragraphLeftC: ElementRef;

  ngOnInit(): void {
    //console.log('XOXO ngOnInit paragraphLeft V: ' + this.paragraphLeftV.nativeElement.textContent);
    console.log('XOXO ngOnInit paragraphLeft C: ' + this.paragraphLeftC.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    //console.log('XOXO ngAfterContentInit paragraphLeft V: ' + this.paragraphLeftV.nativeElement.textContent);
    console.log('XOXO ngAfterContentInit paragraphLeft C: ' + this.paragraphLeftC.nativeElement.textContent);
  }

}
