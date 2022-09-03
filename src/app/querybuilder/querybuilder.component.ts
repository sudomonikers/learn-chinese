import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.scss']
})
export class QuerybuilderComponent implements OnInit {
  queryBuilder: UntypedFormGroup;

  constructor(private api: APIService, private formBuilder: UntypedFormBuilder) {
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
