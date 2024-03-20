// data.service.ts
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjDataService {
  private subject = new Subject<any>(); // Or use BehaviorSubject for initial value

  sendData(data: any) {
    this.subject.next(data);
  }

  getData() {
    return this.subject.asObservable();
  }
}
