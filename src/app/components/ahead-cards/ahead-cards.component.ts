import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ahead-cards',
  templateUrl: './ahead-cards.component.html',
  styleUrl: './ahead-cards.component.css'
})
export class AheadCardsComponent {
  @Input() fourDaysData!:any
}
