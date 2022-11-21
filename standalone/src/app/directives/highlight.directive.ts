import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {

  constructor(private element: ElementRef)
  {
    this.element.nativeElement.style.backgroundColor = '#5f5aee';
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.padding = '0.5rem';
  }
}

/**
 * This directive is declared by the SharedModule.
 * This directive is exported by the SharedModule
 * We use this directive in the DetailsComponent.
 */

/**
 * We could actually turn this HighlightDirective into a standalone directive.
 *  → standalone: true,
 *  → It must no longer be added to any declarations in any modules.
 */
