import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TelegramUserStore } from '../store/user.store';
import { TapValue, TelegramUser } from '../store/user.model';

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


} 