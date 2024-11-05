import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import WebApp from '@twa-dev/sdk';
import { TelegramUserStore } from './store/user.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  store = inject(TelegramUserStore)
  
  ngOnInit(){
    WebApp.expand();
    WebApp.showAlert("Hello there! Your Balance is ", this.store.telegramUser.balanceInfo.totalBalance)
  }
  

}
