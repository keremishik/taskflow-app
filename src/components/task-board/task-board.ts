import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-board',
  imports: [],
  templateUrl: './task-board.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskBoard {
  
  task = inject(Task);

}
