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
      <div class="header-container">
        <app-header></app-header>
      </div>
      <div class="main-layout">
        <app-sidebar></app-sidebar>
        <div class="content">
          <app-task-board></app-task-board>
        </div>
      </div>
    </div>
  `,
  styles: `
    .app-container{
      border: 0.2rem solid black;
      border-radius: 0.5rem;
    }
    .header-container{
      border: 0.2rem solid black;
      border-radius: 0.1rem;
    }
    .main-layout{
      border: 0.2rem solid black;
      border-radius: 0.1rem;
    }
    .content{
      border: 0.2rem solid black;
      border-radius: 0.1rem;
    }

  `
})
export class App {

}
