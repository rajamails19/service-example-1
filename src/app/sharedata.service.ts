// shared-service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SharedData {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  private sharedDataSubject = new BehaviorSubject<SharedData>({ message: '' }); // Initialize with empty message

  constructor() { }

  setData(data: SharedData) {
    this.sharedDataSubject.next(data);
  }

  getData(): BehaviorSubject<SharedData> {
    return this.sharedDataSubject;
  }
}
