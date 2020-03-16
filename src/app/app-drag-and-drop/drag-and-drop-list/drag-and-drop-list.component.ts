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
  public primaryCardGroup: CardGroup = null;
  public secondaryCardGroups: CardGroup[] = null;

  constructor(private dragAndDropListService: DragAndDropListService) {}

  ngOnInit(): void {
    this.primaryCardGroup = this.dragAndDropListService.createCardGroup(5);
    this.secondaryCardGroups = [];
    for (let i = 0; i < 4; i++) {
      this.secondaryCardGroups.push(
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
    this.primaryCardGroup.cards.push(card);
    const cardGroup = this.secondaryCardGroups.find(g => g.id === cardGroupdId);
    cardGroup.cards = cardGroup.cards.filter(c => c.id !== card.id);
  }

  get connectedCardGroupIds(): string[] {
    return [
      ...this.secondaryCardGroups.map(g => g.id),
      this.primaryCardGroup.id
    ];
  }

  isCardGroupNotEmpty(group: CardGroup): boolean {
    return Boolean(group.cards.length);
  }

  trackById(index: number, card: Card): number {
    return card.id;
  }
}
