import { Component } from '@angular/core';
import { LayoutService } from '../services/layouts/layouts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  constructor(public layoutService:LayoutService){
    this.layoutService.title="Home"
  }
}
