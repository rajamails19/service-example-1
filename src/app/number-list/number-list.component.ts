import { Component } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent {
  numbers = [1, 2, 3, 4, 5];
}
