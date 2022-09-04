import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {
  response: BehaviorSubject<any>;

  constructor() { 
    this.response = new BehaviorSubject({items: []});
  }
}
