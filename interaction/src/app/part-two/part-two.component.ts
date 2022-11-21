import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.scss']
})
export class PartTwoComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked
{

  /**
   * Why can't we access it?
   * Because by default all properties of components are only accessible inside these components
   * not from outside.
   * 
   * @Input()   → parent component'den gelecek olanı karşılar
   * 
   * Now, we are successfully exposing this property to the world.
   */
  @Input('takeItFromParentComp') car: { brand: string, color: string, year: string };
  @ViewChild('header', { static: true }) header: ElementRef;

  // Lifecycle Hooks
  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
    // car → our bond property
    // 1. currentValue
    // 2. firstChange
    // 3. previousValue
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('ngOnInit Text content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('ngAfterViewInit Text content: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

}
