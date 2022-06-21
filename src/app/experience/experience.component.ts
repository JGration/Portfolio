import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: Animations.animate
})
export class ExperienceComponent implements OnInit {
  state = "inactive";

  constructor () {}


  ngOnInit(): void {
    this.state === 'inactive'
    setTimeout(() => {
      this.state = 'active'
    }, 1500);
  }

}
