import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: Animations.animate
})
export class FooterComponent implements OnInit {
  state = 'inactive';

  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.state = 'active'
    }, 300);
  }

}
