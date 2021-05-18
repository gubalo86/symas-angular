import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/layouts/layouts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css','../../../tailwind.css']
})
export class DashboardComponent {

  constructor(public layoutService:LayoutService){
    this.layoutService.title="Dashboard";
  }
}