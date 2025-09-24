import { Component, signal } from '@angular/core';
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";
import { TaskBoard } from "../components/task-board/task-board";

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, TaskBoard],
  template: `
    <div class="app-container">
      <div class="header-container">
        <app-header></app-header>
      </div>
      <div class="main-layout">
        <div class="sidebar-container">
          <app-sidebar></app-sidebar>
        </div>
        <div class="task-board-container">
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
      border-radius: 0.5rem;
    }
    .main-layout{
      display: flex; /* to makee sidebar and taskboard side by side <-> */
      border: 0.2rem solid black;
      border-radius: 0.5rem;
    }
    .sidebar-container{
      width: 20%;
      border: 0.2rem solid black;
      border-radius: 0.5rem;
    }
    .task-board-container{
      width: 80%;
      border: 0.2rem solid black;
      border-radius: 0.5rem;
    }

  `
})
export class App {

}
