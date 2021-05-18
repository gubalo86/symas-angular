import { Component } from '@angular/core';
import { LayoutService } from '../services/layouts/layouts.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  constructor(public layoutService:LayoutService){
    this.layoutService.title="Counter";
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
