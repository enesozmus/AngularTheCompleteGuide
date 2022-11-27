# 2022 Angular The Complete Guide
> * [Angular resmi dokümantasyonu](https://angular.io/docs), [Gençay Yıldız](https://www.linkedin.com/in/gen%C3%A7ay-y%C4%B1ld%C4%B1z-a1453987/), [Maximilian Schwarzmüller](https://www.linkedin.com/in/maximilian-schwarzmueller/), [Andrei Neagoie](https://www.linkedin.com/in/andreineagoie/), [Neil Cummings](https://www.linkedin.com/in/necummings/) ve [Jurek Wozniak](https://www.linkedin.com/in/jurek-wozniak-77a4b4114/) adlı eğitmenlerin çalışmalarını takip ederek Angular ve RxJS öğrenme serüvenim...
<hr/>

# İlgili Repolar
> * [Onion Architecture](https://github.com/enesozmus/OnionArchitecture)
> * [Recipe Book](https://github.com/enesozmus/RecipeBook)
> * [Clipz](https://github.com/enesozmus/Clipz)
> * [rxjs-playground](https://github.com/enesozmus/rxjs-playground)
<hr/>

```diff
+ fundamentals
```
What is Angular? **@** Angular Versions **@** What is TypeScript? **@** Angular CLI **@** Project Setup **@** The Angular Structure **@** How an Angular App gets Loaded and Started? **@** Bootstrapping Angular **@** angular.json **@** main.ts file **@** root Module and root Component **@** index.html file **@** Selector Introduction **@** Module Introduction **@** Analyzing the AppModule **@** Components Introduction **@** Understanding the Role of AppModule and Component Declaration **@** Nesting Components **@** Working with Component Templates **@** Working with Component Styles
```diff
+ decorators
```
@Component({}) **@** @NgModule({}) **@** @Input() **@** @Output() **@** @ViewChild() **@** @ContentChild() **@** @HostListener() **@** @HostBinding() **@** @Injectable({}) **@** @Directive() **@** @Pipe({}) **@** @ViewChildren()
```diff
+ data binding
```
What is Databinding? **@** String Interpolation{{ }} **@** Property Binding[ ] **@** Event Binding() **@** Two-way binding **@** Template Variables **@** Getting Access to the Template Variables by calling a method **@** Getting Access to the Template Variables or any elements with @ViewChild() Decorator
```diff
+ directives
```
Understanding Directives **@** Components **@** Attribute directives **@** [ngClass] Directive **@** [NgStyle] Directive **@** [ngModel] Directive **@** Structural directives **@** *ngIf Directive **@** *ngIf Directive with An Else Condition **@** *NgFor Directive **@** *NgFor Directive with Current Index **@** *NgSwitch Directive **@** Building a Basic Attribute Directive **@** Building a Structural Directive
```diff
+ classes
```
Renderer2 **@** ElementRef **@** TemplateRef<C> **@** ViewContainerRef
 ```diff
+ Services & Dependency Injection
```
Hierarchical Dependency Injector **@** @Injectable() **@** providedIn **@** constructor(){}
```diff
+ Angular Routing
```
Routes **@** RouterModule **@** RouterOutlet **@** RouterLink **@** Absolute or Relative paths **@** RouterLinkActive **@** Navigating Programmatically **@** Router **@** navigate([], {}) **@** ActivatedRoute **@** Passing Parameters to Routes **@** Fetching Route Parameters **@** Passing Query Parameters and Fragments **@** Retrieving Query Parameters and Fragments **@** Nested Routing and RouterOutlet **@** Redirecting and Wildcard Routes **@** Protecting Routes with canActivate Interface **@** canActivate() **@** canActivateChild() **@** Controlling Navigation with canDeactivate() **@** Passing Static Data to a Route **@** Resolving Dynamic Data Before A Route Can Be Rendered **@** Lazy Loading
```diff
+ HTTP
```
Understanding HTTP **@** HttpClientModule **@** HttpClient **@** The Anatomy of a Http Request **@** Backend (Firebase) Setup **@** Sending a POST Request **@** POST request and its arguments/parameters **@** Subscribing to the POST method **@** Sending a GET Request **@** GET request and its arguments/parameters **@** Subscribing to the GET method **@** Sending a DELETE Request **@** DELETE request and its arguments/parameters **@** Subscribing to the DELETE method **@** Using RxJS Operators to Transform Response Data **@** Type Safe with the HttpClient **@** Using a Service for Http Requests **@** Services & Components Working Together **@** Handling Errors **@** Using Subjects for Error Handling **@** Using the catchError Operator **@** HttpHeaders **@** HttpParams **@** observe **@** responseType?
```diff
+ Template-Driven Approach
```
Creating the Form and Registering the Controls **@** Submitting and Access the Form **@** Accessing the Form with @ViewChild **@** Understanding Form State **@** Javascript Representation of the Form **@** Using HTML5 Validation **@** Outputting Validation Error Messages **@** Set Default Values with ngModel Property Binding **@** Using ngModel with Two-Way-Binding **@** Handling Radio Buttons **@** Grouping Form Controls **@** Setting and Patching Form Values **@** Resetting Forms
```diff
+ Reactive Approach
```
ReactiveFormsModule **@** AbstractControl **@** FormGroup **@** FormArray **@** FormControl **@** Constructor of FormControl  **@** Adding Validation **@** Creating Custom Validators **@** Grouping Controls **@** AsyncValidator
```diff
+ Pipes
```
Understanding Pipes **@** Using Pipes **@** Parametrizing Pipes **@** Chaining Multiple Pipes **@** Creating a Custom Pipe **@** Parameterizing a Custom Pipe **@** Creating a Filter Pipe **@** Pure and Impure Pipes **@** AsyncPipe
```diff
+ Dynamic Components
```
**@** ViewContainerRef **@** Creating a Component Programmatically
```diff
+ Elements
```
**@** ng-content
```diff
+ Interfaces
```
**@** OnInit
