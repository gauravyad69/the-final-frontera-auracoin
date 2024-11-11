// profile.component.ts
import { Component, inject } from '@angular/core';
import { TelegramUserStore } from '../../store/user.store';
import { UserFacade } from '../../api/user.facade';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  store = inject(TelegramUserStore);
  // private userFacade = inject(UserFacade);

  // Access store values
  userInfo = this.store.telegramUser.userInfo;

  getFormattedBalance(): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(this.store.telegramUser().balanceInfo.totalBalance);
  }

  updateBadge() {
    console.log('Updating badge...');
  }

  openWallet() {
    console.log('Opening wallet...');
    
  }

  openHistory() {
    console.log('Opening history...');
  }
}