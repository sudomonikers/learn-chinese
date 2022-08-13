import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListChineseWords().then((response) => {
      console.log(response)
    })
  }

}
