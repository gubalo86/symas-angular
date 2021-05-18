import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/layouts/layouts.service';

@Component({
  selector: 'app-pageCarded',
  templateUrl: './pageCarded.component.html',
  styleUrls:['./pageCarded.component.css']
})
export class PageCardedComponent {
  title:string="Header Test"
  constructor(public layoutService:LayoutService){}
}