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

    WebApp.expand();

    const userId = WebApp.initDataUnsafe.user?.id ?? 0;
    const username = WebApp.initDataUnsafe.user?.username ?? "";


    //handle token generation at the start
    this.apiService.register(userId, username).subscribe({
      next: (response) => {
        //registration successful
      },
      error: (error) => {
        WebApp.showAlert("Registration failed, Do you have a username?");
        WebApp.showAlert("Registration failed:", error);
        WebApp.close();
      }
    });


    //check for referral
    let referreeId = WebApp.initDataUnsafe.start_param;
    let referreeIdInt=0;
    if (referreeId) {
      referreeIdInt = parseInt(String(referreeId).replace(/\D/g, ""));
    }

    //handle user creation and state management of existing user here.
    const exists = await this.checkUserExists(userId, username);
    if (exists) {
      this.userFacade.getTelegramUserInfo();//get user from api
    } else {
      console.log("attempt to create a user")
      //create a new user with the referrer's id included
      await this.createNewUser(userId, username, referreeIdInt);
    }
  }


  //calls user facade
  private async createNewUser(userId: number, username: string, refereeId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userFacade.createUser(userId, username, refereeId).subscribe({
        next: (user) => {
          console.log('User created successfully:', user);
          resolve();
        },
        error: (error) => {
          console.error('Error creating user:', error);
          WebApp.showAlert("Failed to create user account");
          WebApp.close();
          reject(error);
        }
      });
    });
  }

  async checkUserExists(userId: number, username: string): Promise<boolean> {
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


