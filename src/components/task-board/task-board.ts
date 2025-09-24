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
      gap: 2rem; /* gap between columns */
      justify-content: center; /* horizontal center */  
      height: 100%;
    }
    .task-board-column{
      border: 0.2rem solid black;
      border-radius: 0.5rem;
      width: 350px; /* columns width */
    }
  `
})
export class TaskBoard {
  
  task = inject(Task);

}
