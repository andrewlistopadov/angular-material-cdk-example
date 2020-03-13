import { Component, OnInit } from '@angular/core';
import { DragAndDropListService, Card } from './drag-and-drop-list.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.scss']
})
export class DragAndDropListComponent implements OnInit {
  public groupACards: Card[] = null;
  public groupBCards: Card[] = null;

  constructor(private dragAndDropListService: DragAndDropListService) {}

  ngOnInit(): void {
    this.groupACards = this.dragAndDropListService.generateCards(5);
    this.groupBCards = [];
  }

  drop(event: CdkDragDrop<Card[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onCardRevoke(card: Card): void {
    this.groupACards.push(card);
    this.groupBCards = this.groupBCards.filter(c => c.id !== card.id);
  }

  trackById(index: number, card: Card): number {
    return card.id;
  }
}
