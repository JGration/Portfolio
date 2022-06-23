import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public text: string;
  @Input() public href: string;

  constructor() { 
    this.text = 'Say hello!'
    this.href = ''
  }

  ngOnInit(): void {
  }

  clicked() {
    
  }

}
