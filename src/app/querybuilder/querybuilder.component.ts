import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.scss']
})
export class QuerybuilderComponent implements OnInit, OnDestroy {
  queryBuilder: UntypedFormGroup;
  tags: string[];
  selectedTag: string = '';
  subscription: Subscription;

  constructor(private api: APIService, private formBuilder: UntypedFormBuilder) {
    this.tags = [
      'HSK 1',
      'HSK 2',
      'HSK 3',
      'HSK 4',
      'HSK 5',
      'HSK 6',
      'HSK 7'
    ]
    this.queryBuilder = this.formBuilder.group({
      tags: ['']
    });
    this.subscription = this.queryBuilder.valueChanges.subscribe((change) => {
      console.log(change)
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  query(): void {
    this.api.ListChineseWords().then((response) => {
      console.log(response)
    })
  }
}
