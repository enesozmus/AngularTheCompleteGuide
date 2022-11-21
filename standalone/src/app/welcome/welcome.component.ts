import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone: true,
  imports: [DetailsComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
