import { Component, OnInit } from '@angular/core';
import { SharedataService, SharedData } from './sharedata.service';

@Component({
  selector: 'app-comm-second',
  template: `
    <div *ngIf="sharedData">
      <p>Shared Data: {{ sharedData.message }}</p>
    </div>
  `,
})
export class CommSecond implements OnInit {
  sharedData: SharedData | null = null;

  constructor(private shareDataService: SharedataService) {}

  ngOnInit(): void {
    console.log('CommSecond ngOnInit called');

    this.shareDataService.getData().subscribe((data: SharedData) => {
      console.log('Received data:', data);
      this.sharedData = data;
    });

    this.shareDataService.
    setData({ message: 'Hello from ohh cool roii Shared Service' });
  }
}
