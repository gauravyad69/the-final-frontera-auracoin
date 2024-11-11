import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { LucideAngularModule } from 'lucide-angular';
import { Users, Copy, CheckCircle, Coins } from 'lucide-angular';
import { TelegramUserStore } from '../../store/user.store';

interface Referral {
  userId: string;
  username: string;
  balance: number;
  referrals: number;
}

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss'
})
export class FriendsComponent {
  private clipboard = inject(Clipboard);
  store = inject(TelegramUserStore);

  userInfo = this.store.telegramUser.userInfo;



  // Lucide Icons
  readonly Users = Users;
  readonly Copy = Copy;
  readonly CheckCircle = CheckCircle;
  readonly Coins = Coins;

  copied = signal(false);
  inviteLink = signal('https://t.me/blum/app?startapp=ref_'+this.userInfo.userId);

  // referrals: Referral[] = [
  //   { userId: "1", username: 'Alice Johnson', balance: 500, referrals: 3 },
  //   { userId: "2", username: 'Bob Smith', balance: 750, referrals: 5 },
  //   { userId: "3", username: 'Charlie Brown', balance: 250, referrals: 1 },
  //   { userId: "4", username: 'Diana Prince', balance: 1000, referrals: 8 },
  //   { userId: "5", username: 'Ethan Hunt', balance: 600, referrals: 4 },
  // ];

  // Just store the referrals directly from state
  referrals: Referral[] = [];

  constructor() {
    this.referrals = this.store.telegramUser.userInfo().referrals;
  }

  copyToClipboard() {
    this.clipboard.copy(this.inviteLink());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }

  claimCoins() {
    // Implement the logic to claim coins here
    alert('Coins claimed successfully!');
  }

}
