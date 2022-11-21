import { Component } from '@angular/core';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}

/**
 * In v14 and higher, standalone components provide a simplified way to build Angular applications.
 * Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules.
 * Components, directives, and pipes can now be marked as standalone.
 * Angular classes marked as standalone do not need to be declared in an NgModule.
 * Standalone components specify their dependencies directly instead of getting them through NgModules.
 */

/**
 * @Component({ standalone: true, })
 * 
 * Now, this component can be used in other components without declaring it.
 * When you switch this to standalone, you should no longer declare DetailsComponent in any NgModules.
 * 
 * Though you still need to make Angular aware of it.
 * Yes, we as a developer know that DetailsComponent but Angular doesn't know that.
 * Because even if you switch to standalone components, you still must make Angular aware of those components.
 */

/**
 * if X is a standalone component, it can directly import another standalone component Y:
 * 
 * X → standalone: true,
 * Y → standalone: true, imports: []
 */

/**
 * X → standalone: true,
 * Y → 
 * AppModule
 *    → declarations: [ Y ] 
 *    → imports: [ X ]
 * 
 * 
 * The SharedModule that has my HighlightDirective.
 * Well, there are two possible solutions.
 *    1. We could turn the HighlightDirective into a standalone directive.
 *            → imports: [HighlightDirective]
 * 
 *    2. We can import the SharedModule
 *            → imports: [SharedModule], 
 */

/**
 * When you are working with Standalone Components, standalone directives and so on,
 *    → then you always must import them into the other components where you wanna use them
 *    → or with imports into the modules where you wanna use them
 */
