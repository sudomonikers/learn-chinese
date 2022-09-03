import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.scss']
})
export class QuerybuilderComponent implements OnInit {
  queryBuilder: FormGroup;

  constructor(private api: APIService, private formBuilder: FormBuilder) {
    this.queryBuilder = this.formBuilder.group({
      tags: ['']
    })
   }

  ngOnInit(): void {
  }

  query(): void {
    this.api.ListChineseWords().then((response) => {
      console.log(response)
    })
  }
}
