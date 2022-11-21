import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';


  // HostBinding
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;


  constructor(private renderer2: Renderer2, private elementRef: ElementRef) { 
    this.backgroundColor = this.defaultColor;
  }


  ngOnInit(): void {
    // We get a couple of helper methods we can use to work with the DOM.
    /**
    * Implement this callback to set a CSS style for an element in the DOM.
    * @param el The element.
    * @param style The name of the style.
    * @param value The new value.
    * @param flags Flags for style variations. No flags are set by default.
    */
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }


  // HostListener
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.backgroundColor = 'pink';
    this.backgroundColor = this.highlightColor;
  }


  // HostListener
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'black');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
