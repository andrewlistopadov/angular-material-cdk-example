import { Component, OnInit } from '@angular/core';
import {
  DragAndDropListService,
  Card,
  CardGroup
} from './drag-and-drop-list.service';
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
  public draggableCardGroup: CardGroup = null;
  public droppableCardGroups: CardGroup[] = null;

  constructor(private dragAndDropListService: DragAndDropListService) {}

  ngOnInit(): void {
    this.draggableCardGroup = this.dragAndDropListService.createCardGroup(5);
    this.droppableCardGroups = [];
    for (let i = 0; i < 4; i++) {
      this.droppableCardGroups.push(
        this.dragAndDropListService.createCardGroup()
      );
    }
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

  onCardRevoke(card: Card, cardGroupdId: string): void {
    this.draggableCardGroup.cards.push(card);
    const cardGroup = this.droppableCardGroups.find(g => g.id === cardGroupdId);
    cardGroup.cards = cardGroup.cards.filter(c => c.id !== card.id);
  }

  get droppableCardGroupIds(): string[] {
    return this.droppableCardGroups.map(g => g.id);
  }

  trackById(index: number, card: Card): number {
    return card.id;
  }
}
