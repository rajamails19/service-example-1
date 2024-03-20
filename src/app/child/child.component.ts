import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  // @Input() inputData: string | undefined;

  @Output() outputData = new EventEmitter<Observable<string>>();

  sendDataToParent() {
    this.outputData.emit(of('Data from Child Component'));
  }
}
