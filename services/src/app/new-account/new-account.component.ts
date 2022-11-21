import { Component, EventEmitter, Output } from '@angular/core';
import { FirstService } from '../services/first.service';
import { SecondService } from '../services/second.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
  // providers: [FirstService]
})
export class NewAccountComponent {

  constructor(
    private firstService: FirstService,
    private secondService: SecondService)
  {
    this.secondService.statusUpdated.subscribe((status: string) => {alert('New Status: ' + status)});
  }

  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    
    console.log('A server status changed, new status: ' + accountStatus);
    // # service
    this.secondService.addAccount(accountName, accountStatus);  
    this.firstService.logStatusChange(accountStatus);

  }

}
