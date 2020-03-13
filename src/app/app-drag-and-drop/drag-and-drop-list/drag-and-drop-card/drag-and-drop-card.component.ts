import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Card } from '../drag-and-drop-list.service';

@Component({
  selector: 'app-drag-and-drop-card',
  templateUrl: './drag-and-drop-card.component.html',
  styleUrls: ['./drag-and-drop-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropCardComponent implements OnInit {
  @Input() card: Card = null;
  constructor() {}

  ngOnInit(): void {}
}
