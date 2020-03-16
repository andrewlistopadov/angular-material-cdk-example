import { Injectable } from '@angular/core';

export interface CardGroup {
  id: string;
  cards: Card[];
}

export interface Card {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DragAndDropListService {
  private groupCounter = 0;
  private cardCounter = 0;

  constructor() {}

  private generateCards(count: number): Card[] {
    const newCards = [];
    for (let i = 0; i < count; i++) {
      newCards.push({ id: ++this.cardCounter });
    }
    return newCards;
  }

  public createCardGroup(cardCount = 0): CardGroup {
    return {
      id: `group-${++this.groupCounter}`,
      cards: this.generateCards(cardCount)
    };
  }
}
