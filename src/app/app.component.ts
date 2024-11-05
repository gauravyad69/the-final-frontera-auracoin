import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { HttpClientModule } from '@angular/common/http';
import WebApp from '@twa-dev/sdk';
import { TelegramUserStore } from './store/user.store';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BottomNavComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  store = inject(TelegramUserStore);
  constructor(private apiService: ApiService) {}

  ngOnInit(){

    //todo fetch the data from api to update the values/state inside the store
    WebApp.expand();
    WebApp.showAlert("Hello there! Your Balance is ", this.store.telegramUser.balanceInfo.refBonus)
   
    const userId = WebApp.initDataUnsafe.user?.id??0;
    const username = WebApp.initDataUnsafe.user?.username??"";
   

  this.apiService.register(userId.toString(), username).subscribe({
    next: (response) => {
      console.log('Registration successful');
      // The token is automatically set in the headers
      // You can now make authenticated requests
      console.log(response, "success");
    },
    error: (error) => {
      console.error('Registration failed:', error);
    }
  });

  }
 
  }
  

