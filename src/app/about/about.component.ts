import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: Animations.animate
})
export class AboutComponent implements OnInit {
  state = "inactive";

  constructor () {}

  ngOnInit(): void {
    this.state === 'inactive'
    setTimeout(() => {
      this.state = 'active'
    }, 1500);
  }

}
