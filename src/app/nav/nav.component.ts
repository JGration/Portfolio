import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: Animations.animate
})
export class NavComponent implements OnInit {
  state = "inactive";

  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.state = 'active'
    }, 1000);
  }

}
