// user.service.ts
import { Injectable, signal, computed } from '@angular/core';
import WebApp from '@twa-dev/sdk';


///this is not in use anymore
export interface User {
  id: number;
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  isPremium: boolean;
  isBot: boolean;
  userPhotoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSignal = signal<User>({
    id: 0,
    userId: 0,
    username: '',
    firstName: '',
    lastName: '',
    isPremium: false,
    isBot: false,
    userPhotoUrl: ''
  });

  // Computed user properties
  readonly fullName = computed(() => {
    const user = this.userSignal();
    return `${user.firstName} ${user.lastName}`.trim();
  });

  readonly isAuthenticated = computed(() => {
    return !!this.userSignal().id;
  });

  async getCurrentUser(): Promise<User> {
    // Simulate API call
console.log("getting user from telegram")

    const telegramUser = WebApp.initDataUnsafe.user;
    
    const userId=telegramUser?.id
    const username=telegramUser?.username
    const firstName=telegramUser?.first_name
    const lastName=telegramUser?.last_name
    const isPremium=telegramUser?.is_premium
    const is_bot=telegramUser?.is_bot
    const userPhotoUrl=telegramUser?.photo_url
    
console.log(username)
   const userdata: User={
      id:userId?? 0,
      userId:userId?? 0,
      username:username??"none",
      firstName:firstName??"none",
      lastName:lastName??"none",
      isPremium:isPremium??false,
      isBot:is_bot??false,
      userPhotoUrl:userPhotoUrl??"null"
    }

    console.log(userdata)
   return userdata;

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(this.userSignal());
    //   }, 500);
    // });
  }

  updateUser(userData: Partial<User>) {
    this.userSignal.update(currentUser => ({
      ...currentUser,
      ...userData
    }));
  }
}