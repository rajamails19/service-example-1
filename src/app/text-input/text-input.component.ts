import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { PromiseService } from '../promise.service';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  // styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  data: string | undefined ;

  constructor(private observableService: ObservableService) {}

  ngOnInit() {
    this.observableService.getData().subscribe((result) => {
      this.data = result;
    });
  }
}
