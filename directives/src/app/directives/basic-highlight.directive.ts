import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {


  constructor(private elementRef: ElementRef) {
    // ElementRef allows us to access any element or template variable directly from our TypeScript code.
    // We are using Angular's ElementRef to get the reference of the native DOM element.
    // but it's not a good practice to directly access your elements.
    // Look at the BetterHighlightDirective
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'black';
    this.elementRef.nativeElement.style.color = 'white';
  }

}


/**
 * First of all, a directive is just a Typescript class.
 *      → the name of the directive first
 *      → then Directive {}
 * It's a normal TypeScript class nothing special about it.
 * We export this class so that we can use this file anywhere.
 */

/**
 * So we should add something to it which tells Angular that this is not only a normal TypeScript class
 *    → but instead something special, a directive.
 * We do this by adding a special decorator.
 *    → @Directive({})
 */

/**
 * '[appBasicHighlight]' given to the "selector" property in the @Directive({}) decorator represents the reference of our directive.
 *    → <instance appCustom></instance>
 */


/** Getting the DOM object where the directive will be used
 * 
 * Constructer metodunda bulanan “ElementRef” tipinden elementRef parametresi bizlere ilgili direktifin kullanıdığı dom nesnesini getirecektir.
 */


/**
 * We have to inform Angular that we have a new directive.
 * We have to declare our directive.
 */