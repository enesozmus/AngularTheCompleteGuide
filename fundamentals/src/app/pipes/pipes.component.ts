import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {


  /** Pipes
   * Pipes are a feature allows you to transform output in your template.
   * Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
   * Pipes are useful because you can use them throughout your application, while only declaring each pipe once.
   * @Pipe{} → A decorator that marks a class as pipe and supplies configuration metadata.
   * A pipe is only responsible for transforming the output.
   * 
   * | uppercase
   * | date
   * | date: 'fullDate' | uppercase
   * 
   */

  /** parameterize a pipe
   * :
   * | date: 'fullDate'         Monday, August 9, 1920
   * https://angular.io/api?query=pipe
   */

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Pipe Test',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus: string = '';
  /** AsyncPipe
   * It helps us with handling asynchronous data.
   * You can imagine this data being returned from a HTTP call, from a server, something like that.
   * To simulate this should get loaded after let's say two seconds.
   * 
   * AsyncPipe  → The AsyncPipe subscribes to an Observable or Promise and returns the latest value it has emitted.
   *            → When a new value is emitted, the AsyncPipe marks the component to be checked for changes.
   *            → When the component gets destroyed, the AsyncPipe unsubscribes automatically to avoid potential memory leaks.
   *            → When the reference of the expression changes, the AsyncPipe automatically unsubscribes from the old Observable or Promise and subscribes to the new one.
   * 
   * I will initialize this promise with a callback method passed to the constructor where this method itself takes two arguments, resolve and reject.
   */
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000)
  });
  // for pure argument
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'Added Server ',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
