import { Pipe, PipeTransform } from '@angular/core';

/**
 *  First of all, a pipe is just a Typescript class. 
 *  It's a normal TypeScript class nothing special about it.
 *      → class ShortenPipe { }
 *  So let's export this class so that we can use it outside of the this file too.
 *      → export class ShortenPipe {}
 * So we should add something to it which tells Angular that this is not only a normal TypeScript class but instead something special, a component.
 * We do this by adding a special decorator.
 *      → @Pipe({})
 *      → export class ShortenPipe {}
 * 
 * @Pipe({}) is a decorator that marks a class as pipe and supplies configuration metadata.
 * 
 * A pipe class must implement the PipeTransform interface and needs to also have one special method to be usable as a pipe.
 *      → @Pipe({})
 *      → export class ShortenPipe implements PipeTransform { transform() }
 * 
 * PipeTransform is an interface that is implemented by pipes in order to perform a transformation.
 */
/**
 * Just like components and directives, We must register new pipes in this declarations array [ ].
 */
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  /**
   * Transform method() needs to receive the value which should get transformed.
   * and then method() can receive a list of any arguments.
   * Finally, Transform method() always needs to return something.
   * 
   *      → value: unknown
   *      →  ...args: unknown[]     → parameterizing
   *      → return something
   */
  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }

}
