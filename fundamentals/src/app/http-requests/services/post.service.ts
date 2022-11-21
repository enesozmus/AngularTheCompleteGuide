import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, catchError, throwError } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})

/**
 * First of all, a pipe is just a Typescript class. It's a normal TypeScript class nothing special about it.
 * I created it by exporting a class. So that we can use it outside of the this file too.
 * Services are objects that can be made available to any component of our app.
 * by default, Angular does not make our classes injectable.
 * That's why we should add something to it which tells Angular that this is not only a normal TypeScript class
 * but instead something special, an injectable class.
 * @Injectable({})      → We do this by adding a special decorator.
 *                      → Decorator that marks a class as available to be provided and injected as a dependency.
 * You can inject services on a global level, module level or component level.
 * We are decorating the class with the @Injectable({}) decorator.
 * It'll tell Angular the class can be injected into a component.
 * 
 * providedIn: ''
 *  We have one object of configuration options called providedIn.
 *  This option will tell Angular where to expose the service by setting it to route.
 *                      → Use the ProvidedIn root option, when you want to register the application-level singleton service.
 *                      → The service will be available application wide as a singleton with no need to add it to a module's providers array[].
 *                      → If you don't want a application-wide singleton use the provider's array[] of a component instead.
 */

export class PostService {

  temproryUrl: string = 'https://ng-complete-guide-82c28-default-rtdb.firebaseio.com/posts.json';
  // error messages
  subject = new Subject<string>();

  /**
   * After injecting any class(service), we can start using its methods.
   * We will inject the HttpClient service so that we can start sending http requests.
   */
  constructor(private http: HttpClient) { }


  get() {
    // angled brackets
    return this.http.get<{ [key: string]: Post }>(this.temproryUrl)
      /** 9 Pipe method()
       * Pipe method() is a method
       * that allows we to funnel your observable data through multiple operators before they reach the subscribe method().
       */
      .pipe(
        /** 10
         * I need here is the map operator().
         * The map operator() allows us to get some data and return new data
         *  → which is then automatically re-wrapped into an observable.
         *  → so that we can still subscribe to it
         *  x → if it would not be wrapped into an observable again, we could not subscribe.
         */
        map(response => {
          /** 11
           * and here the idea is that we return an array of posts instead of an object with that cryptic key which then holds our actual post.
           * Now to convert a Javascript object to an array, we have to manually loop through all the keys and create a new array.
           * I'll create a new postsArray[] constant which is empty initially
           * Then, I'll use a for/in loop to go through all my keys in response.
           * and then I want to push each piece of data into my postsArray[].
           * let's use the spread operator now.
           *      → This will pull out all the key-value pairs of that nested object
           *      → This now allows me to also add one new key-value pair to that object
           *      → We're adding an ID field to postsArray[]. Because cryptic string by Firebase is unique and a perfect ID.
           */
          const postsArray: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              postsArray.push({ ...response[key], id: key });
            }
          }
          // We need to make sure that we return postsArray[].
          return postsArray;
        }), catchError(errorResponse => { return throwError(errorResponse) })
      );
    /* Two Ways
    .subscribe(
      /** 12 (response)
       *  response → this is of type any[].
       *  That means TypeScript is not able to detect how our posts look.
       *  postsArray[] also is of type any[].
       *  We can tell TypeScript how it looks like.
       *  One way of doing it would be to assign a type in map operator().
       *  map((response: {[key: string]: Post})
       *  or <> angled brackets
       */
    /**
     * 13
     * The first alternative is that we use a 'subject' in the PostService here  when we got posts.
     *      → response => { }
     *      → and then we can subscribe to that 'subject' in our component.
     * 
     * The alternative and maybe a bit more suited here
     *      → because the 'subject' would be perfect if we have multiple components interested in the posts.
     * 
     * ☼ So a simpler and for this scenario, a better solution would be to simply return the result of our get method.
     *
    response => { }
  );
*/
  }

  create(title: string, content: string) {

    const newPosts: Post = { title: title, content: content };
    this.http.post<{ name: string }>(this.temproryUrl, newPosts).subscribe({
      next: (response) => { console.log(response) },
      error: (err) => { this.subject.next(err.statusText) },
    });
  }

  delete() {
    return this.http.delete(this.temproryUrl);
  }

}

/** Notes
 * posts.json      → this simply is a Firebase requirement.
 * Angular HttpClient will take our Javascript object and automatically convert it to JSON data for us.
 */

/** 1
 * We haven't made data permanent anywhere up to now.
 * How does Angular connect to a database?
 * The thing is we don't want to connect Angular to a database directly.
 * That means we don't want to enter our database credentials into our Angular app.
 * This would be highly insecure because everyone can read our Angular code since it's a front-end Javascript.
 * In that case if we don't connect directly to a database, what else can we do ?
 * Because we certainly don't want to have our standalone and unconnected Angular app.
 * 
 * We send HTTP requests to a server and we get HTTP responses to and from a server.
 * We'll learn how Angular communicate with a back-end, with a database and so on.
 * We'll learn how to send HTTP requests and also how to transform data if you need to.
 */

/** 2
 * A HTTP request is made up of a couple of core parts.
 * The most important part about HTTP requests of course is the URL.
 *  → That's also called the API endpoint.
 * The second important part about HTTP requests are HTTP verbs.
 *  → This defines which kind of request you want to send.
 * The third important part about HTTP requests is setting up set additional metadata.
 * The fourth important part about HTTP requests is body.
 */

/** 3 firebase
 * It's a whole back-end solution which gives us a REST API as well
 * Firebase is not just a database, it's a complete back-end solution that also offers the database.
 */

/** 4 post method()    → It takes a couple of arguments...
 * 
 *   . url: string
 *   . body: any | null
 *   . options: { }
 *     . headers?: HttpHeaders | { }
 *     . context?: HttpContext
 *     . observe?: 'body'
 *     . params?: HttpParams | {}
 *     . reportProgress?: boolean
 *     . responseType: 'arraybuffer', 'text', 'blob', 'json' vs.
 *     . withCredentials?: boolean
 *     : Observable<...>
 */

/** 5 RxJS Library
 *  this.httpClient.post('url', body);      → This request is not being sent and that happens on purpose.
 *  Remember! Angular heavily uses RxJS Library.
 *  HTTP requests are also managed via RxJS Library because they are a perfect use case scenario for RxJS Library.
 * 
 * If you're not subscribing to that prepared HTTP request
 *  then Angular and RxJS know that no one's interested in the response.
 *  and therefore, the request doesn't even get sent because if no one's interested in the response.
 *  It won't send the request. 
 *  No subscription, no request, no response!
 * 
 *  We can wrap them and we can then subscribe to them.
 *  to send a request and to get access to the response, you have to call subscribe method().
 */

/** 6 get or delete method()    → It takes a couple of arguments...
 * 
 *   . url: string
 *   . options: { }
 *     . headers?: HttpHeaders | { }
 *     . context?: HttpContext
 *     . observe?: 'body'
 *     . params?: HttpParams | {}
 *     . reportProgress?: boolean
 *     . responseType: 'arraybuffer', 'text', 'blob', 'json' vs.
 *     . withCredentials?: boolean
 * : Observable<...>
 */

/** 7 No subscription, no request, no response!
 *  RxJS Library...
 */

/** 8 It screams for RxJS Library's operators!
 * If I want to store all my posts in an array,
 *    → we would need to transform this object here because it's a Javascript object to an array.
 *
 * 
 * RxJS Library simply allows us to write cleaner code with different steps
 *    → that we funnel our data through that can easily be swapped or adjusted.
 */