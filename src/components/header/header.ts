import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    .user-menu {
      position: relative;
    }
    .dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      padding: 10px;
      background-color: #fff;
      border: 0.2rem solid black;
      border-radius: 0.5rem;
    }
    .dropdown a{
      display: block;
      padding: 0.25rem;
      text-decoration: none;
      color: #000;
    }
  `
})
export class Header {
  isUserMenuOpen = true;

  openProfile() {
    console.log('Profil açıldı');
  }
  
  openSettings() {
    console.log('Ayarlar açıldı');
  }
  
  logout() {
    console.log('Çıkış yapıldı');
  }
}
