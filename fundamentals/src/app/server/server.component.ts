import { Component } from '@angular/core';


@Component({
    // One important information piece is the selector.
    // the HTML tag by which you're able to use this component later in your other component templates.
    // The selector should be a string.
    // You may set up any name you want but you should make sure that it is a unique selector.
    // So typically, you prefix it with app- and then a fitting name, like server because it's a ServerComponent.
    // So we have our selector here, app-server and we can use it inside other templates.
    // I can add my 'app-server' selector as an element.
    // <app-server></app-server>
    selector: 'app-server',
    // The other important piece we need to have is the template and here let's reference another external file.
    // This external file of course needs to be created.
    // This will hold the template, the HTML code of my component here.
    // The templateUrl should be a string.
    // So we need to tell it where to find the HTML file. We need a relative path for this.
    templateUrl: './server.component.html',
    // The other important piece we need to have is the style and here let's reference another external file.
    // This external file of course needs to be created.
    styleUrls: ['./server.component.scss']
})
export class ServerComponent {

    serverID: number = 1;
    serverStatus: string = 'offline';
    allowNewServer: boolean = false;
 }