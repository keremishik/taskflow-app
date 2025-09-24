import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-board',
  imports: [],
  templateUrl: './task-board.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .task-board-content{
      display: flex;
      gap: 10rem;
      justify-content: center; /* horizontal center */
      align-items: center; /* vertical center */
    }
    .task-board-column{
      
    }
  `
})
export class TaskBoard {
  
  task = inject(Task);

}
