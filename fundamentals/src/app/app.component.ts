/*
    Decorators are a TypeScript feature which allow you to enhance your classes for example.
    Decorators are always attached by adding an @ sign in front of them.
    @Component({}) → It's the component decorator.
    Now this component decorator is not something TypeScript knows from the start, so we have to import it.
    We have to add an import and this import now needs to give us access to component decorator.
*/
import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';
/*
    Now we need to pass a Javascript object which will be stored as metadata to this component decorator to configure it
    because without any configuration, it's still not that valuable to Angular.
*/
@Component({
  /*
        One important information piece is the selector.
        the HTML tag by which you're able to use this component later in your other component templates.
        The selector should be a string.
        You may set up any name you want but you should make sure that it is a unique selector.
        So typically, you prefix it with app- and then a fitting name, like root because it's a root component.
    */
  selector: 'app-root',
  /*
        The other important piece we need to have is the template and here let's reference another external file.
        This external file of course needs to be created.
        This will hold the template, the HTML code of my component here.
        The templateUrl should be a string.
        So we need to tell it where to find the HTML file. We need a relative path for this.
    */
  templateUrl: './app.component.html',
  /*
        The other important piece we need to have is the style and here let's reference another external file.
        This external file of course needs to be created.
    */
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private demoService: DemoService){

  }
  ngOnInit(): void {
    this.demoService.printLog('Hello from AppComponent ngOnInit!');
  }


}

/*
    Components are a key feature in Angular.
    You build your whole application by composing it from a couple of components.
    It allows you to split up your complex application, your complex webpage into reusable parts.
*/

/*
    First of all, a component is just a Typescript class.
    We export this class so that we can use this file anywhere.
      the name of the component first
      then component {}
    It's a normal TypeScript class nothing special about it.
    So we should add something to it which tells Angular that this is not only a normal TypeScript class but instead something special, a component.
    We do this by adding a special decorator.
*/
