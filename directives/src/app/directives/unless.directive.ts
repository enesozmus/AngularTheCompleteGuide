import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

/**
 * Building a Structural Directive
 */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean)
  {
    if (!condition)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.viewContainerRef.clear();
    }
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
