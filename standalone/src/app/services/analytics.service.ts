import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  registerClick() {
    console.log('Clicked!');
  }
}
