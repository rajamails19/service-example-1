import { Component } from '@angular/core';

@Component({
  selector: 'app-click-demo',
  templateUrl: './click-demo.component.html',
  styleUrls: ['./click-demo.component.css']
})
export class ClickDemoComponent {
  handleClick(): void {
    alert('Button clicked!');
  }

}
