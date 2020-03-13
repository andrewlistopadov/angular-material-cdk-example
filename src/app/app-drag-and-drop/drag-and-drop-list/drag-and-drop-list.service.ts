import { Injectable } from '@angular/core';

export interface Card {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DragAndDropListService {
  private cardCounter = 0;

  constructor() {}

  public generateCards(count: number): Card[] {
    const newCards = [];
    for (let i = 0; i < count; i++) {
      newCards.push({ id: ++this.cardCounter });
    }
    return newCards;
  }
}
