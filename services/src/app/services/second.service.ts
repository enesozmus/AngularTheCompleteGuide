import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active | service'
    },
    {
      name: 'Testaccount',
      status: 'inactive | service'
    },
    {
      name: 'Hidden Account',
      status: 'unknown | service'
    }
  ];

  // #
  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string){
    this.accounts.push({
      name: name,
      status: status
    });
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }

  constructor() { }
}


/**
 * I will export a TypeScript class.
 * I will create a TypeScript class and I will export it.
 */