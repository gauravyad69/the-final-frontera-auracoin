import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
      <app-bottom-nav></app-bottom-nav>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #121212;
      color: white;
      padding-bottom: 60px;
    }
  `]
})
export class AppComponent {}
