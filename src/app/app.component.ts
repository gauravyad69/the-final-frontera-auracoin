import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { HttpClientModule } from '@angular/common/http';
import WebApp from '@twa-dev/sdk';
import { TelegramUserStore } from './store/user.store';
import { ApiService } from './api/api.service';
import { UserFacade } from './api/user.facade';

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
  constructor(private apiService: ApiService, private userFacade: UserFacade) { }

  async ngOnInit() {

    //todo fetch the data from api to update the values/state inside the store
    WebApp.expand();

    const userId = WebApp.initDataUnsafe.user?.id ?? 0;
    const username = WebApp.initDataUnsafe.user?.username ?? "";


    this.apiService.register(userId.toString(), username).subscribe({
      next: (response) => {
        //registration successful
      },
      error: (error) => {
        WebApp.showAlert("Registration failed, Do you have a username?");
        WebApp.showAlert("Registration failed:", error);
        WebApp.close();
      }
    });



    const exists = await this.checkUserExists(userId.toString(), username);
    if (exists) {
      this.userFacade.getTelegramUserInfo();///get user info from api
    } else {
      console.log("user doesn't exist in DB")
    }




  }
  async checkUserExists(userId: string, username: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService.checkIfUserExistsInDB(userId, username).subscribe({
        next: (statusCode) => {
          if (statusCode === 200) {
            console.log('User exists');
            resolve(true);
          } else {
            console.log('User does not exist');
            resolve(false);
          }
        },
        error: (error) => {
          console.error('Error checking user:', error);
          resolve(false);
        }
      });
    });
  }




}


