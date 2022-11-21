import { Component, OnInit } from '@angular/core';
import { SecondService } from './services/second.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }


  // # service
  accountsFromService: { name: string, status: string }[] = [];

  constructor(private secondService: SecondService) {

  }

  ngOnInit(): void {
    this.accountsFromService = this.secondService.accounts;
  }

}
