import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('front', style({
        transform: 'none'
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      transition('front => back', [
        animate('400ms')
      ]),
      transition('back => front', [
        animate('200ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() character: string = '';
  @Input() pinyin: string = '';
  @Input() sound: string = '';
  state: string = 'front';

  constructor() { }

  ngOnInit(): void {
  }

  flipCard(): void {
    this.state = this.state === 'front' ? 'back' : 'front';
  }

}
