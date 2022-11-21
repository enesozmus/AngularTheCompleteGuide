/** Communication
 * Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services.
 * Angular provides a client HTTP API for Angular applications the HttpClient service class.
 * The HTTP client service offers the following major features.
 *      1. The ability to request typed response objects
 *      2. Streamlined error handling
 *      3. Testability features
 *      4. Request and response interception
 */

/** HttpClientModule
 * Before you can use HttpClient, you need to import the Angular HttpClientModule. Most apps do so in the root AppModule.
 *      → import { HttpClientModule } from '@angular/common/http';
 */

/** HttpClient
 * 
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures.
 * The return type varies based on the signature that is called. (mainly the values of `observe` and `responseType`)
 * You can then inject the HttpClient service as a dependency of an application class.
 *      → constructor(private http: HttpClient) { }
 *      → The HttpClient service makes use of observables for all transactions. 
 */

/** call subscribe()
 * For all HttpClient methods, the method doesn't begin its HTTP request until you call subscribe() on the observable the method returns.
 * Calling subscribe() triggers execution of the observable and causes HttpClient to compose and send the HTTP request to the server.
 * This is true for all HttpClient methods.
 * You should always unsubscribe from an observable when a component is destroyed.
 * All observables returned from HttpClient methods are cold by design.
 */

/** <T>
 * Structure your HttpClient request to declare the type of the response object, to make consuming the output easier and more obvious.
 * Specifying the response type acts as a type assertion at compile time.
 * Specifying the response type is a declaration to TypeScript that it should treat your response as being of the given type.
 */

/** HttpClient.get()
 * Use the HttpClient.get() method to fetch data from a server.
 * The asynchronous method sends an HTTP request, and returns an Observable that emits the requested data when the response is received.
 * The return type varies based on the observe and responseType values that you pass to the call.
 * The get() method takes two arguments
 *      1. the endpoint URL from which to fetch
 *      2. an options object that is used to configure the request.
 * 
 * Use the options object to configure various other aspects of an outgoing request.
 * 
 *      (url: string, options?: { })
 *      {
 *        . headers?: HttpHeaders | { }
 *        . context?: HttpContext
 *        . observe?: 'body' | 'events' | 'response',
 *        . params?: HttpParams | {}
 *        . reportProgress?: boolean
 *        . responseType?: 'arraybuffer'|'blob'|'json'|'text',
 *        . withCredentials?: boolean
 *      }
 */

/** Making a GET request
 * 
 * getConfig(): Observable<Hero>
 * {
 *      return this.http.get<Hero>(this.heroesUrl);
 * }
 */

/** Making a POST request
 * Apps often send data to a server with a POST request when submitting a form.
 * The method takes a resource URL and two additional parameters:
 * 
 *  url     →
 *  body    →	The data to POST in the body of the request.
 *  options	→   An object containing method options
 * 
 * addHero(hero: Hero): Observable<Hero>
 * {
 *      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions);
 * }
 * 
 * You must call subscribe() or nothing happens!
 */

/** Making a DELETE request
 * This application deletes a hero with the HttpClient.delete method by passing the hero's ID in the request URL.
 * You must call subscribe() or nothing happens. Just calling HeroesService.deleteHero() does not initiate the DELETE request.
 * 
 * deleteHero(id: number): Observable<unknown>
 * {
 *      return this.http.delete(url, httpOptions);
 * }
 * 
 * You must call subscribe() or nothing happens!
 */

/** Making a PUT request
 * An app can send PUT requests using the HTTP client service.
 * The following HeroesService example, like the POST example, replaces a resource with updated data.
 * 
 * updateHero(hero: Hero): Observable<Hero>
 * {
 *      return this.http.put<Hero>(this.heroesUrl, hero, httpOptions);
 * }
 * 
 * You must call subscribe() or nothing happens!
 */

/** headers
 * It's about how you can configure HTTP requests.
 * Many servers require extra headers for save operations.
 *      → let the client and the server pass additional information with an HTTP request or response.
 *      → headers: new HttpHeaders({})
 * Sometimes you also need to set some special 'headers'.
 * For example when you have a back-end that requires authorization.
 * For example, a server might require an authorization token or something else to explicitly declare something.
 * We can defines such 'headers' in an httpOptions object.
 * 
 * Headers are key-value pairs.
 * 
 * const httpOptions = { headers: new HttpHeaders {
 *      'Content-Type':  'application/json',
 *      Authorization: 'my-auth-token'}
 * }
 
 * Updating headers
 * You can't directly modify the existing headers within the previous options object because instances of the HttpHeaders class are immutable.
 * Use the set() method instead, to return a clone of the current instance with the new changes applied.
 * 
 * httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
 */

/** Configuring HTTP URL parameters
 * It's about how you can configure HTTP requests.
 * Use the HttpParams class with the params request option to add URL query strings in your HttpRequest.
 * 
 * const searchParams = new HttpParams();
 * searchParams.append('custom', 'key');
 * 
 *          params: new HttpParams().set('aaa', 'bbb')          →   ?aaa=bbb
 *          |
 *          params: searchParams
 * 
 * const params = new HttpParams({ fromString: 'name=foo' });
 */

/** observer?:
 * The observe option specifies how much of the response to return
 *  → yanıtın ne kadarının döndürüleceğini belirtir.
 * 
 * observe: 'body'
 *  → means that you get that response data extracted and converted to a Javascript object automatically.
 * 
 * observe: 'response'
 *  → You might need more information about the transaction than is contained in the response body.
 *  → Şimdi HttpClient.get(), yalnızca gövdede bulunan JSON verileri yerine HttpResponse türünde bir Gözlenebilir döndürür.
 *  → Angular'daki HttpClient ile gözlem seçeneğini kullanarak bir HTTP isteğinin tam yanıtını kolayca alabilirsiniz.
 */

/** responseType:
 * The responseType option specifies the format in which to return data
 *  → verilerin döndürüleceği formatı belirtir.
 */

/** Making a JSONP request
 * Apps can use the HttpClient to make JSONP requests across domains when a server doesn't support CORS protocol.
 * Angular JSONP requests return an Observable.
 */

/** Requesting non-JSON data
 * Not all APIs return JSON data.
 * 
 * responseType: 'text'
 *  → HttpClient.get() returns a string rather than the default JSON because of the responseType option.
 * 
 * const options = { responseType: 'text' as const };
 */

/** Handling request errors
 * An app should give the user useful feedback when data access fails. 
 * A raw error object is not particularly useful as feedback.
 * In addition to detecting that an error has occurred, you need to get error details and use those details to compose a user-friendly response.
 * If the request fails on the server, HttpClient returns an error object instead of a successful response.
 * When an error occurs, you can obtain details of what failed in order to inform your user.
 * In some cases, you might also automatically retry the request.,
 
 *      1. The server backend might reject the request, returning an HTTP response with a status code such as 404 or 500. These are error responses.
 *      2. Something could go wrong on the client-side such as a network error that prevents the request from completing successfully or an exception thrown in an RxJS operator.
 * HttpClient captures both kinds of errors in its HttpErrorResponse. 
 */

/** Retrying a failed request
 * Sometimes the error is transient and goes away automatically if you try again.
 * The RxJS library offers several retry operators. 
 * For example, the retry() operator automatically re-subscribes to a failed Observable a specified number of times.
 */

/**
 * 
 * HTTP_INTERCEPTORS
 *      → A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *      → Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 * 
 * HttpHandler
 *      → When injected, `HttpBackend` dispatches requests directly to the backend, without going through the interceptor chain.
 */


