import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { Card } from '../drag-and-drop-list.service';

@Component({
  selector: 'app-drag-and-drop-card',
  templateUrl: './drag-and-drop-card.component.html',
  styleUrls: ['./drag-and-drop-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropCardComponent {
  @Input() card: Card = null;
  @Input() draggable = true;
  @Input() revocable = false;
  @Output() cardRevoked = new EventEmitter<Card>();

  constructor() {}

  onRevoke(event: MouseEvent): void {
    event.stopPropagation;
    this.cardRevoked.emit(this.card);
  }
}
