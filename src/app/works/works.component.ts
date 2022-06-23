import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: Animations.animate
})
export class WorksComponent implements OnInit {
  state = "inactive";

  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.state = 'active'
    }, 1000);
  }
}
