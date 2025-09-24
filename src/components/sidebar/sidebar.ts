import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .sidebar-content{

    }
    .sidebar-item h3{
      text-align: center; /* horizontally center text */
    }
`
})
export class Sidebar {

}
