import { Injectable } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: Task[] = [];

  addTask(newTask: Task): void
  {
    this._tasks.push(newTask);
  }

  deleteTask(taskId: number): void {
    this._tasks = this._tasks.filter(task => task.id !== taskId);
  }

  updateTask(taskId: number, updatedTask: Task): void {
    const taskIndex = this._tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) { // if task found
      this._tasks[taskIndex] = updatedTask;
    }
  }

  getTask(taskId: number): Task | undefined {
    return this._tasks.find(task => task.id === taskId);
  }
}
