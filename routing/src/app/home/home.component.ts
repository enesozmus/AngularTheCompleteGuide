import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private fakeService: FakeService) { }

  ngOnInit(): void {
  }

  onLoadServers() {
    // The navigate method() doesn't know on which route we're currently on. 
    this.router.navigate(['/servers']);
  }

  onLoadServer1(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'],
      { queryParams: { allowEdit: '1' },
      fragment: 'loading'
    });
  }

  onLogin(){
    this.fakeService.login();
  }

  onLogout(){
    this.fakeService.logout();
  }

}
