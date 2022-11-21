import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent {


  /**
   * In Angular, a component's styles can be encapsulated within the component's host element so that they don't affect the rest of the application.
   * The Component decorator provides the encapsulation option which can be used to control how the encapsulation is applied on a per component basis.
        1. ViewEncapsulation.ShadowDom: Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot, used as the component's host element, and apply the provided styles in an isolated manner.
        2. ViewEncapsulation.Emulated: Angular modifies the component's CSS selectors so that they are only applied to the component's view and do not affect other elements in the application, emulating Shadow DOM behavior.
        3. ViewEncapsulation.None: 	Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied and can affect any HTML element present within the application. This mode is essentially the same as including the styles into the HTML itself.

            <hero-details _nghost-pmm-5>
              <h2 _ngcontent-pmm-5>Mister Fantastic</h2>
              <hero-team _ngcontent-pmm-5 _nghost-pmm-6>
                <h3 _ngcontent-pmm-6>Team</h3>
              </hero-team>
            </hero-details>

  * _nghost	: Are added to elements that enclose a component's view and that would be ShadowRoots in a native Shadow DOM encapsulation. This is typically the case for components' host elements.
  * _ngcontent : Are added to child element within a component's view, those are used to match the elements with their respective emulated ShadowRoots (host elements with a matching _nghost attribute).
  */

  /**
   * Many strange attributes are added to HTML elements by Angular.
   * Angular, enforces this style encapsulation.
   * It kind of emulates the Shadow DOM.
   * The Shadow DOM is a technology not supported by all browsers.
   * The Shadow DOM is where each element has its kind of own shadow.
   * The Shadow DOM is where we then could assign styles to each element.
   * This is how Angular emulates it, and that is the default behavior of ViewEncapsulation in Angular.
   */

  /**
   * We can override this encapsulation though.
   * We can add something to the @component decorator.
   *  → It's called encapsulation this property.
   *  → And there as a value we can access a ViewEncapsulation which needs to be imported from at angular core.
   *  → and then we can choose between three modes.
   *      → Emulated  → It's the default.
   *      → None      → We don't see these strange attributes
   *                  → Therefore this component now does not use ViewEncapsulation.
   *                  → Our selectors aren't changed by angular.
   *      → ShadowDom

   */

}
