import { Component } from '@angular/core';
import { Animations } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: Animations.animate
  
})
export class AppComponent {
  title = 'portfoliobackup';
  state = 'inactive'
  scroll = 'hide'
  
  ngOnInit (): void {
    this.state === 'inactive'
    setTimeout(() => {
      this.state = 'active'
    }, 300)
  }
}
