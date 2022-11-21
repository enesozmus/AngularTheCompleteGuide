import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirstService } from '../services/first.service';
import { SecondService } from '../services/second.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
  // providers: [FirstService]
})
export class AccountComponent {

  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(
    private firstService: FirstService,
    private secondService: SecondService) {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    });
    console.log('A server status changed, new status: ' + status);
    // # service
    this.secondService.updateStatus(this.id, status);
    this.firstService.logStatusChange(status);
    this.secondService.statusUpdated.emit(status);
  }

}

/**
 * When we click on the button in the AccountComponent Let's say that for some reason we wanted to send an output to the other component...
 * Normally without services, we would have to emit an event in the AccountComponent that something was clicked or something happened.
 */
