import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponseService } from '../shared/api-response.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  response: any;
  subscription: Subscription;

  constructor(private apiResponse: ApiResponseService) { 
    this.subscription = this.apiResponse.response.subscribe((response) => {
      this.response = response;
      console.log(response?.items)
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
