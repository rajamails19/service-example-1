// receiver.component.ts
import { Component, OnInit } from '@angular/core';
import { SubjDataService } from './subjdata.service';

@Component({
  selector: 'app-receiver',
  template: `
    <div>{{ receivedData?.message }}</div>
  `
})
export class SubjReceiverDataComponent implements OnInit {
  receivedData: any;

  constructor(private dataService: SubjDataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.receivedData = data;
    });
  }
}
