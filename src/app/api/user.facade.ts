import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TelegramUserStore } from '../store/user.store';
import { TapValue, TelegramUser } from '../store/user.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  private store = inject(TelegramUserStore);
  private api = inject(ApiService);

  updateBalance(newBalance: number) {
    this.api.updateBalance(newBalance).subscribe({
      next: (user: TelegramUser) => {
        this.store.updateUserRefBonus(newBalance);
      },
      error: (error) => console.error('Error updating balance:', error)
    });
  }

  updateTapValue(newTapValue: TapValue) {
    this.api.updateUserTapValue(newTapValue).subscribe({
      next: (tapValue: TapValue) => {
        this.store.updateTapValue(newTapValue);
      },
      error: (error) => console.error('Error updating tap value:', error)
    });
  }

  getBalance() {
    this.api.getTelegramUser().subscribe({
      next: (user: TelegramUser) => {
        console.log('Current balance:', user.balanceInfo.balance); // Log or handle the balance as needed
        console.log('Current refBOnus:', user.balanceInfo.refBonus); // Log or handle the balance as needed
        this.store.updateUserRefBonus(user.balanceInfo.refBonus); // Update the state with the new refBonus
      },
      error: (error) => console.error('Error fetching balance:', error)
    });
  }


  //this will handle the ui update at the start of the app
  getTelegramUserInfo(){
    this.api.getTelegramUser().subscribe({
      next: (user: TelegramUser) => {
        this.store.updateEverythingInUI(user);///get the "user" from the api and store it in the state
      },
    });
  }


  ///this will call the call to create a user and get the returned user and update the store/state with it
  createUser(userId: number, username: string, refereeId:number|null) {
    return this.api.createTelegramUser(userId, username, refereeId).pipe(
      tap((user: TelegramUser) => {
        this.store.updateEverythingInUI(user);
      })
    );
  }
} 