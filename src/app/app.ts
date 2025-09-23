import { Component, signal } from '@angular/core';
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";
import { TaskBoard } from "../components/task-board/task-board";

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, TaskBoard],
  template: `
    <div class="app-container">
      <p>App Component</p>
      <app-header></app-header>
      <div class="main-layout">
        <app-sidebar></app-sidebar>
        <div class="content">
          <app-task-board></app-task-board>
        </div>
      </div>
    </div>
  `
})
export class App {

}
