// sender.component.ts
import { Component } from '@angular/core';
import { SubjDataService } from './subjdata.service';

@Component({
  selector: 'app-sender',
  template: `
  <div style="display: flex; justify-content: center; 
  align-items: center; margin-top: 80px;">

    <button (click)="sendData()">Send Data</button>
  
    </div>
  `
})
export class SubjSenderdataComponent {
  constructor(private dataService: SubjDataService) {}

  sendData() {
    this.dataService.sendData({ message: 'Hello from Sender cool Component' });
  }
}
